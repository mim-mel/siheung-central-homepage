import styled from 'styled-components';
import { Wrap } from '../introduce/about';
import IntroduceNav from '@/components/subpage/IntroduceNav';
import NoticeNav from '@/components/subpage/NoticeNav';
import { Back, ContentsWrap, EmptyText } from './notice';

const InformArray = [
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

const Inform = () => {
  return (
    <Wrap>
      <NoticeNav
        url='/image/sub-main1.jpg'
        title='센트럴 소식'
        categoryName='inform'
      />
      <Back>
        <ContentsWrap>
          <EmptyText>존재하는 게시글이 없습니다.</EmptyText>
        </ContentsWrap>
      </Back>
    </Wrap>
  );
};

export default Inform;
