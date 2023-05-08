import ClinicNav from '@/components/subpage/ClinicNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';
import { useState } from 'react';

const Surgery = () => {
  const [NumState, setNumState] = useState('1.');
  const [TitleState, setTitleState] = useState('안정적인 마취를 제공합니다.');
  const [TextState, setTextState] = useState(
    '반려 동물들은 사람의 언어를 통해 아픈곳을 호소하는 것이 아니기 때문에 그만큼 수술 전 검사가 매우 중요합니다. 센트럴 에서는 환자의 평소 증상 및 연령에 따른 질병을 반영할 수 있는 검사를 통해 환자의 상태를 확인하고 수술전 지시되는 질병이 발견되는 경우, 마취시 안정한 수준으로 상태를 조절해 마취를 진행하는 것을 원칙으로 합니다'
  );

  const handleBtn = num => {
    switch (num) {
      case 1:
        setNumState('1.');
        setTitleState('안정적인 마취를 제공합니다.');
        setTextState(
          '반려 동물들은 사람의 언어를 통해 아픈곳을 호소하는 것이 아니기 때문에 그만큼 수술 전 검사가 매우 중요합니다.센트럴 에서는 환자의 평소 증상 및 연령에 따른 질병을 반영할 수 있는 검사를 통해 환자의 상태를 확인하고 수술전 지시되는 질병이 발견되는 경우, 마취시 안정한 수준으로 상태를 조절해 마취를 진행하는 것을 원칙으로 합니다'
        );
        break;
      case 2:
        setNumState('2.');
        setTitleState('철저한 멸균수술 환경과 고성능의 마취장비를 구축합니다.');
        setTextState(
          '수술복, 수술장갑, 마스크 등을 철저히 작용하고 수술중 사용하는 모든 수술기구와 소모품을 멸균하여 사용하고 있습니다.  기본 체온 혈압 심전도 뿐만 아니라 산소포화도, 마취약물농도, 기도 폐포압력 등 마취의 정밀한 부분까지 체크하며 자동 호흡기(벤틸레이터)를 운영하고 있어 노령이나 중환자도 안전한 마취가 가능합니다. '
        );
        break;
      case 3:
        setNumState('3.');
        setTitleState('검증된 수술법, 검증된 의료진.');
        setTextState(
          '다년간의 풍부한 경험의 의료진과 각 치료법의 표준이 되는 수술법을 활용하여 반려동물에 알맞은 검증된 수술법으로 외과를 진행합니다.'
        );
        break;
      case 4:
        setNumState('4.');
        setTitleState('24시간 수술 후 입원시스템.');
        setTextState(
          '수술 후 안전하고 빠른 회복을 위해 24시간 입원시스템을 구축하여 조금더 세심하게 밤낮으로 반려동물을 보살피고 있습니다. 중환자나 노령이어도 옆에 케어해줄 의료진이 있어 조금이라도 불편함이 없게 신경쓰기 위해 노력하고 있습니다.'
        );
        break;
      case 5:
        setNumState('5.');
        setTitleState('수술 시작부터 추후 통증 관리에 최선을 다합니다.');
        setTextState(
          '반려동물의 통증은 말로 호소하지 않기에 간과되기 쉽습니다.환자의 통증에 세심한 배려를 쏟고 있으며, 각 수술이 유발할 수 있는 통증의 정도와, 각각의 환자의 성격에서 기인되는 통증의 정도를 고려해 통증 관리에 부족함이 없도록 진통처치 시스템을 구축해 적용하고 있습니다.아프다고 말해야 아픈줄 안다는 생각을 말을 하지 못하는 우리 반려동물들을 보면서 한번더 생각하겠습니다'
        );
        break;
      case 6:
        setNumState('6.');
        setTitleState('퇴원후 관리 . 재발 방지 시스템.');
        setTextState(
          '수술 후 재발이 없고 치료가 끝나는 질환들이 있는가 하면, 재발이나 전이, 2차 수술이 발생할 수 있는 수술들이 있습니다. 저희 동물병원은 수술이 끝이 아니라 수술이 관리의 시작이라는 생각으로 반려동물의 술후관리를 위해 힘쓰고 있습니다.'
        );
        break;
    }
  };

  return (
    <Wrap>
      <ClinicNav
        url='/image/sub-main2.jpg'
        title='동물 수술 센터'
        categoryName='surgery'
      />
      <SurgeryWrap>
        <InfoText>
          {'<'} 이미지를 클릭해 주세요 {'>'}
        </InfoText>
        <Contents1Wrap>
          <TextWrap>
            <Number>{NumState}</Number>
            <Title>{TitleState}</Title>
            <Text>{TextState}</Text>
          </TextWrap>
          <ImgWrap>
            {NumState === '1.' ? (
              <Img src='/image/surgery1.jpg' />
            ) : (
              <Img src='/image/surgery1-b.jpg' onClick={() => handleBtn(1)} />
            )}

            {NumState === '2.' ? (
              <Img src='/image/surgery2.jpg' />
            ) : (
              <Img src='/image/surgery2-b.jpg' onClick={() => handleBtn(2)} />
            )}

            {NumState === '3.' ? (
              <Img src='/image/surgery3.jpg' />
            ) : (
              <Img src='/image/surgery3-b.jpg' onClick={() => handleBtn(3)} />
            )}

            {NumState === '4.' ? (
              <Img src='/image/surgery4.jpg' />
            ) : (
              <Img src='/image/surgery4-b.jpg' onClick={() => handleBtn(4)} />
            )}

            {NumState === '5.' ? (
              <Img src='/image/surgery5.jpg' />
            ) : (
              <Img src='/image/surgery5-b.jpg' onClick={() => handleBtn(5)} />
            )}

            {NumState === '6.' ? (
              <Img src='/image/surgery6.jpg' />
            ) : (
              <Img src='/image/surgery6-b.jpg' onClick={() => handleBtn(6)} />
            )}
          </ImgWrap>
        </Contents1Wrap>
        <SubTitle>외과 클리닉 진료과목</SubTitle>
        <Contents2Wrap>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon1.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>소화기계 수술</IconTitle>
              <IconText lineHeight>
                식도종양
                <br /> 위장내이물제거
                <br /> 위염전 장중첩
                <br /> 장문합 탈장수술
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon2.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>간담도계 수술</IconTitle>
              <IconText lineHeight>
                간엽절제
                <br /> 담낭절제
                <br /> 췌장절제
                <br /> 간문맥단락수술
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon3.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>비뇨기계 수술</IconTitle>
              <IconText>
                신장절제 방괄결석수술
                <br /> 신장결석수술
                <br /> 요도결석수술
                <br /> 요도루성형술
                <br /> 요관절개술
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon4.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>생식기계 수술</IconTitle>
              <IconText lineHeight>
                중성화수술
                <br /> 자궁축농증 자궁종양
                <br /> 난소종양 제왕절개
                <br /> 질종양수술
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon5.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>심혈관계 수술</IconTitle>
              <IconText>
                심낭막절제술
                <br /> 흉관결찰술 종격동수술
                <br /> 심낭횡경막탈장수술
                <br /> 우측대동맥궁잔종증
                <br /> (PRAA)
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon6.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>일반외과 수술</IconTitle>
              <IconText>
                비장적출 유선종양수술
                <br /> 부신적출술 비강확장술
                <br /> 피부종양제거술
                <br /> 성형수술(안검,비강,주름)
                <br /> 연구개노장교정술
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon7.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>정형외과 수술</IconTitle>
              <IconText>
                전 범위 골절수술
                <br /> 관절 탈구교정술
                <br /> 고관절수술
                <br /> 골반교정술
                <br /> 절골술 척추질환수술
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon8.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>
                슬개골
                <br /> 십자인대 수술
              </IconTitle>
              <IconText>
                전 기수 슬개골탈구 수
                <br /> 십자인대 수술
                <br /> (인공인대, TPLO, CTWO)
              </IconText>
            </IconTextWrap>
          </Box>
          <Box>
            <IconBox>
              <Icon src='/image/surgery-icon9.png' />
            </IconBox>
            <IconTextWrap>
              <IconTitle>치과/안과 수술</IconTitle>
              <IconText>
                치근농양수술 발치수술
                <br /> 레진 신경치료
                <br /> 고양이전발치
                <br /> 안구적출술 각막봉합술
                <br /> 안검플랩술 안검종양수술
              </IconText>
            </IconTextWrap>
          </Box>
        </Contents2Wrap>
      </SurgeryWrap>
    </Wrap>
  );
};

