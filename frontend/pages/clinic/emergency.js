import ClinicNav from '@/components/subpage/ClinicNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';

const Emergency = () => {
  return (
    <Wrap>
      <ClinicNav
        url='/image/sub-main2.jpg'
        title='24시 응급실'
        categoryName='emergency'
      />
      <EmergencyWrap>
        <Title>응급실 운영</Title>
        <MainImg src='/image/emergency-img1.jpg' />
        <MainText marginTop>
          저희 센트럴 동물의료센터는 응급환자를 위해 응급실을 운영하고 있습니다.
          정상진료시간도 다른병원들과 차별점을 두어 보호자님들의 저녁시간 활용을
          위해 평일 아침 9시부터 밤 12시까지 운영중이며 주말 아침 9시부터 밤
          10시까지 휴진없이 운영중입니다.
        </MainText>
        <MainText>
          응급환자의 경우 미리 전화를 주고 오시면 조금 더 원활한 진료가
          가능합니다. 당직수의사 선생님과 당직 간호사 선생님께서 보호자님과
          반려동물의 위급한 상황을 같이 상담해드리겠습니다.
        </MainText>
        <MainText>
          보다 집중적인 입원관리를 위해 주말 밤 ( 토요일, 일요일 밤 )에는
          입원환자 관리만 하고 있으니 이점 양해해 주시기 바랍니다. 응급상황에
          진료와 수술이 가능한 최고의 동물병원이 되겠습니다. 감사합니다.
        </MainText>
        <SubTitle>- 심야응급 시스템 -</SubTitle>
        <Contents1Wrap>
          <Contents1Title>
            다양한 응급장비와 검사장비 구비, 신속한 대처 전문적인 치료, 풍부한
            지식과 경험!
          </Contents1Title>
          <Contents1Text>
            저희 센트럴 동물의료센터는 전 의료진이 응급환자 및 중환자를
            집중적으로 치료하고 있습니다. 반려동물에게 일어날 수 있는 응급상황은
            그 원인과 진행과정, 예후에 따라서 수없이 많습니다. 급성 호흡 곤란,
            경련, 패혈증, 외상 등 급성질환을 가진 환자뿐만 아니라 간부전,
            신부전, 내분비계 질환, 심장 질환 등 만성 질환을 포함한 환자들이 집중
            관리, 약물 투여, 수액 치료 등이 신속하고 전문적인 치료를 받을 수
            있습니다. 다양한 응급장비과 검사 장비들을 구비하고 있으며, 신속하고
            정확한 대처가 이루어 질 수 있습니다.
          </Contents1Text>
        </Contents1Wrap>
        <Contents2Wrap>
          <Contents2Box>
            <Contents2Num marginBotton>01</Contents2Num>
            <Contents2Text>
              급성 호흡 곤란, 경련, 패혈증, 외상 등 급성질환을 가진 환자뿐만
              아니라 간부전, 신부전, 내분비계 질환, 심장 질환 등 만성 질환을
              포함한 환자들이 집중 관리, 약물 투여, 수액 치료 등이 신속하고
              전문적인 치료를 받을 수 있습니다.
            </Contents2Text>
          </Contents2Box>
          <Contents2Box>
            <Contents2Num>02</Contents2Num>
            <Contents2Text>
              응급 및 중환자에게 꼭 필요한 산소공급 시스템을 24시간 구축하고
              있으며 쇼크, 심정지와 같은 응급상황에 대처할 수 있는 풍부한 지식과
              경험을 갖춘 의료진과 응급 치료시스템이 준비되어 있습니다.
            </Contents2Text>
          </Contents2Box>
          <Contents2Box>
            <Contents2Num>03</Contents2Num>
            <Contents2Text>
              ​환자가 병원에 도착하면 최소한의 ​예비평가 후 환자 생체의 기능이
              ​위태한 상태인지 판단하고 재빨리 응급조치를 하며 상태의 진전을
              확인합니다. 내원전 전화를 미리 주시기 바랍니다.
            </Contents2Text>
          </Contents2Box>
        </Contents2Wrap>
        <SubTitle>- 심야응급 진료안내 -</SubTitle>
        <Contents3Wrap>
          <Contents3Box>
            <Contents3Img src='/image/emergency-img2.jpg' />
          </Contents3Box>
          <Contents3Box>
            <Contents3Text>
              야간에 발생하는 응급상황이나 집중치료를 요하는 중환자들은 그 어떤
              환자들보다 응급 장비와 더불어 의료진의 역량이 중요합니다.
            </Contents3Text>
            <Contents3Text>
              우리 동물병원은 응급 및 중환자에게 꼭 필요한 산소공급 시스템
              (대학병원급 24시간 산소발생기) 을 구축하였으며 쇼크, 심정지와 같은
              응급상황에 대처할 수 있는 풍부한 지식과 경험을 갖춘 의료진과 응급
              치료시스템이 준비되어 있습니다.
            </Contents3Text>
            <Contents3Text>
              외래응급실 휴진 시간에도 24시간 입원집중관리 시스템으로 특별한
              사항이 있을시 담당 의료진이 보호자님께 언제든 연락이 갈수 있게
              준비되어있습니다. ​
            </Contents3Text>
            <Contents3Text marginBottonX>
              ​365일 24시간 연중무휴로 운영되는 24시 센트럴 동물의료센터가 아픈
              우리 아이들을 최선을 다해 보살피겠습니다.
            </Contents3Text>
          </Contents3Box>
        </Contents3Wrap>
      </EmergencyWrap>
    </Wrap>
  );
};

