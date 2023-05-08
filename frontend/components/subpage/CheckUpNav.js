import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  SubMain,
  SubMainImgWrap,
  SubMainImg,
  SubTitle,
  BoxWrap,
  Box,
  BoxIconWhite,
  BoxIcon,
  BoxText,
  BoxLine,
} from './IntroduceNav';

const CheckUpNav = props => {
  const router = useRouter();

  return (
    <SubMain>
      <SubMainImgWrap>
        <SubMainImg src={props.url} />
      </SubMainImgWrap>
      <SubTitle>{props.title}</SubTitle>
      <BoxWrap>
        <Box
          className={props.categoryName === 'introduce' ? 'active' : null}
          onClick={() => router.push('/checkup/introduce')}
        >
          {props.categoryName === 'introduce' ? (
            <BoxIconWhite src='/image/sub3-icon1-w.png' />
          ) : (
            <BoxIcon src='/image/sub3-icon1.png' />
          )}
          <BoxText
            className={props.categoryName === 'introduce' ? 'active' : null}
          >
            건강검진이란
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'dog' ? 'active' : null}
          onClick={() => router.push('/checkup/dog')}
        >
          {props.categoryName !== 'dog' && <BoxLine />}
          {props.categoryName === 'dog' ? (
            <BoxIconWhite src='/image/sub3-icon2-w.png' />
          ) : (
            <BoxIcon src='/image/sub3-icon2.png' />
          )}
          <BoxText className={props.categoryName === 'dog' ? 'active' : null}>
            반려견 건강검진
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'cat' ? 'active' : null}
          onClick={() => router.push('/checkup/cat')}
        >
          {props.categoryName !== 'cat' && <BoxLine />}
          {props.categoryName === 'cat' ? (
            <BoxIconWhite src='/image/sub3-icon3-w.png' />
          ) : (
            <BoxIcon src='/image/sub3-icon3.png' />
          )}
          <BoxText className={props.categoryName === 'cat' ? 'active' : null}>
            반려묘 건강검진
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'caution' ? 'active' : null}
          onClick={() => router.push('/checkup/caution')}
        >
          {props.categoryName !== 'caution' && <BoxLine />}
          {props.categoryName === 'caution' ? (
            <BoxIconWhite src='/image/sub3-icon4-w.png' long />
          ) : (
            <BoxIcon src='/image/sub3-icon4.png' long />
          )}
          <BoxText
            className={props.categoryName === 'caution' ? 'active' : null}
            long
          >
            건강검진 전 후<br />
            안내 주의사항
          </BoxText>
        </Box>
      </BoxWrap>
    </SubMain>
  );
};

export default CheckUpNav;
