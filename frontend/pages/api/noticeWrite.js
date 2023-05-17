import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

const buildNoticePath = () => {
  return path.join(process.cwd(), 'data', 'noticeList.json');
};

const extractNotice = async filePath => {
  try {
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData);
    return data;
  } catch (error) {
    console.error('Error extracting notice:', error);
    throw error;
  }
};

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), 'public', 'image');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler = async (req, res) => {
  try {
    const imageDir = path.join(process.cwd(), 'public', 'image');
    await fs.mkdir(imageDir, { recursive: true });
  } catch (error) {
    console.error('Error creating image directory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }

  const { fields, files } = await readFile(req, true);
  const { title, content } = fields;

  const fileKeys = Object.keys(files);
  const firstFileKey = fileKeys[0]; // 첫 번째 파일의 키 가져오기
  const firstFile = files[firstFileKey]; // 첫 번째 파일 가져오기
  const filePathRelativeToPublic = firstFile.filepath.replace(
    path.join(process.cwd(), 'public'),
    ''
  );

  try {
    // 필요한 작업을 수행하고 새로운 응답 데이터를 생성합니다.
    const responseData = {
      title: title,
      content: content,
      firstFile: filePathRelativeToPublic, // 첫 번째 파일 정보 추가
    };

    const filePath = buildNoticePath();
    const data = await extractNotice(filePath);
    data.push(responseData);
    await fs.writeFile(filePath, JSON.stringify(data));

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error reading image directory:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