const EmergencyWrap = styled.div`
  width: 1000px;
  margin: 8vh auto 10vh auto;

  @media screen and (max-width: 1700px) {
    width: 940px;
    margin: 6vh auto 10vh auto;
  }

  @media screen and (max-width: 1024px) {
    width: 670px;
    margin: 6vh auto 8vh auto;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    margin: 0 auto 8vh auto;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 40px;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    font-size: 33px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    font-size: 23px;
    margin-bottom: 20px;
    text-align: center;
    margin-top: 0;
  }
`;

const MainImg = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  @media screen and (max-width: 700px) {
    border-radius: 15px;
  }
`;

const MainText = styled.div`
  margin: 0 auto;
  margin-top: ${props => (props.marginTop ? '60px' : '25px')};
  font-size: 19px;
  font-weight: 400;
  line-height: 29px;
  width: 100%;

  @media screen and (max-width: 1700px) {
    font-size: 18px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: ${props => (props.marginTop ? '40px' : '25px')};
  }

  @media screen and (max-width: 700px) {
    font-size: 12px;
    line-height: 20px;
    margin-top: ${props => (props.marginTop ? '20px' : '15px')};
  }
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  margin-top: 80px;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 50px;
    font-size: 18px;
  }
`;

const Contents1Wrap = styled.div`
  width: 100%;
  height: 255px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 38px 65px;
  box-sizing: border-box;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    padding: 30px 40px;
    height: auto;
  }

  @media screen and (max-width: 700px) {
    padding: 20px 24px;
  }
`;

const Contents1Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #42b4be;
  margin-bottom: 25px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 15px;
  }
`;

const Contents1Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 29px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (max-width: 700px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

const Contents2Wrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    margin-bottom: 30px;
  }
`;

const Contents2Box = styled.div`
  width: 310px;
  height: 240px;
  border-radius: 15px;
  border: 5px solid #42b4be;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 220px;
    height: 180px;
    padding: 15px;
  }

  @media screen and (max-width: 700px) {
    margin: 0 auto 20px auto;
    width: 100%;
    height: 170px;
  }
`;

const Contents2Num = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: #42b4be;
  margin-bottom: ${props => (props.marginBotton ? '13px' : '25px')};

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: ${props => (props.marginBotton ? '5px' : '15px')};
  }

  @media screen and (max-width: 700px) {
    margin-bottom: ${props => (props.marginBotton ? '15px' : '20px')};
  }
`;

const Contents2Text = styled.div`
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  width: 95%;
  margin: 0 auto;
  line-height: 22px;

  @media screen and (max-width: 1024px) {
    font-size: 11px;
    line-height: 18px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const Contents3Wrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }

  @media screen and (max-width: 700px) {
  }
`;

const Contents3Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const Contents3Img = styled.img`
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  border-radius: 20px;

  @media screen and (max-width: 1700px) {
    width: 480px;
  }

  @media screen and (max-width: 1024px) {
    width: 550px;
    margin-left: auto;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Contents3Text = styled.div`
  width: 85%;
  margin-left: auto;
  margin-bottom: ${props => (props.marginBottonX ? '' : '17px')};
  line-height: 22px;
  font-size: 15px;

  @media screen and (max-width: 1700px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: ${props => (props.marginBottonX ? '' : '20px')};
    margin-right: auto;
    width: 83%;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export default Emergency;
