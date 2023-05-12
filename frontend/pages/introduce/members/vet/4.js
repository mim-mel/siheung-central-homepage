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

const Vet4 = () => {
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
      <VetNav categoryName='vet4' />
      <Name>이민재 원장</Name>
      <ImgWrap>
        {/* 메인 이미지 변경 */}
        <VetImg src='/image/member-vet4-big.jpg' />
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
          <Content1Img src='/image/member-vet4-illust.jpg' />
          <ContentsTextWrap>
            {/* 이력서 타이틀 수정 */}
            <ContentsTitle themeColor='#a3bc92'>
              마음이 따듯한 실력있는 수의사
            </ContentsTitle>
            <CheckTextWrap>
              {/* 체크 아이콘 색상 및 이력서 내용 수정 */}
              <CheckIcon src='/image/member-vet4-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  현 시흥24시 센트럴 동물의료센터 원장
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet4-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  인천 24시 스카이동물의료센터 진료총괄 원장
                </CheckText>
                <CheckText>
                  인천 24시 스카이동물의료센터 진료총괄 원장
                </CheckText>
                <CheckText>서울 24시 신사스카이동물병원 부원장</CheckText>
                <CheckText>서울 강남 페츠비 동물의료센터 진료수의사</CheckText>
                <CheckText>안양 씨엘 동물병원 원장</CheckText>
                <CheckText>도그빌 동물병원 진료수의사</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet4-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  국립 서울대학교 수의과대학 졸업(DVM)
                </CheckText>
                <CheckText>대한수의사회 정회원(KVMA)</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet4-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>임상 세미나 다수 수료</CheckText>
                <CheckText>임상 학회 다수 참석</CheckText>
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
            수의사이기 이전에 한명의 보호자로서 아이들과의 건강한 삶과 관계를
            유지하는것을 조금 더 생각하는 진료를 추구하도록 하겠습니다.
          </Contents2Text>
          <Contents2Name>by. 이민재 원장</Contents2Name>
        </Contents2Wrap>
      </Toggle>
    </Wrap>
  );
};

export default Vet4;
