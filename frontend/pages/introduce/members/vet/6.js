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

const Vet6 = () => {
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
      <VetNav categoryName='vet6' />
      <Name>조은상 과장</Name>
      <ImgWrap>
        {/* 메인 이미지 변경 */}
        <VetImg src='/image/member-vet6-big.jpg' />
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
          <Content1Img src='/image/member-vet6-illust.jpg' />
          <ContentsTextWrap>
            {/* 이력서 타이틀 수정 */}
            <ContentsTitle themeColor='#deb6ac'>세심한 수의사</ContentsTitle>
            <CheckTextWrap>
              {/* 체크 아이콘 색상 및 이력서 내용 수정 */}
              <CheckIcon src='/image/member-vet6-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  현 시흥 24시 센트럴 동물의료센터 과장
                </CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet6-checkicon.png' />
              <ChechTextBox>
                <CheckText>서울 강남 예은동물병원 부원장</CheckText>
                <CheckText>서울 24시 충현동물병원 진료 수의사</CheckText>
                <CheckText>분당 24시 리더스동물의료원 진료수의사</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet6-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  국립 충북대학교 수의과대학 졸업(DVM)
                </CheckText>
                <CheckText>동국대학교 의생명공학과 졸업</CheckText>
                <CheckText>대한수의사회 정회원(KVMA)</CheckText>
              </ChechTextBox>
            </CheckTextWrap>

            <CheckTextWrap>
              <CheckIcon src='/image/member-vet6-checkicon.png' />
              <ChechTextBox>
                <CheckText marginBottomX>
                  농림축산검역본부 기술교육 수료
                </CheckText>
                <CheckText>해마루 임상 기본 세미나 수료</CheckText>
                <CheckText>심장초음파 세미나 수료</CheckText>
                <CheckText>복부초음파 세미나 수료</CheckText>
                <CheckText>눈초롱 안과 세미나 수료</CheckText>
                <CheckText>서울 임상 수의사 연수교육 수료</CheckText>
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
            아픈 반려 동물을 걱정하시는 보호자님의 마음을 잘 알기에 세심하게
            치료하는 좋은 수의사가 되겠습니다.
          </Contents2Text>
          <Contents2Name>by. 조은상 과장</Contents2Name>
        </Contents2Wrap>
      </Toggle>
    </Wrap>
  );
};

export default Vet6;
