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

const Vet2 = () => {
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
      <VetNav categoryName='vet2' />
      <Name>김지안 원장</Name>
      <ImgWrap>
        {/* 메인 이미지 변경 */}
        <VetImg src='/image/member-vet2-big.jpg' />
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
          <Content1Img src='/image/member-vet2-illust.jpg' />
          <ContentsTextWrap>
            {/* 이력서 타이틀 수정 */}
            <ContentsTitle themeColor='#f5bbc0'>
              학술 지원 연구 담당
            </ContentsTitle>
            <CheckTextWrap>
              {/* 체크 아이콘 색상 및 이력서 내용 수정 */}
              <CheckIcon src='/image/member-vet2-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  현 시흥 24시 센트럴 동물의료센터 원장
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet2-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  시흥 24시 센트럴 동물의료센터 과장
                </CheckText>
                <CheckText>인천 동암동물병원 진료수의사</CheckText>
                <CheckText>대전 충남대학교 동물병원 수의사</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet2-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  국립 충남대학교 수의과대학 졸업 (DVM)
                </CheckText>
                <CheckText>국립 충남대학교 수의과대학 석사 졸업(MS)</CheckText>
                <CheckText>대한수의사회 정회원(KVMA)</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet2-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>중앙 AMC 임상세미나 수료</CheckText>
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
            어린시절부터 동물에 대한 관심이 많았습니다. 동물과 가족이 되는걸
            가장 큰 선물이라고 생각할 정도 였습니다. 키우게 된 동물들이 많았고,
            키웠던 강아지가 오래 살지 못하고 생을 마감했던 기억이 있습니다.
            동물을 사랑했던 저에게 지켜주지못한 것이 큰 충격이었습니다. 그 이후
            공부를 하고 수의사가 되었고 예전의 기억을 힘으로 삼아 조금더 보호자
            마음을 살피게 되었습니다. 강아지가 건강하게 회복 하고 나갈 때 보람을
            느낌니다. 대외적인 학술활동을 주로 있으며, 임상수의학의 발전을 위해
            노력중입니다.
          </Contents2Text>
          <Contents2Name>by. 김지안 원장</Contents2Name>
        </Contents2Wrap>
      </Toggle>
    </Wrap>
  );
};

export default Vet2;
