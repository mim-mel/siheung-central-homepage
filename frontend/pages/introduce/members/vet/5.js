import styled from 'styled-components';
import { Wrap } from '../../about';
import IntroduceNav from '@/components/subpage/IntroduceNav';
import MemberNav from '@/components/members/MemberNav';
import VetNav from '@/components/members/VetNav';
import { useState } from 'react';
import {
  Name,
  ImgWrap,
  VetImg,
  Toggle,
  ToggleTitle,
  ToggleIcon,
  ToggleArrow,
  Contents1Wrap,
  Content1Img,
  ContentsTitle,
  ContentsTextWrap,
  CheckTextWrap,
  CheckIcon,
  ChechTextBox,
  CheckText,
  Contents2Wrap,
  Contents2Text,
  Contents2Name,
} from './1';

const Vet5 = () => {
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
      <VetNav categoryName='vet5' />
      <Name>강명곤 과장</Name>
      <ImgWrap>
        {/* 메인 이미지 변경 */}
        <VetImg src='/image/member-vet5-big.jpg' />
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
          {/* 이력에 들어가는 일러스트 변경 */}
          <Content1Img src='/image/member-vet5-illust.jpg' />
          <ContentsTextWrap>
            {/* 이력서 타이틀 수정 */}
            <ContentsTitle themeColor='#1eb2a6'>
              정성스런 진료 친절한 설명
            </ContentsTitle>
            <CheckTextWrap>
              {/* 체크 아이콘 색상 및 이력서 내용 수정 */}
              <CheckIcon src='/image/member-vet5-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  현 시흥 24시 센트럴 동물의료센터 과장
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet5-checkicon.png' />
              <ChechTextBox>
                <CheckText>시흥 24시 센트럴 동물의료센터 수의사</CheckText>
                <CheckText>서울 충현동물병원 진료수의사</CheckText>
                <CheckText>강원대학교 대학동물병원 임상로테이션</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet5-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  국립 강원대학교 수의과대학 졸업(DVM)
                </CheckText>
                <CheckText>Pacific Union College(USA) 생화학과 학사</CheckText>
                <CheckText>대한수의사회 정회원(KVMA)</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet5-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  세계수의학도협의회(IVSA) 참가
                </CheckText>
                <CheckText>서울임상수의학회 참가</CheckText>
                <CheckText>강원대 사이언스페어&심포지엄 참가</CheckText>
                <CheckText>한국실험동물학회 참가</CheckText>
                <CheckText>충현 임상수의사 인턴 세미나 수료</CheckText>
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
            가족 또는 친구 이상의 존재라고 생각합니다. 항상 저만 바라보면서
            어떠한 조건도 없이 기다려줄 수 있는 사랑스러운 존재가 이 세상에 또
            있을까요?사람의 언어를 구사하지는 못하지만 대화 이상으로 무언의
            교감이 가능하고, 힘들 때 옆에서 조용히 위로해줄 수 있는, 때로는 사람
            이상으로 힘이 되어주는 존재가 반려동물이라고 생각합니다. 그래서 저는
            반려동물이 아플 때, 그들의 고통을 헤아려주고 치료해주고자 수의사가
            되었습니다. 저 역시 어릴 때부터 여러 반려동물들과 함께 했고 현재도
            같이 살고 있기에, 반려동물이 아프면 보호자님들처럼 마음이 아프고
            빨리 낫게 해주고 싶습니다. 병원에 찾아오시는 모든 보호자님들의
            반려동물들이 고통에서 벗어나고, 아프지 않고 건강히 오래 살기를
            바라며, 매순간 최선을 다해 치료하겠습니다.
          </Contents2Text>
          <Contents2Name>by. 강명곤 과장</Contents2Name>
        </Contents2Wrap>
      </Toggle>
    </Wrap>
  );
};

export default Vet5;
