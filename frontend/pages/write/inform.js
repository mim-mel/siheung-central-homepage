import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap } from '../introduce/about';
import InformEditor from '@/components/editor/InformEditor';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { WritePageWrap } from './notice';

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
        <InformEditor value={content} onChange={handleEditorChange} />
      </WritePageWrap>
    </Wrap>
  );
};

export default NoticeWritePage;
