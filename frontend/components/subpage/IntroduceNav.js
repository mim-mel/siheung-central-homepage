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

export const SubMain = styled.div`
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

export const SubMainImg = styled.img`
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

export const SubTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: white;
  z-index: 10;
  letter-spacing: 2px;

  @media screen and (max-width: 700px) {
    font-size: 30px;
  }
`;

export const BoxWrap = styled.div`
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
    transform: translate(-50%, 0) scale(0.9);
  }

  @media screen and (max-width: 700px) {
    transform: translate(-50%, 0) scale(0.5);
    top: 65%;
  }
`;

export const BoxLine = styled.div`
  width: 0.1px;
  height: 62px;
  background-color: black;
  opacity: 0.2;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`;

export const BoxIcon = styled.img`
  opacity: 0.3;
  margin-bottom: 10px;
  transition: 0.2s;
  top: ${props => (props.long ? '4px' : '')};
  position: relative;
`;

export const BoxIconWhite = styled.img`
  margin-bottom: 10px;
  top: ${props => (props.long ? '4px' : '')};
  position: relative;
`;

export const BoxText = styled.div`
  font-size: ${props => (props.long ? '14px' : '15px')};
  font-weight: 700;
  color: black;
  opacity: 0.3;
  transition: 0.2s;
  text-align: center;
  line-height: ${props => (props.long ? '17px' : '')};
  position: relative;
  top: ${props => (props.long ? '3px' : '')};

  &.active {
    opacity: 1;
    color: white;
    font-weight: 500;
    font-size: ${props => (props.long ? '15px' : '16px')};
  }
`;

export const Box = styled.div`
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

export default IntroduceNav;
