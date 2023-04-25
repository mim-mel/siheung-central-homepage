import styled from 'styled-components';
import { useRouter } from 'next/router';

const IntroduceNav = props => {
  const router = useRouter();

  return (
    <SubMain>
      <SubMainImg src={props.url} />
      <SubTitle>{props.title}</SubTitle>
      <BoxWrap>
        <Box
          className={props.categoryName === 'about' ? 'active' : null}
          onClick={() => router.push('/introduce/about')}
        >
          {props.categoryName === 'about' ? (
            <BoxIconWhite src='/image/sub1-icon1-w.png' />
          ) : (
            <BoxIcon src='/image/sub1-icon1.png' />
          )}
          <BoxText className={props.categoryName === 'about' ? 'active' : null}>
            병원소개
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'members' ? 'active' : null}
          onClick={() => router.push('/introduce/members/vet/1')}
        >
          {props.categoryName !== 'members' && <BoxLine />}
          {props.categoryName === 'members' ? (
            <BoxIconWhite src='/image/sub1-icon2-w.png' />
          ) : (
            <BoxIcon src='/image/sub1-icon2.png' />
          )}
          <BoxText
            className={props.categoryName === 'members' ? 'active' : null}
          >
            의료진 소개
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'time' ? 'active' : null}
          onClick={() => router.push('/introduce/time')}
        >
          {props.categoryName !== 'time' && <BoxLine />}
          {props.categoryName === 'time' ? (
            <BoxIconWhite src='/image/sub1-icon3-w.png' />
          ) : (
            <BoxIcon src='/image/sub1-icon3.png' />
          )}
          <BoxText className={props.categoryName === 'time' ? 'active' : null}>
            진료시간 안내
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'hospital' ? 'active' : null}
          onClick={() => router.push('/introduce/hospital/interior')}
        >
          {props.categoryName !== 'hospital' && <BoxLine />}
          {props.categoryName === 'hospital' ? (
            <BoxIconWhite src='/image/sub1-icon4-w.png' />
          ) : (
            <BoxIcon src='/image/sub1-icon4.png' />
          )}
          <BoxText
            className={props.categoryName === 'hospital' ? 'active' : null}
          >
            병원 미리보기
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
  width: 496px;
  height: 124px;
  grid-template-columns: 25% 25% 25% 25%;
  position: absolute;
  left: 50%;
  top: 82.5%;
  transform: translate(-50%, 0);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  border-radius: 15px;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    transform: translate(-50%, 0) scale(0.65);
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
    width: 145px;
    height: 145px;
    top: -12px;
    left: -12px;
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

export default IntroduceNav;
