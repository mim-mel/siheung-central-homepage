import styled from 'styled-components';
import { Wrap } from '@/pages/introduce/about';
import NoticeNav from '@/components/subpage/NoticeNav';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Notice = props => {
  const { list } = props;

  const router = useRouter();

  const isLoggedIn = useSelector(
    state => state.persistedReducer.userReducer.isLoggedIn
  );

  return (
    <Wrap>
      <NoticeNav
        url='/image/sub-main1.jpg'
        title='공지사항'
        categoryName='notice'
      />
      <Back>
        <ContentsWrap>
          {isLoggedIn === true && (
            <WriteButton onClick={() => router.push('/write/notice')}>
              글쓰기
            </WriteButton>
          )}
          {list.map(item => (
            <NoticeWrap
              key={item.id}
              onClick={() => router.push(`/news/notice/${item.id}`)}
            >
              <Title>{item.title}</Title>
              <Date>2023-05-18</Date>
            </NoticeWrap>
          ))}
        </ContentsWrap>
      </Back>
    </Wrap>
  );
};

export async function getStaticProps() {
  try {
    const res = await axios.get(`${process.env.API_URL}/api/notice/write`);
    const list = res.data.content;
    return {
      props: {
        list,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        list: [],
      },
    };
  }
}

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

export const WriteButton = styled.div`
  width: 120px;
  height: 43px;
  background-color: #ad9686;
  position: absolute;
  top: -70px;
  left: 100%;
  transform: translate(-100%, 0);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

export const ContentsWrap = styled.div`
  width: 1050px;
  margin: 0 auto 100px auto;
  border-radius: 20px;
  background-color: white;
  padding: 86px 77px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 1700px) {
    width: 940px;
  }

  @media screen and (max-width: 1024px) {
    width: 670px;
    padding: 40px 30px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    padding: 40px 30px;
  }
`;

export const EmptyText = styled.div`
  font-size: 22px;
  font-weight: 500;

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const NoticeWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 1020px) {
    display: grid;
    grid-template-columns: 75% 25%;
    justify-content: space-between;
  }

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 100%;
  }
`;

const Title = styled.div`
  font-size: 21px;

  @media screen and (max-width: 700px) {
    margin-left: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Date = styled.div`
  margin-left: auto;
  font-size: 19px;
  opacity: 0.8;

  @media screen and (max-width: 700px) {
    margin-left: 0;
    font-size: 15px;
  }
`;

const NewButton = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: #fd6979;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  font-weight: 500;
`;

export default Notice;
