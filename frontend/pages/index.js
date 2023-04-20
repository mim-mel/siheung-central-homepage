import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { Fragment, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const Main = () => {
  const router = useRouter();

  const [Count, setCount] = useState(0);

  const onRightWeb = () => {
    if (Count === 0) {
      setCount(1);
    }
  };

  const onLeftWeb = () => {
    if (Count === 1) {
      setCount(0);
    }
  };

  const onRightMobile = () => {
    if (Count < 2) {
      setCount(prev => prev + 1);
    }
  };

  const onLeftMobile = () => {
    if (Count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <Wrap backColor='#c6c6c6'>
      <MainWrap>
        <MainBack />
        <TextWrap>
          <HospitalName>시흥 24시 센트럴 동물의료센터</HospitalName>
          <HopitalText>
            시흥 24시 센트럴 동물의료센터의 3가지 원칙은 애정, 공감, 꾸준한
            발전입니다. 우리 아이들을 사랑으로 대하고, 정직함을 기본으로한
            보호자님과의 공감으로 조금 더 나은 의료서비스를 제공해드리기 위해
            항상 발전하겠습니다.
          </HopitalText>
        </TextWrap>
      </MainWrap>
      <SliderWrap>
        <SliderWrap2 count={Count}>
          <SliderBox>
            <SliderBack src='/image/main-slider1.jpg' />
            <SliderTextWrap>
              <SliderTextWrapBack />
              <SliderTitle>노령 질환 센터</SliderTitle>
              <SliderText>노령기에 접어든 반려동물들의 질환을</SliderText>
              <SliderText>예방하고 관리해 드립니다.</SliderText>
              <SliderButton onClick={() => router.push('/clinic/old')}>
                <ButtonText>바로가기</ButtonText>
                <ButtonIcon src='/image/main-button-arrow.png' />
              </SliderButton>
            </SliderTextWrap>
          </SliderBox>
          <SliderBox>
            <SliderBack src='/image/main-slider2.jpg' />
            <SliderTextWrap>
              <SliderTextWrapBack />
              <SliderTitle>동물 수술 센터</SliderTitle>
              <SliderText>
                시흥 24시 센트럴 동물병원은 검증됨 수술법만을
              </SliderText>
              <SliderText>
                사용하며 검증된 의료진이 외과를 진행합니다.
              </SliderText>
              <SliderButton onClick={() => router.push('/clinic/surgery')}>
                <ButtonText>바로가기</ButtonText>
                <ButtonIcon src='/image/main-button-arrow.png' />
              </SliderButton>
            </SliderTextWrap>
          </SliderBox>
          <SliderBox>
            <SliderBack src='/image/main-slider3.jpg' />
            <SliderTextWrap>
              <SliderTextWrapBack />
              <SliderTitle>내과 클리닉 센터</SliderTitle>
              <SliderText>
                내과클리닉에서는 대학병원급 출신의 의료진이
              </SliderText>
              <SliderText>
                최신 시설과 장비를 가지고 진료를 보고 있습니다.
              </SliderText>
              <SliderButton onClick={() => router.push('/clinic/medicine')}>
                <ButtonText>바로가기</ButtonText>
                <ButtonIcon src='/image/main-button-arrow.png' />
              </SliderButton>
            </SliderTextWrap>
          </SliderBox>
          <SliderBox>
            <SliderBack src='/image/main-slider4.jpg' />
            <SliderTextWrap>
              <SliderTextWrapBack />
              <SliderTitle>재활 통증 의학</SliderTitle>
              <SliderText>
                수술 후 통증관리와, 회복중인 환자의 관리를 위해
              </SliderText>
              <SliderText>
                재활/통증의학 클리닉을 별도로 운영하고 있습니다.
              </SliderText>
              <SliderButton>
                <ButtonText>바로가기</ButtonText>
                <ButtonIcon src='/image/main-button-arrow.png' />
              </SliderButton>
            </SliderTextWrap>
          </SliderBox>
          <SliderBox>
            <SliderBack src='/image/main-slider5.jpg' />
            <SliderTextWrap>
              <SliderTextWrapBack />
              <SliderTitle>예방의학 클리닉</SliderTitle>
              <SliderText>
                접종은 항체를 생성해 주어 다음에 그 병원체가
              </SliderText>
              <SliderText>감염되지 않게하는 예방보건 수단입니다.</SliderText>
              <SliderButton>
                <ButtonText>바로가기</ButtonText>
                <ButtonIcon src='/image/main-button-arrow.png' />
              </SliderButton>
            </SliderTextWrap>
          </SliderBox>
          <SliderBox>
            <SliderBack src='/image/main-slider6.jpg' />
            <SliderTextWrap>
              <SliderTextWrapBack />
              <SliderTitle>24시 응급실</SliderTitle>
              <SliderText>
                센트럴 동물병원은 응급환자를 위해 밤12시부터
              </SliderText>
              <SliderText>오전 9시까지 응급실을 운영하고 있습니다.</SliderText>
              <SliderButton>
                <ButtonText>바로가기</ButtonText>
                <ButtonIcon src='/image/main-button-arrow.png' />
              </SliderButton>
            </SliderTextWrap>
          </SliderBox>
        </SliderWrap2>
      </SliderWrap>
      {/* 웹용 화살표 버튼 */}
      <SliderWebArrowWrap>
        <SliderArrowLeft
          src='/image/main-slider-arrow.png'
          onClick={() => onLeftWeb()}
        />
        <SliderArrowRight
          src='/image/main-slider-arrow.png'
          onClick={() => onRightWeb()}
        />
      </SliderWebArrowWrap>

      {/* 모바일용 화살표 버튼 */}
      <SliderMobileArrowWrap>
        <SliderArrowLeft
          src='/image/main-slider-arrow.png'
          onClick={() => onLeftMobile()}
        />
        <SliderArrowRight
          src='/image/main-slider-arrow.png'
          onClick={() => onRightMobile()}
        />
      </SliderMobileArrowWrap>
      <MemberButton onClick={() => router.push('/introduce/member')}>
        <MemberImgWrap>
          <MemberImg src='/image/main-memberbutton.jpg' />
        </MemberImgWrap>
        <MemberText>의료진 소개</MemberText>
        <MemberButtonArrow src='/image/main-memberButton-arrow.png' />
      </MemberButton>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  left: 18%;
  width: 82%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  top: 0;
  overflow: hidden;

  @media screen and (max-width: 1700px) {
    left: 18%;
    width: 82%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    left: 0;
    height: 90vh;
  }

  @media screen and (max-width: 700px) {
    height: 100vh;
  }
`;

const MainWrap = styled.div`
  width: 100%;
  height: auto;
`;

const MainBack = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(/image/main.jpg);
  position: absolute;
  left: 0;
  top: 0;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 190%;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 1000px;
    top: 60px;
    left: -120px;
  }

  @media screen and (max-width: 700px) {
    width: 300%;
    left: -170px;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  width: 670px;
  height: 230px;
  top: 18%;
  left: 47.5%;

  @media screen and (max-width: 1700px) {
    width: 45%;
    left: 46%;
  }

  @media screen and (max-width: 1024px) {
    width: 650px;
    left: 50%;
    transform: translate(-50%, 0);
    top: 38%;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    top: 35%;
  }
`;

const HospitalName = styled.div`
  font-size: 51px;
  font-weight: 800;
  color: white;
  margin-bottom: 50px;

  @media screen and (max-width: 1700px) {
    font-size: 42px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 48px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const HopitalText = styled.div`
  font-size: 21px;
  font-weight: 400;
  color: white;
  line-height: 38px;

  @media screen and (max-width: 1700px) {
    font-size: 17px;
  }

  @media screen and (max-width: 1700px) {
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 23px;
    text-align: center;
  }
`;

const SliderWrap = styled.div`
  width: 1250px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, 0);
  overflow-x: hidden;

  @media screen and (max-width: 1700px) {
    width: 1030px;
    top: 57%;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    top: 62%;
  }

  @media screen and (max-width: 700px) {
    top: 70%;
    width: 90%;
    left: 49%;
  }
`;

const SliderWrap2 = styled.div`
  width: 2000px;
  height: 100%;
  display: flex;
  position: relative;
  left: ${props => '-' + props.count * 640 + 'px'};
  transition: 0.3s;

  @media screen and (max-width: 1700px) {
    left: ${props => '-' + props.count * 520 + 'px'};
  }

  @media screen and (max-width: 1024px) {
    left: ${props => '-' + props.count * 670 + 'px'};
  }

  @media screen and (max-width: 700px) {
    left: ${props => '-' + props.count * 340 + 'px'};
    margin-left: 10px;
  }
`;

const SliderBox = styled.div`
  width: 290px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
  margin-right: 30px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1700px) {
    width: 240px;
    height: 300px;
    margin-right: 20px;
  }

  @media screen and (max-width: 1024px) {
    width: 290px;
    height: 350px;
    margin-right: 0;
    margin: 0 30px 0 25px;
  }

  @media screen and (max-width: 700px) {
    width: 150px;
    height: 200px;
    margin-right: 0;
    margin: 0 10px 0 10px;
  }
`;

const SliderBack = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 700px) {
    transform: scale(60%);
    top: -70px;
    left: -70px;
  }
`;

const SliderTextWrap = styled.div`
  height: 150px;
  width: 100%;
  position: relative;
  top: 200px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1700px) {
    height: 150px;
    top: 150px;
  }

  @media screen and (max-width: 1024px) {
    height: 150px;
    top: 200px;
  }

  @media screen and (max-width: 700px) {
    height: 70px;
    top: 130px;
  }
`;

const SliderTextWrapBack = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
`;

const SliderTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: white;
  text-align: center;
  z-index: 10;
  margin-bottom: 10px;

  @media screen and (max-width: 1700px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }

  @media screen and (max-width: 700px) {
    font-size: 13px;
    margin-bottom: 0;
    font-weight: 400;
  }
`;

const SliderText = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 200;
  text-align: center;
  z-index: 10;
  margin-bottom: 3px;

  @media screen and (max-width: 1700px) {
    font-size: 11px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const SliderButton = styled.div`
  width: auto;
  height: 33px;
  padding: 0 20px;
  border-radius: 30px;
  background-color: #ad9686;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: 0.2s;

  &:hover {
    top: -3px;
  }

  @media screen and (max-width: 1700px) {
    height: 31px;
  }

  @media screen and (max-width: 1024px) {
    height: 33px;
  }

  @media screen and (max-width: 700px) {
    height: 23px;
    padding: 0 15px;
    margin-top: 8px;
  }
`;

const ButtonText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-right: 10px;

  @media screen and (max-width: 700px) {
    font-size: 11px;
  }
`;

const ButtonIcon = styled.img``;

const SliderWebArrowWrap = styled.div`
  width: 1370px;
  height: 60px;
  position: absolute;
  top: 68%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1700px) {
    width: 1130px;
    top: 70%;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 700px) {
  }
`;

const SliderMobileArrowWrap = styled.div`
  width: 90%;
  height: 60px;
  position: absolute;
  top: 68%;
  align-items: center;
  justify-content: space-between;
  display: none;

  @media screen and (max-width: 1024px) {
    top: 76%;
    display: flex;
  }

  @media screen and (max-width: 700px) {
    width: 98%;
    top: 79%;
  }
`;

const SliderArrowLeft = styled.img`
  transform: rotate(180deg);
  cursor: pointer;
  @media screen and (max-width: 700px) {
    transform: rotate(180deg) scale(70%);
  }
`;
const SliderArrowRight = styled.img`
  cursor: pointer;
  @media screen and (max-width: 700px) {
    transform: scale(70%);
  }
`;

const MemberButtonAni = keyframes`
  0% {
    top: 41%;
	}

  50% {
    top: 41.5%;
  }


	100% {
    top: 41%;
	}
`;

const MemberButton = styled.div`
  width: 190px;
  height: 55px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 50px;
  position: absolute;
  top: 41%;
  left: 9%;
  display: flex;
  align-items: center;
  animation: ${MemberButtonAni} 3s infinite;
  cursor: pointer;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

const MemberImgWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 30px;
  margin-left: 6px;
  overflow: hidden;
`;

const MemberImg = styled.img``;

const MemberText = styled.div`
  font-size: 19px;
  color: #353535;
  font-weight: 600;
  margin-left: 10px;
`;

const MemberButtonArrow = styled.img`
  margin-left: 7px;
`;

export default Main;
