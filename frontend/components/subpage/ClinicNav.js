import styled from 'styled-components';
import { useRouter } from 'next/router';

const ClinicNav = props => {
  const router = useRouter();

  return (
    <SubMain>
      <SubMainImg src={props.url} />
      <SubTitle>{props.title}</SubTitle>
      <BoxWrap>
        <Box
          className={props.categoryName === 'old' ? 'active' : null}
          onClick={() => router.push('/clinic/old')}
        >
          {props.categoryName === 'old' ? (
            <BoxIconWhite src='/image/sub2-icon1-w.png' />
          ) : (
            <BoxIcon src='/image/sub2-icon1.png' />
          )}
          <BoxText className={props.categoryName === 'old' ? 'active' : null}>
            노령 질환 센터
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'surgery' ? 'active' : null}
          onClick={() => router.push('/clinic/surgery')}
        >
          {props.categoryName !== 'surgery' && <BoxLine />}
          {props.categoryName === 'surgery' ? (
            <BoxIconWhite src='/image/sub2-icon2-w.png' />
          ) : (
            <BoxIcon src='/image/sub2-icon2.png' />
          )}
          <BoxText
            className={props.categoryName === 'surgery' ? 'active' : null}
          >
            동물 수술 센터
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'medicine' ? 'active' : null}
          onClick={() => router.push('/clinic/medicine')}
        >
          {props.categoryName !== 'medicine' && <BoxLine />}
          {props.categoryName === 'medicine' ? (
            <BoxIconWhite src='/image/sub2-icon3-w.png' />
          ) : (
            <BoxIcon src='/image/sub2-icon3.png' />
          )}
          <BoxText
            className={props.categoryName === 'medicine' ? 'active' : null}
          >
            내과 클리닉 센터
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'rehabilitation' ? 'active' : null}
          onClick={() => router.push('/clinic/rehabilitation')}
        >
          {props.categoryName !== 'rehabilitation' && <BoxLine />}
          {props.categoryName === 'rehabilitation' ? (
            <BoxIconWhite src='/image/sub2-icon4-w.png' />
          ) : (
            <BoxIcon src='/image/sub2-icon4.png' />
          )}
          <BoxText
            className={
              props.categoryName === 'rehabilitation' ? 'active' : null
            }
          >
            재활 통증의학 센터
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'vaccination' ? 'active' : null}
          onClick={() => router.push('/clinic/vaccination')}
        >
          {props.categoryName !== 'vaccination' && <BoxLine />}
          {props.categoryName === 'vaccination' ? (
            <BoxIconWhite src='/image/sub2-icon5-w.png' />
          ) : (
            <BoxIcon src='/image/sub2-icon5.png' />
          )}
          <BoxText
            className={props.categoryName === 'vaccination' ? 'active' : null}
          >
            예방의학 클리닉
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'emergency' ? 'active' : null}
          onClick={() => router.push('/clinic/emergency')}
        >
          {props.categoryName !== 'emergency' && <BoxLine />}
          {props.categoryName === 'emergency' ? (
            <BoxIconWhite src='/image/sub2-icon6-w.png' />
          ) : (
            <BoxIcon src='/image/sub2-icon6.png' />
          )}
          <BoxText
            className={props.categoryName === 'emergency' ? 'active' : null}
          >
            24시 응급실
          </BoxText>
        </Box>
      </BoxWrap>
    </SubMain>
  );
};

const SubMain = styled.div`
  height: 349px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
  }
`;

const SubMainImg = styled.img`
  width: 100%;
  height: 349px;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    height: 290px;
  }
`;

const SubTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: white;
  z-index: 10;
  letter-spacing: 2px;

  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
`;

const BoxWrap = styled.div`
  display: grid;
  width: 744px;
  height: 124px;
  grid-template-columns: 16% 16% 16% 16% 16% 16%;
  position: absolute;
  justify-content: space-between;
  left: 50%;
  top: 82.5%;
  transform: translate(-50%, 0);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  border-radius: 15px;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    transform: translate(-50%, 0) scale(0.9);
  }

  @media screen and (max-width: 700px) {
    transform: translate(-50%, 0) scale(0.45);
    top: 65%;
  }
`;

const BoxLine = styled.div`
  width: 0.1px;
  height: 62px;
  background-color: black;
  opacity: 0.2;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`;

const BoxIcon = styled.img`
  opacity: 0.3;
  margin-bottom: 10px;
  transition: 0.2s;
`;

const BoxIconWhite = styled.img`
  margin-bottom: 10px;
`;

const BoxText = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: black;
  opacity: 0.3;
  transition: 0.2s;
  letter-spacing: -1px;

  &.active {
    opacity: 1;
    color: white;
    font-weight: 500;
    font-size: 16px;
  }
`;

const Box = styled.div`
  width: 124px;
  height: 124px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &.active {
    width: 146px;
    height: 146px;
    top: -11px;
    left: -11px;
    background-color: #a48a79;
    z-index: 10;
  }

  &:hover ${BoxText} {
    opacity: 0.6;

    &.active {
      opacity: 1;
    }
  }

  &:hover ${BoxIcon} {
    opacity: 0.5;
  }
`;

export default ClinicNav;
