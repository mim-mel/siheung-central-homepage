import ClinicNav from '@/components/subpage/ClinicNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';
import {
  OldWrap,
  MainContentsWrap,
  MainImg,
  MainTextWrap,
  MainText,
} from './old';

const Rehabilitation = () => {
  return (
    <Wrap>
      <ClinicNav
        url='/image/sub-main2.jpg'
        title='재활 통증의학 센터'
        categoryName='rehabilitation'
      />
      <OldWrap>
        <MainContentsWrap>
          <MainImg src='/image/rehabilitation-img1.jpg' />
          <MainTextWrap>
            <MainText marginBottom>
              저희 시흥 센트럴 동물의료센터는 정형외과/신경외과 진료와 수술을
              많이 하고 있습니다.수술 후 통증관리와 조금 더 나은 환자의 관리를
              위해 재활/통증의학 클리닉을 별도로 운영하고 있습니다.
            </MainText>
            <MainText>
              동물병원 별관에 재활의학실이 별도로 마련되어 있어 숙련된
              전문의료진이 재활 프로그램에 따라 물리치료 재활치료를 진행하고
              있습니다. 반려동물의 나이 근육 신경계 골격계의 상태에 따라 맞춤
              물리치료/재활치료에 힘쓰겠습니다.
            </MainText>
          </MainTextWrap>
        </MainContentsWrap>
        <SubTitle>
          아래와 같은 재활 시스템이 준비되어 있으며,
          <br /> 아이의 상태에 따라 주치의 선생님과 상담 후 진행됩니다.{' '}
        </SubTitle>
        <Contents2Wrap>
          <Contents2Box marginBottom>
            <Img src='/image/rehabilitation-img2.jpg' />
            <BoxTitle>한방 침치료</BoxTitle>
            <BoxText>
              침치료는 머리카락 굵기만큼의 가는 바늘을 통해 혈자리를 자극하는
              치료법으로 통증완화, 염증감소, 호르몬 조절 등의 효과가 있습니다.
              방법에 따라 전침, 건침, 약침으로 나눕니다.
            </BoxText>
          </Contents2Box>
          <Contents2Box>
            <Img src='/image/rehabilitation-img3.jpg' />
            <BoxTitle>레이저 치료</BoxTitle>
            <BoxText>
              레이져 치료는 통증과 염증 경감에 탁월하고 세포 및 조직재생에
              효과가 있어 여러 질환에 사용할 수 있습니다. 치료 소요시간이 짧고
              간단한 보정만으로도 치료가 가능합니다.
            </BoxText>
          </Contents2Box>
          <Contents2Box>
            <Img src='/image/rehabilitation-img4.jpg' marginBottom />
            <BoxTitle>체외충격파치료(ESWT)</BoxTitle>
            <BoxText>
              체외충격파치료는 빠른 파동 에너지를 피부로 전달해 심부 깊은 곳에
              있는 병변을 치료하는 최신식 비수술적 재활물리치료 장비입니다.
              손상된 조직의 재생 촉진 및 혈관 재형성을 돕고 조직과 뼈를
              활성화시켜 통증을 감소시키는 효과를 보입니다.
            </BoxText>
          </Contents2Box>
          <Contents2Box>
            <Img src='/image/rehabilitation-img5.jpg' />
            <BoxTitle marginTop>신경-근 자극 치료</BoxTitle>
            <BoxText>
              NMES 치료는 신경에 전기자극을 가해 근육 수축을 유도하여 근육 위축
              예방하고 근육을 re-training (재교육) 및 강화시키기 위해 사용되는
              치료법입니다.
            </BoxText>
          </Contents2Box>
          <Contents2Box>
            <Img src='/image/rehabilitation-img6.jpg' />
            <BoxTitle marginTop>극저온 치료기</BoxTitle>
            <BoxText>
              환부의 혈액순환을 원활하게 하여 재생세포를 증가시켜주고 통증 및
              염증감소 부종 완화에 탁월한 효과가 있습니다.
            </BoxText>
          </Contents2Box>
          <Contents2Box>
            <Img src='/image/rehabilitation-img7.jpg' />
            <BoxTitle>운동치료</BoxTitle>
            <BoxText>
              다양한 운동기구를 통해 근력, 보행, 균형감격, 자세 등을 개선하고
              유지시키는 치료법입니다. 보상 (간식) 과 칭찬을 통해 치료에 보다
              적극적으로 참여할 수 있도록 유도합니다.
            </BoxText>
          </Contents2Box>
        </Contents2Wrap>
      </OldWrap>
    </Wrap>
  );
};

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #623d30;
  line-height: 37px;
  margin-bottom: 50px;
  text-align: center;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    font-size: 15px;
    letter-spacing: -1px;
    line-height: 30px;
    margin-bottom: 30px;
  }
`;

const Contents2Wrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  margin-bottom: 4vh;

  @media screen and (max-width: 1024px) {
    width: 670px;
    grid-template-columns: 45% 45%;
    justify-content: center;
    grid-gap: 25px;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    grid-template-columns: 100%;
  }
`;

const Contents2Box = styled.div`
  width: 330px;
  height: 370px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => (props.marginBottom ? '30px' : '')};

  @media screen and (max-width: 1700px) {
    width: 300px;
    height: 350px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 700px) {
    margin: 0 auto;
  }
`;

const Img = styled.img`
  width: 287px;
  border-radius: 20px;
  margin-bottom: ${props => (props.marginBottom ? '15px' : '25px')};
  margin-top: 20px;

  @media screen and (max-width: 1700px) {
    width: 260px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
  }
`;

const BoxTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 10px;
  text-align: center;
  margin-top: ${props => (props.marginTop ? '10px' : '')};

  @media screen and (max-width: 700px) {
    font-size: 22px;
  }
`;

const BoxText = styled.div`
  margin: 0 25px;
  font-size: 13px;
  color: #666666;
  line-height: 20px;
`;

export default Rehabilitation;
