import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

export default function QuillEditor() {
  const [Title, setTitle] = useState('');
  const [Thumbnail, setThumbnail] = useState('');
  const [Content, setContent] = useState('');

  const quillRef = useRef();
  const thumbnailRef = useRef();

  const onClickContents = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', thumbnailRef.current.files[0]);
    formData.append('title', Title);
    formData.append('content', Content);

    for (let value of formData.values()) {
      console.log(value);
    }

    try {
      const res = await axios.post('/api/noticeWrite', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
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
            />
          </LabelWrap>
          <LabelWrap>
            <InputLabel>썸네일</InputLabel>
            <ThumbInput
              type='file'
              accept='image/*'
              value={Thumbnail}
              onChange={e => handleThumbnail(e)}
              placeholder='썸네일을 등록해 주세요'
              ref={thumbnailRef}
              required
            />
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

const PageWrap = styled.div`
  display: block;
`;

const EditorWrap = styled.div`
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
`;

const TitleText = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #816459;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

const InputWrap = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LabelWrap = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 370px;
  margin-bottom: ${props => (props.marginBottom ? '35px' : '20px')};
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const TitleInput = styled.input`
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

const ThumbInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  box-sizing: border-box;
  font-size: 15px;

  &:focus {
    outline: none;
    border: 2px solid #ad9686;
  }

  ::file-selector-button {
    width: 100px;
    height: 40px;
    margin-right: 12px;
    border-radius: 7px;
    border: none;
    background-color: #ad9686;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Button = styled.div`
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
`;
