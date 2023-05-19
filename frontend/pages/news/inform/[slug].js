import { Wrap } from '@/pages/introduce/about';
import { WriteButton, Back, ContentsWrap } from '../notice/index';
import { useRouter } from 'next/router';
import NoticeNav from '@/components/subpage/NoticeNav';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';

const InformDetail = ({ item }) => {
  const router = useRouter();

  const params = router.query;
  const { slug } = params;

  const isLoggedIn = useSelector(
    state => state.persistedReducer.userReducer.isLoggedIn
  );

  if (!item) {
    return <div>Loading...</div>;
  }

  const onDelete = async e => {
    e.preventDefault;

    try {
      const res = await axios.delete(`/api/inform/${slug}`);
      console.log(res);
      router.push('/news/inform');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrap>
      <NoticeNav
        url='/image/sub-main1.jpg'
        title='공지사항'
        categoryName='inform'
      />
      <Back>
        <ContentsWrap>
          {isLoggedIn === true && (
            <WriteButton onClick={e => onDelete(e)}>삭제하기</WriteButton>
          )}
          <TitleWrap>
            <Title>{item.title}</Title>
            <Date>{item.day}</Date>
          </TitleWrap>
          <Image src={item.imgSrc} alt='썸네일' />
          <ContentWrap dangerouslySetInnerHTML={{ __html: item.content }} />
        </ContentsWrap>
      </Back>
    </Wrap>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  try {
    const res = await axios.get(`${process.env.API_URL}/api/inform/${slug}`);
    const item = res.data.item[0];
    return {
      props: {
        item,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        item: null, // 빈 배열 대신 null로 설정
      },
    };
  }
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #cecece;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const Date = styled.div`
  font-size: 17px;
  opacity: 0.8;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 50px;
`;

export const ContentWrap = styled.div`
  width: 100%;
  text-align: center;
`;

export default InformDetail;
