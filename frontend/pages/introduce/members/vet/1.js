import styled from 'styled-components';
import { Wrap } from '../../about';
import IntroduceNav from '@/components/subpage/IntroduceNav';
import MemberNav from '@/components/members/MemberNav';
import VetNav from '@/components/members/VetNav';
import { useState } from 'react';

const Vet1 = () => {
  const [Toggle1State, setToggle1State] = useState(false);
  const [Toggle2State, setToggle2State] = useState(false);

  //토글 활성화 비활성화 컨트롤 함수
  const isToggle1On = () => {
    if (Toggle1State) {
      setToggle1State(false);
    } else {
      setToggle1State(true);
    }
  };

  const isToggle2On = () => {
    if (Toggle2State) {
      setToggle2State(false);
    } else {
      setToggle2State(true);
    }
  };

  return (
    <Wrap>
      <IntroduceNav
        url='/image/sub-main1.jpg'
        title='의료진 소개'
        categoryName='members'
      />
      <MemberNav categoryName='vet' />
      <VetNav categoryName='vet1' />
      <Name>김병선 대표원장</Name>
      <ImgWrap>
        <VetImg src='/image/member-vet1-big.jpg' />
      </ImgWrap>
      <Toggle>
        <ToggleTitle>
          이력 및 경력
          <ToggleIcon src='/image/member-toggle1-icon.png' />
          <ToggleArrow
            src='/image/member-toggle-arrow.png'
            isToggleOn={Toggle1State}
            onClick={isToggle1On}
          />
        </ToggleTitle>
        <Contents1Wrap isToggleOn={Toggle1State}>
          <Content1Img src='/image/member-vet1-illust.jpg' />
          <ContentsTextWrap>
            <ContentsTitle themeColor='#8294c4'>
              최고의 실력과 신뢰
            </ContentsTitle>
            <CheckTextWrap>
              <CheckIcon src='/image/member-vet1-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  현 시흥 24시 센트럴 동물의료센터 대표원장
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet1-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  서울 24시 스카이동물의료센터 응급의학과장
                </CheckText>
                <CheckText>부천 24시 스카이동물병원 진료과장</CheckText>
                <CheckText>안산 24시 가나동물병원 진료원장</CheckText>
                <CheckText>인천 24시 스카이동물의료센터 진료수의사</CheckText>
                <CheckText>대전 24시 아프리카 동물병원 인턴쉽</CheckText>
                <CheckText>대전 충남대학교 동물병원 임상로테이션</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet1-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  국립 충남대학교 수의학과 졸업(DVM)
                </CheckText>
                <CheckText>대한수의사회 정회원(KVMA)</CheckText>
                <CheckText>대한수의외과학회 정회원(KVS)</CheckText>
                <CheckText>한국고양이 수의사회 정회원(KSFM)</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet1-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  서울 중앙 AMC 임상세미나 수료
                </CheckText>
                <CheckText>외과(정형외과) 세미나 다수 수료</CheckText>
                <CheckText>치과,안과 세미나 다수 수료</CheckText>
                <CheckText>초음파 세미나수료 (심장초음파,복부정밀)</CheckText>
                <CheckText>
                  임상 컨퍼런스, 수의학술대회 매년 학회 수료
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>
          </ContentsTextWrap>
        </Contents1Wrap>
      </Toggle>

      <Toggle marginBottom>
        <ToggleTitle>
          본인에게 반려동물에 대한 생각은?
          <ToggleIcon src='/image/member-toggle2-icon.png' />
          <ToggleArrow
            src='/image/member-toggle-arrow.png'
            isToggleOn={Toggle2State}
            onClick={isToggle2On}
          />
        </ToggleTitle>
        <Contents2Wrap isToggleOn={Toggle2State}>
          <Contents2Text>
            저 또한 반려동물의 보호자로서 동물에 대한 애정을 가지고 있습니다.
            노령이된 강아지를 이별한 경험이있습니다. 나이많은 강아지의 삶에 대해
            생각할수 있었으며, 가족으로서 곁을 지켰습니다. 현재는 10년넘는
            고양이 두마리를 키우고 있습니다. 고양이에 대한 두려움을 바꾸게 된
            계기이기도 하며 더불어 고양이보호자님의 생각을 조금이나마 알게
            되었습니다. 평균 수명이 점점 가까워 오고 있어 조금이라도
            우리아이들과 건강히 지내고 싶은 마음입니다. 노령묘,노령견에 대한
            연구에 계속 관심이 가고, 연구 학회 활동도 지속적으로 하고 있습니다.
          </Contents2Text>
          <Contents2Name>by. 김병선 대표원장</Contents2Name>
        </Contents2Wrap>
      </Toggle>
    </Wrap>
  );
};

