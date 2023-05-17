import { useRef } from 'react';
import { Wrap } from '../introduce/about';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '@/redux/reducer/userSlice';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const LoginPage = () => {
  const router = useRouter();
  const idRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    state => state.persistedReducer.userReducer.isLoggedIn
  );

  const submitFormHandler = e => {
    e.preventDefault();

    const enteredId = idRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const reqBody = {
      id: enteredId,
      password: enteredPassword,
    };

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.code === 1000) {
          dispatch(
            loginUser({
              isLoggedIn: true,
            })
          );
          router.push('/news/inform');
        } else {
          alert(data.message);
        }
      });
  };

  const onLogout = e => {
    e.preventDefault();
    dispatch(logoutUser());

    alert('로그아웃이 완료되었습니다.');
  };

  return (
    <Wrap>
      <LoginWrap>
        <Title>관리자 로그인</Title>
        {isLoggedIn === true ? (
          <LoginBox>
            <Notice>이미 로그인한 상태입니다</Notice>
            <InputButon onClick={e => onLogout(e)}>로그아웃</InputButon>
          </LoginBox>
        ) : (
          <LoginBox onSubmit={submitFormHandler}>
            <InputWrap>
              <InputLabel>아이디</InputLabel>
              <Input type='text' id='username' ref={idRef} />
            </InputWrap>
            <InputWrap marginBottom>
              <InputLabel>비밀번호</InputLabel>
              <Input type='password' id='password' ref={passwordRef} />
            </InputWrap>
            <InputButon>로그인</InputButon>
          </LoginBox>
        )}
      </LoginWrap>
    </Wrap>
  );
};

const LoginWrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
`;

const LoginBox = styled.form`
  width: 420px;
  height: 360px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 280px;
  margin-bottom: ${props => (props.marginBottom ? '35px' : '20px')};
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

const Input = styled.input`
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

const InputButon = styled.button`
  width: 280px;
  height: 40px;
  background-color: #ad9686;
  border-radius: 7px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

const Notice = styled.div`
  margin: 40px 0 50px 0;
  font-size: 22px;
  font-weight: 500;
`;

export default LoginPage;
