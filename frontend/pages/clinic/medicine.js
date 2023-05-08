import ClinicNav from '@/components/subpage/ClinicNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';

const IconArray = [
  {
    src: '/image/medicine-icon9.png',
    name: '뇌, 신경질환',
  },
  {
    src: '/image/medicine-icon10.png',
    name: '심장 질환',
  },
  {
    src: '/image/medicine-icon11.png',
    name: '간, 담낭, 췌장 질환',
  },
  {
    src: '/image/medicine-icon12.png',
    name: '소화기 질환',
  },
  {
    src: '/image/medicine-icon13.png',
    name: '호흡기 질환',
  },
  {
    src: '/image/medicine-icon14.png',
    name: '비뇨기계 질환',
  },
  {
    src: '/image/medicine-icon15.png',
    name: '호르몬 질환',
  },
  {
    src: '/image/medicine-icon16.png',
    name: '바이러스 질환',
  },
  {
    src: '/image/medicine-icon17.png',
    name: '면역 매개성 질환',
  },
  {
    src: '/image/medicine-icon18.png',
    name: '혈액학 질환',
  },
  {
    src: '/image/medicine-icon19.png',
    name: '종양학 질환',
  },
  {
    src: '/image/medicine-icon20.png',
    name: '유전, 선천적 질환',
  },
  {
    src: '/image/medicine-icon21.png',
    name: '피부 질환',
  },
  {
    src: '/image/medicine-icon22.png',
    name: '안과 질환',
  },
  {
    src: '/image/medicine-icon23.png',
    name: '치과 질환',
  },
];

const Medicine = () => {
  return (
    <Wrap>
      <ClinicNav
        url='/image/sub-main2.jpg'
        title='내과 클리닉 센터'
        categoryName='medicine'
      />
      <MedicineWrap>
        <Contents1Wrap>
          <Content1Text>
            대학병원급 병원출신 의료진이 최신 시설과 장비를 가지고 아픈
            반려동물을 진료하고 있습니다. 다년간 쌓아온 노하우와 경험으로 많은
            아이들의 아픈 질환을 미리 예방하고 치료하고자 노력하겠습니다. 조금
            더 전문적이고 체계적으로 아픈 아이들을 돌보고자 24시간 노력하고
            있습니다.
          </Content1Text>
        </Contents1Wrap>
        <Contents2Wrap>
          <BubbleWrap>
            <BubbleImg src='/image/medicine-img.png' />
            <Bubbler>
              아래와 같은 증상이 보인다면 꼭 병원에서 진료를 받으세요.
            </Bubbler>
          </BubbleWrap>
          <IconWrap1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon1.png' top='-1%' />
              <Icon1Text>
                갑자기 밥을
                <br />
                안먹어요
              </Icon1Text>
            </IconBox1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon2.png' />
              <Icon1Text>
                기력이 없고
                <br />
                잠이 많아졌어요
              </Icon1Text>
            </IconBox1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon3.png' top='-4%' />
              <Icon1Text>
                갑자기 설사
                <br />
                구토를 해요
              </Icon1Text>
            </IconBox1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon4.png' top='-2%' />
              <Icon1Text>
                활동량이 줄고
                <br />
                체중이 감소했어요.
              </Icon1Text>
            </IconBox1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon5.png' top='-4%' />
              <Icon1Text>
                목에 뭔가 걸린거같은
                <br />
                기침을 해요
              </Icon1Text>
            </IconBox1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon6.png' top='-3%' />
              <Icon1Text>
                평소에 안하던
                <br />
                이상행동을 해요
              </Icon1Text>
            </IconBox1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon7.png' top='-2%' />
              <Icon1Text>
                호흡수가 늘고
                <br />
                숨쉬는게 힘들어 보여요
              </Icon1Text>
            </IconBox1>
            <IconBox1>
              <Icon1 src='/image/medicine-icon8.png' top='-4%' />
              <Icon1Text>
                피부가 빨개지고
                <br />
                가려워하거나 아파해요
              </Icon1Text>
            </IconBox1>
          </IconWrap1>
        </Contents2Wrap>
        <SubTitle>내과 클리닉 진료과목</SubTitle>
        <Contents3Wrap>
          {IconArray.map((item, i) => (
            <Contents3Box key={i}>
              <WhiteBox>
                <WhiteBoxIcon src={item.src} />
              </WhiteBox>
              <BoxText>{item.name}</BoxText>
            </Contents3Box>
          ))}
        </Contents3Wrap>
      </MedicineWrap>
    </Wrap>
  );
};

