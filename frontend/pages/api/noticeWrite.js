import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import nc from 'next-connect';

export const config = {
  api: {
    bodyParser: false,
  },
};

//multer 파일업로드
const handler = nc();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/upload');
  },
  filename: function (req, file, cb) {
    const nowDate = dayjs(Date.now()).format('YYMMDDHHMM');
    cb(null, `${nowDate}_${file.originalname}`);
  },
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return callback(new Error('PNG, JPG만 업로드하세요'));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

let imgUpload = multer({
  storage: storage,
});

let uploadFile = imgUpload.single('file');

handler.use(uploadFile);

handler.post(async (res, req) => {
  console.log('req', req.file);
  console.log('req', req.body);
  res.status(200).send('Uploded File');
});

// const upload = async (req, res) => {
//   if (req.method === 'POST') {
//     const form = formidable({ multiples: true });

//     form.parse(req, async (error, fields, files) => {
//       if (error) {
//         res.status(500).json({ error: 'Error parsing form data' });
//         return;
//       }

//       const { title, content } = fields;
//       const { image } = files;

//       try {
//         const imageUrl = await uploadImage(image);
//         res.status(200).json({ title, content, imageUrl });
//       } catch (error) {
//         res.status(500).json({ error: 'Error uploading image' });
//       }
//     });
//   } else {
//     res.status(400).json({ error: 'Invalid request method' });
//   }
// };

export default handler;
