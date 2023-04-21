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
            <ContentsTitle>최고의 실력과 신뢰</ContentsTitle>
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
                  서울 강동 24시 S동물의료센터 응급의학과장
                </CheckText>
                <CheckText>부천 24시 S동물병원 진료과장</CheckText>
                <CheckText>안산 24시 K 동물병원 진료과장</CheckText>
                <CheckText>인천 24시 S 동물의료센터 진료수의사</CheckText>
                <CheckText>대전 24시 A 동물병원 인턴쉽</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet1-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  국립 충남대학교 수의학과 졸업(DVM)
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet1-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>대한수의사회 정회원(KVMA)</CheckText>
                <CheckText>한국고양이 수의사회 정회원(KSFM)</CheckText>
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
            Lorem Ipsum has been the standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting
          </Contents2Text>
        </Contents2Wrap>
      </Toggle>
    </Wrap>
  );
};

const Name = styled.div`
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

const ImgWrap = styled.div`
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

const VetImg = styled.img`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  @media screen and (max-width: 700px) {
    box-shadow: rgba(0, 0, 0, 0) 0px 4px 12px;
  }
`;

const Toggle = styled.div`
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

const ToggleTitle = styled.div`
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

const ToggleArrow = styled.img`
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

const ToggleIcon = styled.img`
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

const Contents1Wrap = styled.div`
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

const Content1Img = styled.img`
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

const ContentsTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
  align-items: flex-start;
`;

const ContentsTitle = styled.div`
  padding: 15px 30px;
  width: auto;
  background-color: #e6efde;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  color: #666666;
  margin-bottom: 1vh;

  @media screen and (max-width: 700px) {
    margin: 0 auto 1vh auto;
  }
`;

const CheckTextWrap = styled.div`
  margin-top: 2vh;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    margin-top: 1vh;
  }
`;

const CheckIcon = styled.img`
  margin-right: 10px;
`;

const ChechTextBox = styled.div`
  display: block;
`;

const CheckText = styled.div`
  font-size: 15px;
  color: #666666;
  margin-bottom: ${props => (props.marginBottomX ? '' : '5px')};

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

const Contents2Wrap = styled.div`
  height: ${props => (props.isToggleOn ? 'auto' : '0')};
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Contents2Text = styled.div`
  font-size: 18px;
  color: #666666;
  margin-top: 3vh;
  line-height: 28px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 2vh;
  }
`;

export default Vet1;
