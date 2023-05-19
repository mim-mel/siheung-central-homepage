import styled from 'styled-components';
import { Wrap } from '@/pages/introduce/about';
import NoticeNav from '@/components/subpage/NoticeNav';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Back, WriteButton } from '../notice';

const Inform = props => {
  const { list } = props;

  const router = useRouter();

  const isLoggedIn = useSelector(
    state => state.persistedReducer.userReducer.isLoggedIn
  );

  const MAX_TITLE_LENGTH = 14;

  return (
    <Wrap>
      <NoticeNav
        url='/image/sub-main1.jpg'
        title='센트럴 소식'
        categoryName='inform'
      />
      <Back>
        <ContentsWrap>
          {isLoggedIn === true && (
            <WriteButton onClick={() => router.push('/write/inform')}>
              글쓰기
            </WriteButton>
          )}
          <ItemWrap>
            {list.map(item => (
              <ItemBox
                key={item.id}
                onClick={() => router.push(`/news/inform/${item.id}`)}
              >
                <ImgBox>
                  <Image src={item.imgSrc} alt='thumbnail' />
                </ImgBox>
                <Title>
                  {item.title.length > MAX_TITLE_LENGTH
                    ? `${item.title.substring(0, MAX_TITLE_LENGTH)}...`
                    : item.title}
                </Title>
                <Date>{item.day}</Date>
              </ItemBox>
            ))}
          </ItemWrap>
        </ContentsWrap>
      </Back>
    </Wrap>
  );
};

export async function getStaticProps() {
  try {
    const res = await axios.get(`${process.env.API_URL}/api/inform/write`);
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

export const ContentsWrap = styled.div`
  width: 1100px;
  margin: 0 auto 100px auto;
  border-radius: 20px;
  background-color: white;
  padding: 30px 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 670px;
    padding: 20px 40px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    padding: 30px 40px;
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 32% 32% 32%;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

const ItemBox = styled.div`
  width: 240px;
  height: 280px;
  padding: 13px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  background-color: white;
  cursor: pointer;
  margin: 15px 0;

  @media screen and (max-width: 1024px) {
    width: 185px;
    height: 220px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 250px;
    margin: 15px 0;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 130px;
  }

  @media screen and (max-width: 700px) {
    height: 140px;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  width: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 15px 0 10px 0;
  letter-spacing: -0.3px;
`;

const Date = styled.div`
  font-size: 15px;
  opacity: 0.8;
  text-align: center;
`;

export default Inform;