export const Name = styled.div`
  text-align: center;
  font-size: 27px;
  font-weight: 600;
  color: black;
  margin-bottom: 5vh;

  @media screen and (max-width: 1024px) {
    margin-bottom: 2vh;
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export const ImgWrap = styled.div`
  width: 913px;
  height: 490px;
  display: flex;
  margin-bottom: 4vh;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 75%;
    height: 350px;
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 3vh;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    height: 168px;
    border-radius: 10px;
  }
`;

export const VetImg = styled.img`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  @media screen and (max-width: 700px) {
    box-shadow: rgba(0, 0, 0, 0) 0px 4px 12px;
  }
`;

export const Toggle = styled.div`
  width: 913px;
  height: auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  padding: 32px 87px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: ${props => (props.marginBottom ? '10vh' : '4vh')};

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 75%;
    padding: 27px 60px;
    margin-bottom: ${props => (props.marginBottom ? '8vh' : '3vh')};
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    padding: 15px 30px;
    border-radius: 10px;
  }
`;

export const ToggleTitle = styled.div`
  height: 21px;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: black;
  position: relative;

  @media screen and (max-width: 1024px) {
    left: 15px;
  }

  @media screen and (max-width: 700px) {
    font-size: 14px;
    left: 25px;
    padding-top: 3px;
  }
`;

export const ToggleArrow = styled.img`
  position: absolute;
  left: ${props => (props.isToggleOn ? '99.5%' : '101%')};
  top: ${props => (props.isToggleOn ? '5%' : '50%')};
  transform: ${props =>
    props.isToggleOn
      ? 'rotate(90deg) translate(0, -50%)'
      : 'rotate(0) translate(0, -50%)'};
  cursor: pointer;
  transition: 0.2s;

  @media screen and (max-width: 1024px) {
    left: ${props => (props.isToggleOn ? '98%' : '101%')};
  }

  @media screen and (max-width: 700px) {
    left: ${props => (props.isToggleOn ? '82%' : '87%')};
    top: ${props => (props.isToggleOn ? '0%' : '40%')};
    transform: ${props =>
      props.isToggleOn
        ? 'scale(0.8) rotate(90deg) translate(0, -50%)'
        : 'scale(0.8) rotate(0) translate(0, -50%)'};
  }
`;

export const ToggleIcon = styled.img`
  position: absolute;
  left: -5.5%;
  top: 1%;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    left: -8%;
  }

  @media screen and (max-width: 700px) {
    left: -13%;
    transform: scale(0.8);
    top: -2%;
  }
`;

export const Contents1Wrap = styled.div`
  height: ${props => (props.isToggleOn ? 'auto' : '0')};
  display: grid;
  grid-template-columns: 30% 53%;
  overflow: hidden;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 30% 45%;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

export const Content1Img = styled.img`
  border-radius: 20px;
  margin-top: 3vh;

  @media screen and (max-width: 1024px) {
    height: 310px;
    margin: 2vh auto 0 auto;
  }

  @media screen and (max-width: 700px) {
    height: 270px;
    margin: 2vh auto 0 auto;
  }
`;

export const ContentsTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
  align-items: flex-start;
`;

export const ContentsTitle = styled.div`
  padding: 15px 30px;
  width: auto;
  background-color: ${props => props.themeColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  margin-bottom: 1vh;

  @media screen and (max-width: 700px) {
    margin: 0 auto 1vh auto;
  }
`;

export const CheckTextWrap = styled.div`
  margin-top: 2vh;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    margin-top: 1vh;
  }
`;

export const CheckIcon = styled.img`
  margin-right: 10px;
`;

export const ChechTextBox = styled.div`
  display: block;
`;

export const CheckText = styled.div`
  font-size: 15px;
  color: #666666;
  margin-bottom: ${props => (props.marginBottomX ? '' : '5px')};

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Contents2Wrap = styled.div`
  height: ${props => (props.isToggleOn ? 'auto' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const Contents2Text = styled.div`
  font-size: 17px;
  color: #707070;
  margin-top: 3vh;
  line-height: 30px;

  @media screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 22px;
    margin-top: 2vh;
  }
`;

export const Contents2Name = styled.div`
  font-size: 18px;
  margin-top: 20px;
  font-weight: 500;
  color: #686868;
  @media screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 2vh;
  }
`;

export default Vet1;
