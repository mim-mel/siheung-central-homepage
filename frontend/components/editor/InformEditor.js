import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  PageWrap,
  TitleText,
  EditorWrap,
  InputWrap,
  LabelWrap,
  InputLabel,
  TitleInput,
  ThumbInputWrap,
  ThumbInput,
  ThumbSaveButton,
  Button,
} from './NoticeEditor';

const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;

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

export default function InformEditor() {
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

    const file = thumbnailRef.current.files[0];

    if (!file) {
      alert('파일이 선택되지 않았습니다.');
      return;
    }
    const fileSize = file.size;

    const maxSize = 1 * 1024 * 1024; // 1MB

    if (fileSize > maxSize) {
      alert('파일 크기가 1MB 제한을 초과합니다.');
      return;
    }

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
      const res = await axios.post('/api/inform/write', reqbody, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      router.push('/news/inform');
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
      <TitleText>센트럴 소식 글쓰기</TitleText>
      <EditorWrap>
        <InputWrap>
          <LabelWrap>
            <InputLabel>제목</InputLabel>
            <TitleInput
              type='text'
              value={Title}
              onChange={e => handleTitle(e)}
              placeholder='제목을 입력해 주세요'
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