const SurgeryWrap = styled.div`
  width: 1092px;
  height: auto;
  margin: 0 auto;
  margin-top: 15vh;

  @media screen and (max-width: 1700px) {
    width: 940px;
  }

  @media screen and (max-width: 1024px) {
    width: 670px;
    margin-top: 13vh;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    margin-top: 7vh;
  }
`;

const InfoText = styled.div`
  font-size: 14px;
  color: #666666;
  font-weight: 400;
  margin-bottom: 15px;
`;

const Contents1Wrap = styled.div`
  width: 1092px;
  height: 440px;
  display: grid;
  grid-template-columns: 40% 60%;
  margin-bottom: 10vh;

  @media screen and (max-width: 1700px) {
    width: 940px;
    height: 370px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    width: 670px;
    height: auto;
    margin-bottom: 8vh;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a48a79;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 47px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 47px;
  }

  @media screen and (max-width: 700px) {
    padding: 25px 30px;
  }
`;

const Number = styled.div`
  font-size: 84px;
  font-weight: 800;
  color: white;
  margin-bottom: 25px;

  @media screen and (max-width: 1700px) {
    margin-bottom: 10px;
    font-size: 70px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    font-size: 60px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 12px;
  color: white;

  @media screen and (max-width: 1700px) {
    font-size: 21px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 200;
  color: white;
  line-height: 23px;

  @media screen and (max-width: 1700px) {
    font-size: 13px;
    line-height: 21px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  height: auto;

  @media screen and (max-width: 700px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }
`;
const Img = styled.img`
  cursor: pointer;

  @media screen and (max-width: 1700px) {
    width: 190px;
  }

  @media screen and (max-width: 1024px) {
    width: 224px;
  }

  @media screen and (max-width: 700px) {
    width: 160px;
  }
`;

const SubTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 30px;
    font-weight: 800;
  }

  @media screen and (max-width: 700px) {
    font-size: 25px;
    margin-bottom: 25px;
  }
`;

const Contents2Wrap = styled.div`
  width: 1092px;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 20px;
  margin-bottom: 10vh;

  @media screen and (max-width: 1700px) {
    width: 940px;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 50% 50%;
    width: 670px;
    margin-bottom: 8vh;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    width: 320px;
  }
`;

const Box = styled.div`
  background-color: #ebebeb;
  border-radius: 20px;
  width: 350px;
  height: 212px;
  padding: 27px;
  box-sizing: border-box;
  display: flex;

  @media screen and (max-width: 1700px) {
    width: 300px;
    height: 180px;
    padding: 18px;
  }

  @media screen and (max-width: 1024px) {
    width: 325px;
    height: 190px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const IconBox = styled.div`
  width: 131px;
  height: 153px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 1700px) {
    width: 117px;
    height: 143px;
    margin: auto 0;
    margin-right: 15px;
  }

  @media screen and (max-width: 1024px) {
    width: 131px;
    height: 153px;
    margin-right: 20px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const IconTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;

  @media screen and (max-width: 1700px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
  }
`;

const IconTextWrap = styled.div`
  display: block;
  padding: 13px 0;
  box-sizing: border-box;
`;

const IconText = styled.div`
  font-size: 14px;
  line-height: ${props => (props.lineHeight ? '25px' : '20px')};

  @media screen and (max-width: 1700px) {
    font-size: 13px;
    line-height: ${props => (props.lineHeight ? '23px' : '18px')};
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
  }
`;

const Icon = styled.img``;

export default Surgery;
