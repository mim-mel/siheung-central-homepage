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

const Vet3 = () => {
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
      <VetNav categoryName='vet3' />
      <Name>장덕재 원장</Name>
      <ImgWrap>
        {/* 메인 이미지 변경 */}
        <VetImg src='/image/member-vet3-big.jpg' />
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
          <Content1Img src='/image/member-vet3-illust.jpg' />
          <ContentsTextWrap>
            {/* 이력서 타이틀 수정 */}
            <ContentsTitle themeColor='#7fbcd1'>
              우리아이 평생 주치의
            </ContentsTitle>
            <CheckTextWrap>
              {/* 체크 아이콘 색상 및 이력서 내용 수정 */}
              <CheckIcon src='/image/member-vet3-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  현 시흥24시 센트럴 동물의료센터 원장
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet3-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  인천 하인츠 동물병원 내과 과장
                </CheckText>
                <CheckText>우리 동물 메디컬 센터 진료 수의사</CheckText>
                <CheckText>혜민 동물병원 중환자 전담 수의사</CheckText>
                <CheckText>서울 더 힐 동물의료센터 진료 수의사</CheckText>
                <CheckText>대전 이리온 동물병원 원장</CheckText>
                <CheckText>안산 동물은 내친구 동물병원 진료 수의사 </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet3-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  국립 충남대학교 수의과대학 졸업(DVM)
                </CheckText>
                <CheckText>국립 충남대학교 수의과대학원 석사졸업(MS)</CheckText>
                <CheckText>대한수의사회 정회원(KVMA)</CheckText>
                <CheckText>한국 수의응급의학 연구회 정회원</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet3-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  한국 미생물 생명공학회(KMB )정기학술대회
                </CheckText>
                <CheckText>
                  HKU Climate Infectious Disease Workshop 참가
                </CheckText>
                <CheckText>
                  Lika shing Faculty of Medicine, University of Hong Kong
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
            인간에게는 동물을 다스릴 권리가 있는것이 아니라 모든 생명체를 지킬
            의무가있다. 동물학자이자 인류학자인 제인구달(Jane Goodall)의
            말입니다. 동물에 대해 인류가 다해야할 의무의 최선봉에 있는 사람이
            수의사라 생각하며, 이 의무에 최선을 다하는 사람이 되기위해 수의사의
            길을 걸어가고 있습니다. 치료의 기회가 주어진 동물에 최고의 기회를
            제공하고자 최선의 노력을 기울이겠습니다.
          </Contents2Text>
          <Contents2Name>by. 장덕재 원장</Contents2Name>
        </Contents2Wrap>
      </Toggle>
    </Wrap>
  );
};

export default Vet3;