const MedicineWrap = styled.div`
  width: 843px;
  height: auto;
  margin: 0 auto;
  margin-top: 15vh;
  margin-bottom: 10vh;

  @media screen and (max-width: 1024px) {
    width: 670px;
    margin-top: 10vh;
    margin-bottom: 6vh;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    margin-top: 7vh;
    margin-bottom: 4vh;
  }
`;

const Contents1Wrap = styled.div`
  width: 843px;
  height: auto;
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 5vh;

  @media screen and (max-width: 1024px) {
    width: 670px;
    margin-bottom: 3.5vh;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    padding: 15px 20px;
  }
`;

const Content1Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #606060;
  line-height: 28px;

  @media screen and (max-width: 700px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Contents2Wrap = styled.div`
  width: 843px;
  border-radius: 20px;
  background-color: #f2efec;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 670px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    padding: 30px;
  }
`;

const BubbleWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

const BubbleImg = styled.img`
  position: relative;
  left: 40%;

  @media screen and (max-width: 1024px) {
    left: 25%;
  }

  @media screen and (max-width: 700px) {
    transform: scale(0.9);
    left: 20%;
  }
`;

const Bubbler = styled.div`
  position: relative;
  width: 300px;
  height: 130px;
  padding: 0px;
  background: #ffffff;
  -webkit-border-radius: 24px;
  -moz-border-radius: 24px;
  border-radius: 24px;
  border: #a48a79 solid 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15%;
  left: -10%;
  font-size: 20px;
  color: #99735b;
  font-weight: 800;
  padding: 27px;
  box-sizing: border-box;
  line-height: 30px;

  :after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 11px 15px 11px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    left: -15px;
    top: 49px;
  }

  :before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 16px 20px 16px 0;
    border-color: transparent #a48a79;
    display: block;
    width: 0;
    z-index: 0;
    left: -26px;
    top: 44px;
  }

  @media screen and (max-width: 700px) {
    left: -2%;
    width: 270px;
    height: 110px;
    font-size: 17.5px;

    :after {
      display: none;
    }

    :before {
      display: none;
    }
  }
`;

const IconWrap1 = styled.div`
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  justify-content: space-between;
  grid-gap: 15px;
  margin-top: 5vh;

  @media screen and (max-width: 700px) {
    grid-template-columns: 48% 48%;
  }
`;

const IconBox1 = styled.div`
  width: 165px;
  height: 155px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 135px;
    height: 135px;
  }

  @media screen and (max-width: 700px) {
    width: 130px;
    height: 120px;
  }
`;

const Icon1 = styled.img`
  position: relative;
  top: ${props => props.top};

  @media screen and (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 700px) {
  }
`;

const Icon1Text = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #623d30;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const SubTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 40px;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 800;
  }

  @media screen and (max-width: 700px) {
    font-size: 25px;
    margin-bottom: 25px;
    text-align: center;
  }
`;

const Contents3Wrap = styled.div`
  width: 843px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: space-between;
  grid-gap: 15px;

  @media screen and (max-width: 1024px) {
    width: 670px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    grid-template-columns: auto auto;
    justify-content: center;
  }
`;

const Contents3Box = styled.div`
  width: 156px;
  height: 180px;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 122px;
    height: 140px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const WhiteBox = styled.div`
  width: 120px;
  height: 115px;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 97px;
    height: 91px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const WhiteBoxIcon = styled.img`
  @media screen and (max-width: 1024px) {
    transform: scale(0.8);
  }

  @media screen and (max-width: 700px) {
  }
`;

const BoxText = styled.div`
  font-size: 16px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  @media screen and (max-width: 700px) {
  }
`;

export default Medicine;
