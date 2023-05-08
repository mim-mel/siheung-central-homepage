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
import styled from 'styled-components';

const NoticeNav = props => {
  const router = useRouter();

  return (
    <SubMain>
      <SubMainImgWrap>
        <SubMainImg src={props.url} />
      </SubMainImgWrap>
      <SubTitle>{props.title}</SubTitle>
      <BoxWrap small>
        <Box
          className={props.categoryName === 'notice' ? 'active' : null}
          onClick={() => router.push('/news/notice')}
        >
          {props.categoryName === 'notice' ? (
            <BoxIconWhite src='/image/sub4-icon1-w.png' />
          ) : (
            <BoxIcon src='/image/sub4-icon1.png' />
          )}
          <BoxText
            className={props.categoryName === 'notice' ? 'active' : null}
          >
            공지사항
          </BoxText>
        </Box>
        <Box
          className={props.categoryName === 'inform' ? 'active' : null}
          onClick={() => router.push('/news/inform')}
        >
          {props.categoryName !== 'inform' && <BoxLine />}
          {props.categoryName === 'inform' ? (
            <BoxIconWhite src='/image/sub4-icon2-w.png' />
          ) : (
            <BoxIcon src='/image/sub4-icon2.png' />
          )}
          <BoxText
            className={props.categoryName === 'inform' ? 'active' : null}
          >
            센트럴 소식
          </BoxText>
        </Box>
      </BoxWrap>
    </SubMain>
  );
};

export default NoticeNav;
