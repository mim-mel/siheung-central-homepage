import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';

const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: {
    container: [
      // ['image'],
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ],
    // handlers: {
    //   image: imageHandler,
    // },
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'image',
];

export default function NoticeEditor() {
  const router = useRouter();
  //input 및 textEditior 값
  const [Title, setTitle] = useState('');
  const [Thumbnail, setThumbnail] = useState('');
  const [Content, setContent] = useState('');

  //이미지 주소
  const [ImgSrc, setImgSrc] = useState('');

  //이미지 아이디
  const [ImgId, setImgId] = useState('');

  //썸네일 저장되었는지 확인하는 값
  const [IsSaved, setIsSaved] = useState(false);

  const quillRef = useRef();
  const thumbnailRef = useRef();

  //cloudinary 파일 업로드
  const onSubmitThumb = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', thumbnailRef.current.files[0]);
    formData.append('upload_preset', 'centralamc');

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(res);
      setImgSrc(res.data.secure_url);
      setImgId(res.data.public_id);
      setIsSaved(true);
    } catch (err) {
      console.log(err);
    }
  };

  //cloudinary 파일 삭제
  // const onDeleteThumb = async e => {
  //   e.preventDefault();

  //   const timestamp = Math.floor(Date.now() / 1000);
  //   const signature = crypto
  //     .createHash('sha1')
  //     .update(
  //       `public_id=${ImgId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`
  //     )
  //     .digest('hex');

  //   try {
  //     const response = await axios.delete(
  //       `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/destroy`,
  //       {
  //         params: {
  //           public_id: ImgId,
  //           timestamp,
  //           api_key: CLOUDINARY_API_KEY,
  //           signature,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //랜덤 아이디 생성
  const generateRandomId = length => {
    const characters =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let randomId = '';

    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }

    return randomId;
  };

  const onClickContents = async e => {
    e.preventDefault();

    if (IsSaved === false) {
      alert('썸네일 파일을 등록 후 저장해 주세요');
      return;
    }

    if (Title === '') {
      alert('제목을 입력해 주세요');
      return;
    }

    if (Content === '') {
      alert('글을 작성해 주세요');
      return;
    }

    const uniqueId = generateRandomId(8);

    const dateObj = new Date();
    const year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();

    // 달(month)과 일(day)이 10보다 작은 경우 앞에 0을 붙여줍니다.
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    const currentDate = `${year}-${month}-${day}`;

    const reqbody = {
      id: uniqueId,
      day: currentDate,
      title: Title,
      content: Content,
      imgSrc: ImgSrc,
      imgId: ImgId,
    };

    try {
      const res = await axios.post('/api/notice/write', reqbody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      router.push('/news/notice');
    } catch (err) {
      console.log(err);
    }
  };

  const handleTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleThumbnail = e => {
    e.preventDefault();
    setThumbnail(e.target.value);
  };

  return (
    <PageWrap>
      <TitleText>공지사항 글쓰기</TitleText>
      <EditorWrap>
        <InputWrap>
          <LabelWrap>
            <InputLabel>제목</InputLabel>
            <TitleInput
              type='text'
              value={Title}
              onChange={e => handleTitle(e)}
              placeholder='제목을 입력해 주세요'
              required
              id='title'
              name='title'
            />
          </LabelWrap>
          <LabelWrap>
            <InputLabel>썸네일</InputLabel>
            <ThumbInputWrap>
              <ThumbInput
                type='file'
                accept='image/*'
                value={Thumbnail}
                onChange={e => handleThumbnail(e)}
                placeholder='썸네일을 등록해 주세요'
                ref={thumbnailRef}
                required
                id='thumbnail'
                name='thumbnail'
              />
              <ThumbSaveButton onClick={e => onSubmitThumb(e)}>
                썸네일 저장
              </ThumbSaveButton>
              {/* <ThumbSaveButton onClick={e => onDeleteThumb(e)}>
                썸네일 삭제
              </ThumbSaveButton> */}
            </ThumbInputWrap>
          </LabelWrap>
        </InputWrap>
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme='snow'
          value={Content}
          onChange={setContent}
          ref={quillRef}
          style={{
            height: '460px',
            width: '100%',
          }}
        />
        <Button onClick={e => onClickContents(e)}>저장하기</Button>
      </EditorWrap>
    </PageWrap>
  );
}

export const PageWrap = styled.div`
  display: block;
`;

export const EditorWrap = styled.div`
  position: relative;
  width: 900px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 20px;
  padding: 0px 45px;
  box-sizing: border-box;
  background-color: white;
  padding-bottom: 40px;

  @media screen and (max-width: 1020px) {
    width: 750px;
    height: 700px;
  }

  @media screen and (max-width: 700px) {
    width: 360px;
    height: 800px;
    padding: 0px 30px;
  }
`;

export const TitleText = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #816459;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

export const InputWrap = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 100%;
    position: relative;
    top: -30px;
  }
`;

export const LabelWrap = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 370px;
  margin-bottom: ${props => (props.marginBottom ? '35px' : '20px')};

  @media screen and (max-width: 1020px) {
    width: 300px;
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 7px;
  border: 1px solid #b5b5b5;
  padding: 15px;
  box-sizing: border-box;
  font-size: 15px;

  &:focus {
    outline: none;
    border: 2px solid #ad9686;
  }
`;

export const ThumbInputWrap = styled.div`
  display: flex;
`;

export const ThumbInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  box-sizing: border-box;
  font-size: 15px;
  margin-right: 15px;

  &:focus {
    outline: none;
    border: 2px solid #ad9686;
  }

  ::file-selector-button {
    width: 85px;
    height: 35px;
    margin-right: 12px;
    border-radius: 7px;
    border: none;
    background-color: #eaeaea;
    color: black;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const ThumbSaveButton = styled.div`
  width: 135px;
  height: 40px;
  border-radius: 7px;
  background-color: #ad9686;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Button = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 7px;
  background-color: #ad9686;
  position: relative;
  top: 57px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    top: 10px;
    left: -15px;
  }
`;
