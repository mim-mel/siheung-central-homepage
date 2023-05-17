import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap } from '../introduce/about';
import QuillEditor from '../../components/QuillEditor';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const NoticeWritePage = () => {
  const router = useRouter();

  const isLoggedIn = useSelector(
    state => state.persistedReducer.userReducer.isLoggedIn
  );

  const [content, setContent] = useState('');

  const handleEditorChange = value => {
    setContent(value);
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      alert('관리자 로그인 후 글을 작성해 주세요');
      router.push('/login');
    }
  }, []);

  return (
    <Wrap>
      <WritePageWrap>
        <QuillEditor value={content} onChange={handleEditorChange} />
      </WritePageWrap>
    </Wrap>
  );
};

export default NoticeWritePage;

// style
const WritePageWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
`;
