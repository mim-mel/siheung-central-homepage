import styled from 'styled-components';
import { Wrap } from '../introduce/about';
import IntroduceNav from '@/components/subpage/IntroduceNav';
import NoticeNav from '@/components/subpage/NoticeNav';

const NoticeArray = [
  {
    id: 1,
    isNew: false,
    date: '2023-02-04',
    title: '공지사항 예시 1',
  },
  {
    id: 2,
    isNew: false,
    date: '2023-04-07',
    title: '공지사항 예시 2',
  },
  {
    id: 3,
    isNew: true,
    date: '2023-05-03',
    title: '공지사항 예시 3',
  },
];

const Notice = () => {
  return (
    <Wrap>
      <NoticeNav
        url='/image/sub-main1.jpg'
        title='공지사항'
        categoryName='notice'
      />
      <Back>
        <ContentsWrap>
          <EmptyText>존재하는 게시글이 없습니다.</EmptyText>
        </ContentsWrap>
      </Back>
    </Wrap>
  );
};

export const Back = styled.div`
  width: 100%;
  height: auto;
  padding: 18vh 0 5vh 0;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 15vh 0 5vh 0;
  }

  @media screen and (max-width: 700px) {
  }
`;

export const ContentsWrap = styled.div`
  width: 1050px;
  margin: 0 auto 100px auto;
  border-radius: 20px;
  background-color: white;
  padding: 86px 77px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 1700px) {
    width: 940px;
  }

  @media screen and (max-width: 1024px) {
    width: 670px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    padding: 60px 50px;
  }
`;

export const EmptyText = styled.div`
  font-size: 22px;
  font-weight: 500;

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export default Notice;
