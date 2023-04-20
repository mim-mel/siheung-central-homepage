import IntroduceNav from '@/components/subpage/IntroduceNav';
import styled from 'styled-components';

const About = () => {
  return (
    <Wrap>
      <IntroduceNav
        url='/image/sub-main1.jpg'
        title='병원소개'
        categoryName='about'
      />
      <ContentsWrap>
        <LogoBox>
          <Logo src='/image/about-logo.png' />
        </LogoBox>
        <TextBox>
          <Title>Our Vison</Title>
          <Text marginBottom>
            안녕하세요. 시흥24시 센트럴 동물의료센터입니다. 저희 동물병원은
            개원이후 반려동물을 진심으로 대하고 정직하게 진료하자는 마음으로
            꾸준히 반려동물의료서비스 개선을 위해 열심히 달려 왔습니다.{' '}
          </Text>
          <Text>
            앞으로도 더 발전되고 개선된 의료서비스를 위해 열심히 노력할 것을
            약속드립니다. 저희 동물병원은 보호자님과 함께 반려동물을 잘 치료하기
            위해 3가지의 원칙을 가지고 있습니다.
          </Text>
        </TextBox>
      </ContentsWrap>
      <ImgWrap>
        <ImgBox>
          <Img src='/image/about-img1.jpg' />
          <ImgTextBox>
            <ImgTitle>동물에 대한 애정</ImgTitle>
            <ImgText>
              강아지 고양이는 사람처럼 말을 하지 못해서 어딘가 아플수록 더
              움츠려 들고 예민해 지는 경향이 있습니다. 이를 알기에 조금 더
              아이들 입장에서 생각하고 치료하도록 노력 하겠습니다. 저희 의료진
              또한 각자 반려동물의 보호자이며 누구 보다도 동물을 사랑하는
              사람으로 구성되어 있습니다.
            </ImgText>
          </ImgTextBox>
        </ImgBox>
        <ImgBox>
          <Img src='/image/about-img2.jpg' />
          <ImgTextBox>
            <ImgTitle>보호자님과의 공감</ImgTitle>
            <ImgText>
              의료서비스의 가장 중요한 부분이 보호자와 의료진 사이의 신뢰와
              공감입니다. 이는 질병을 치료함에 있어 가장 중요한 부분이라고 생각
              합니다. 정직함으로 부터 출발해서 보호자님의 신뢰를 얻어 같이
              치료의 방향을 정하는 공감이 조금 더 나은 치료 결과를 이끌 수
              있다고 생각 합니다.
            </ImgText>
          </ImgTextBox>
        </ImgBox>
        <ImgBox>
          <Img src='/image/about-img3.jpg' />
          <ImgTextBox>
            <ImgTitle>꾸준한 발전</ImgTitle>
            <ImgText>
              우리 아이가 계속 진료를 받고 꾸준히 관리 받는 병원으로 거듭나기
              위해 계속적인 내부 발전을 하겠습니다. 저희 동물병원의 내부적인
              발전목표 이며, 시설의 최신화와 장비의 업그레이드, 전체 의료진
              학회/연구발표 등의 학술 활동의 정기적 추진으로 병원 진료의 수준을
              지속적으로 향상 시켜나가겠습니다.
            </ImgText>
          </ImgTextBox>
        </ImgBox>
      </ImgWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  left: 18%;
  width: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0;
  padding: 0;
  top: 0;

  @media screen and (max-width: 1700px) {
    left: 18%;
    width: 82%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    left: 0;
  }

  @media screen and (max-width: 700px) {
  }
`;

const ContentsWrap = styled.div`
  display: grid;
  grid-template-columns: 48% 45%;
  justify-content: space-between;
  width: 1150px;
  align-items: center;
  margin-top: 15vh;
  margin-bottom: 10vh;

  @media screen and (max-width: 1700px) {
    width: 87%;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    margin-top: 13vh;
    margin-bottom: 3vh;
  }

  @media screen and (max-width: 700px) {
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

const LogoBox = styled.div`
  width: 530px;
  height: 350px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1700px) {
    width: 500px;
    height: 320px;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
    margin: 0 auto;
    border-radius: 20px;
    margin-bottom: 4vh;
  }

  @media screen and (max-width: 700px) {
    width: 94%;
    height: 200px;
    margin-bottom: 5vh;
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 1700px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    transform: scale(0.6);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 84%;
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    width: 93%;
  }
`;

const Title = styled.div`
  color: #623d30;
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 45px;

  @media screen and (max-width: 1700px) {
    font-size: 42px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 47px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    font-size: 35px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Text = styled.div`
  font-size: 19px;
  font-weight: 400;
  color: black;
  margin-bottom: ${props => (props.marginBottom ? '25px' : '')};
  opacity: 0.8;
  line-height: 29px;

  @media screen and (max-width: 1700px) {
    font-size: 17px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: ${props => (props.marginBottom ? '15px' : '')};
  }
`;

const ImgWrap = styled.div`
  width: 1150px;
  height: auto;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  margin-bottom: 22vh;

  @media screen and (max-width: 1700px) {
    width: 87%;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
    margin-bottom: 10vh;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    margin-bottom: 50px;
  }
`;

const ImgBox = styled.div`
  width: 327px;
  height: 327px;
  position: relative;

  @media screen and (max-width: 1700px) {
    transform: scale(90%);
  }

  @media screen and (max-width: 1024px) {
    transform: scale(65%);
    left: -7vw;
  }

  @media screen and (max-width: 700px) {
    transform: scale(80%);
    margin-bottom: 90px;
    left: 0;
  }
`;

const Img = styled.img`
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px 0px;
`;

const ImgTextBox = styled.div`
  width: 290px;
  height: 210px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px 0px;
  border-radius: 20px;
  border-top-left-radius: 0;
  position: absolute;
  top: 75%;
  left: 20%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 22px 22px;
`;

const ImgTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #a48a79;
  margin-bottom: 13px;
`;

const ImgText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: black;
  opacity: 0.9;
  line-height: 20px;
`;

export default About;
