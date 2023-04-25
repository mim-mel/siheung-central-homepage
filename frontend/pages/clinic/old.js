import ClinicNav from '@/components/subpage/ClinicNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';

const Old = () => {
  return (
    <Wrap>
      <ClinicNav
        url='/image/sub-main1.jpg'
        title='노령 질환 센터'
        categoryName='old'
      />
      <OldWrap>
        <MainContentsWrap>
          <MainImg src='/image/old-img1.jpg' />
          <MainTextWrap>
            <MainTitle>강아지 고양이의 노령시대</MainTitle>
            <MainText>
              강아지의 평균 수명은 소형견 기준 12-17살 이며, 중형견 기준
              10살-15살 그리고 대형견은 8살-13살 정도로 나와 있습니다. 그러나
              평균수명일 뿐 의료시스템의 발전으로 점점 기대수명이 늘어가고 있는
              추세입니다. 우리 반려동물이 나이가 들어 노령이 되면 점점 노화가
              생기고 없던 질병을 알게 됩니다. 이 질환들을 미리 예방하고 관리
              하는 것을 목표로 아이의 삶의 질 향상을 위해 노력해야 합니다.
            </MainText>
          </MainTextWrap>
        </MainContentsWrap>
        <SubContentsWrap>
          <SubImg src='/image/old-img2.jpg' />
          <SubTextWrap>
            <SubTitle>강아지의 심장병</SubTitle>
            <SubText>
              강아지들에게 후천적인 노화로 인해 발생하는 심장병 중 가장 흔한
              질환은 이첨판폐쇄부전증입니다.이첨판은 좌심방과 좌심실 사이를
              여닫는 판막으로 좌심실이 수축하여 혈액을 전신으로 보낼 때
              좌심방으로 혈액이 역류하지 않도록 해주는 기능을 합니다. 그러나
              노화로 인한 퇴행성으로 이첨판이 제대로 된 기능을 하지 못하여
              혈액이 좌심방으로 역류하게 되는데 이를 이첨판폐쇄부전증이라고
              합니다. 저희 센트럴 동물의료센터에서는 가장 대표적인 이 질환을
              건강검진으로 미리 진단하고 관리함으로써 기대 수명을 조금더 늘려
              주고자 노력하고 있습니다.
            </SubText>
          </SubTextWrap>
        </SubContentsWrap>
        <SubContentsWrap marginLeft>
          <SubImg src='/image/old-img3.jpg' />
          <SubTextWrap>
            <SubTitle>만성 신부전증</SubTitle>
            <SubText>
              노화가 되면 강아지 고양이의 장기중 기능이 점점 떨어지는 대표적인
              게 바로 신장입니다. 증상이 시작된 아이들은 입원이나 적극적인
              치료로 관리를 하며, 미리 건강검진에서 확인된 반려동물은 국제
              반려동물 신장학회의 표준 가이드라인을 토대로 남은 신장기능을
              최대한 살려 건강한 삶을 유지하게 도와주고 있습니다. 현재 많은 수의
              아이들을 관리하며 보호자님과 함께 반려동물의 건강을 책임지고
              있습니다.
            </SubText>
          </SubTextWrap>
        </SubContentsWrap>
        <SubContentsWrap>
          <SubImg src='/image/old-img4.jpg' />
          <SubTextWrap>
            <SubTitle>퇴행성 노령성 관절질환</SubTitle>
            <SubText>
              반려동물이 나이가 들면 점점 더 기능이 떨어지는 장기중 하나가 바로
              골관절계 입니다. 척추나 관절의 이상유무를 먼저 진단하고 노령으로
              인한 질환으로 확인되면 그에 따른 보전적이고 부작용이 적은 치료
              플랜을 잡습니다. 조금더 잘 뛰고 덜 아픈 아이들이 많아 지길 항상
              바라면서 퇴행성 관절질환의 치료를 담당하고 있습니다.
            </SubText>
          </SubTextWrap>
        </SubContentsWrap>
      </OldWrap>
    </Wrap>
  );
};

const OldWrap = styled.div`
  width: 1050px;
  margin: 0 auto 5vh auto;

  @media screen and (max-width: 1700px) {
    width: 950px;
  }

  @media screen and (max-width: 1024px) {
    width: 85%;
    margin: 0 auto 3vh auto;
  }

  @media screen and (max-width: 700px) {
  }
`;

const MainContentsWrap = styled.div`
  width: 1050px;
  height: auto;
  display: grid;
  grid-template-columns: 45% 45%;
  margin-top: 15vh;
  justify-content: space-between;
  margin-bottom: 13vh;

  @media screen and (max-width: 1700px) {
    width: 950px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    margin-top: 3vh;
    margin-bottom: 7vh;
  }
`;

const MainImg = styled.img`
  border-radius: 20px;
  transform: scale();
  @media screen and (max-width: 1700px) {
    width: 500px;
  }

  @media screen and (max-width: 1024px) {
    width: 350px;
  }

  @media screen and (max-width: 700px) {
    width: 300px;
    margin: 0 auto 30px auto;
  }
`;

const MainTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainTitle = styled.div`
  font-size: 38px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 25px;

  @media screen and (max-width: 1700px) {
    font-size: 35px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 29px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 26px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const MainText = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.1px;

  @media screen and (max-width: 1700px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 26px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
    font-size: 13px;
    line-height: 24px;
  }
`;

const SubContentsWrap = styled.div`
  width: 850px;
  height: auto;
  display: grid;
  grid-template-columns: 45% 55%;
  justify-content: space-between;
  margin-bottom: 7vh;
  margin-left: ${props => (props.marginLeft ? 'auto' : '')};

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    width: 100%;
  }
`;

const SubImg = styled.img`
  border-radius: 20px;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 250px;
  }

  @media screen and (max-width: 700px) {
    margin: 0 auto;
    width: 230px;
  }
`;

const SubTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 25px;

  @media screen and (max-width: 1700px) {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (max-width: 700px) {
    font-size: 24px;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const SubText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  opacity: #666666;

  @media screen and (max-width: 1700px) {
    font-size: 15px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12.5px;
    line-height: 23px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
    font-size: 12px;
    line-height: 20px;
  }
`;

export default Old;
