import styled from 'styled-components';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <FooterWrap>
      <FooterContentsWrap>
        <FooterLogo src='/image/footer-logo.png' />
        <FooterTextWrap>
          <FooterTitleWrap>
            <FooterTitle onClick={() => router.push('/introduce/about')}>
              병원 소개
            </FooterTitle>
            <FooterTitle onClick={() => router.push('/introduce/member')}>
              의료진 소개
            </FooterTitle>
            <FooterTitle onClick={() => router.push('/introduce/time')}>
              진료시간 안내
            </FooterTitle>
            <FooterTitle onClick={() => router.push('/map')}>
              오시는 길
            </FooterTitle>
          </FooterTitleWrap>
          <FooterText>
            주소 : 경기도 시흥시 정왕대로 174 광개토빌딩 제 1층 110호 / 제 2층
            203호
          </FooterText>
          <FooterText>
            업체명: 시흥 24시 센트럴 동물의료센터 | TEL : 031-432-2475 | 대표 :
            김병선
          </FooterText>
        </FooterTextWrap>
        <IconWrap>
          <Icon src='/image/footer-naver.png' />
          <Icon src='/image/footer-kakao.png' />
          <Icon src='/image/footer-insta.png' />
        </IconWrap>
      </FooterContentsWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  position: relative;
  height: 300px;
  background-color: #2e2e2e;
  left: 18%;
  width: 82%;
  justify-content: center;
  align-items: center;
  display: flex;

  @media screen and (max-width: 1700px) {
    left: 18%;
    width: 82%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    left: 0;
    height: 400px;
  }

  @media screen and (max-width: 700px) {
    height: 350px;
  }
`;

const FooterContentsWrap = styled.div`
  width: 1250px;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 65% 20%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1700px) {
    width: 90%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 700px) {
  }
`;

const FooterLogo = styled.img`
  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 700px) {
    transform: scale(80%);
    margin-bottom: 30px;
  }
`;

const FooterTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const FooterTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    margin: 0;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const FooterTitle = styled.div`
  font-size: 18px;
  color: white;
  font-weight: 600;
  margin: 0 25px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    font-size: 13px;
    margin: 0 10px;
  }
`;

const FooterText = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 200;
  opacity: 0.6;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    font-size: 11px;
    font-weight: 100;
    margin-bottom: 7px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 300px;
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    width: 250px;
  }
`;

const Icon = styled.img`
  opacity: 0.6;
  cursor: pointer;
  transition: 0.2s;

  @media screen and (max-width: 700px) {
    transform: scale(80%);
  }

  &:hover {
    opacity: 1;
  }
`;

export default Footer;
