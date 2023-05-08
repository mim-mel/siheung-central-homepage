import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  SubMain,
  SubMainImg,
  SubMainImgWrap,
  SubTitle,
  Box,
  BoxIconWhite,
  BoxIcon,
  BoxText,
  BoxLine,
} from './IntroduceNav';

const ClinicNav = props => {
  const router = useRouter();

  return (
    <SubMain>
      <SubMainImgWrap>
        <SubMainImg src={props.url} />
      </SubMainImgWrap>
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

// export const BoxWrap = styled.div`
//   display: grid;
//   width: 744px;
//   height: 124px;
//   grid-template-columns: auto auto auto auto auto auto;
//   position: absolute;
//   left: 50%;
//   top: 82.5%;
//   transform: translate(-50%, 0);
//   background-color: white;
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
//   border-radius: 15px;

//   @media screen and (max-width: 1700px) {
//   }

//   @media screen and (max-width: 1024px) {
//     transform: translate(-50%, 0) scale(0.9);
//   }

//   @media screen and (max-width: 700px) {
//     transform: translate(-50%, 0) scale(0.5);
//     top: 79%;
//   }
// `;

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
    top: 79%;
  }
`;

export default ClinicNav;
