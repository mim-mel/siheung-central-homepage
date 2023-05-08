import ClinicNav from '@/components/subpage/ClinicNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';

const Vaccination = () => {
  return (
    <Wrap>
      <ClinicNav
        url='/image/sub-main2.jpg'
        title='예방의학 클리닉'
        categoryName='vaccination'
      />
      <VacWrap>
        <Title>접종이란 무엇일까요?</Title>
        <Contents1Wrap>
          <Content1Text>
            면역세포들에게 미리 독성을 제거한 병원체를 겪어보게 해 그 질환에
            대응하게 하는 힘, 즉 항체를 생성해 주어 다음에 그 병원체가 감염되지
            않게 하는 중요한 예방보건의 수단입니다. 감염병을 막는 가장
            효과적이고 안전한 일입니다. 저희 센트럴 동물의료센터에서는 아래와
            같은 예방의학 시스템을 운영하고 있습니다.
          </Content1Text>
        </Contents1Wrap>
        <Title>반려동물의 예방접종에는 어떤게 있을까요?</Title>
        <SubTitle>- 예방접종 및 관리 프로그램 -</SubTitle>
        <Contents2Wrap>
          <Contents2Box>
            <Contents2BoxTitle>-강아지-</Contents2BoxTitle>
            <Contents2Table src='/image/vaccination-table1.jpg' />
            <CheckTextWrap>
              <CheckIcon src='/image/vaccination-check-icon.png' />
              <CheckText>
                종합예방백신 : 홍역, 간염, 파보장염, 파라인플루엔자 등 합제의
                백신
              </CheckText>
            </CheckTextWrap>
            <CheckTextWrap>
              <CheckIcon src='/image/vaccination-check-icon.png' />
              <CheckText>코로나 장염 : 코로나 바이러스(장염) 백신</CheckText>
            </CheckTextWrap>
            <CheckTextWrap>
              <CheckIcon src='/image/vaccination-check-icon.png' />
              <CheckText>
                전염성 기관지염 : 보데텔라 브론키셉티카 세균에 대한
                기침/호흡기염증 예방
              </CheckText>
            </CheckTextWrap>
            <CheckTextWrap>
              <CheckIcon src='/image/vaccination-check-icon.png' />
              <CheckText>
                인플루엔자 : 개 인플루엔자 바이러스 (H3N2)에 의한 개의 호흡기
                감염예방 및 경감
              </CheckText>
            </CheckTextWrap>
            <CheckTextWrap>
              <CheckIcon src='/image/vaccination-check-icon.png' />
              <CheckText>광견병 : 개 Rabies 바이러스에 대한 예방백신</CheckText>
            </CheckTextWrap>
            <CheckBottemText>
              * 항체기 검사 : 항체가 충분히 증가하지 않은 경우, 추가 접종이
              필요할 수 있습니다.
              <br />
              * 매년 보강접종이 이루어집니다. 연 1회 보강접종
              <br />
              * 심장사상충 및 외부기생충은 월 1회 예방이 필요합니다.
              <br />
            </CheckBottemText>
          </Contents2Box>
          <Contents2Box>
            <Contents2BoxTitle>-고양이-</Contents2BoxTitle>
            <Contents2Table src='/image/vaccination-table2.jpg' />
            <CheckTextWrap>
              <CheckIcon src='/image/vaccination-check-icon.png' />
              <CheckText>
                종합예방백신 : 허피스바이러스, 칼리스바이러스, 범백혈구감소증,
                클라미디아 등 합제의 백신
              </CheckText>
            </CheckTextWrap>
            <CheckTextWrap>
              <CheckIcon src='/image/vaccination-check-icon.png' />
              <CheckText>
                광견병 예방백신 : Rabies 바이러스이 대한 예방백신으로 고양이에
                적합한 백신을 사용합니다.
              </CheckText>
            </CheckTextWrap>
            <CheckBottemText>
              * 항체기 검사 : 항체가 충분히 증가하지 않은 경우, 추가 접종이
              필요할 수 있습니다.
              <br />
              * 매년 보강접종이 이루어집니다. 연 1회 보강접종
              <br />
              * 심장사상충 및 외부기생충은 월 1회 예방이 필요합니다.
              <br />
            </CheckBottemText>
          </Contents2Box>
        </Contents2Wrap>
        <Title>반려동물이 주의해야하는 기생충 종류와 예방방법</Title>
        <Contents3Wrap>
          <Contents3Text1>
            가장 쉽게 예방할 수 있는 질환이지만 놓치게 되면 치명적일 수
            있습니다. 예방할 수 있는 방법은 무엇이있을까요?
          </Contents3Text1>
          <Contents3Box marginBottom>
            <Contents3TextWrap>
              <Contents3Button>내부기생충</Contents3Button>
              <Contents3ButtonText>
                장기적인 구충을 통해 예방 및 치료할 수 있습니다. 회충, 촌충,
                십이지장충 같은 기생충은 감염 시 구토, 설사, 식욕부진 등의
                증상을 일으키며 심하게는 폐사하는 경우도 있습니다.
              </Contents3ButtonText>
            </Contents3TextWrap>
            <Contents3ImageWrap>
              <Contents3Img src='/image/vaccination-img1.jpg' />
              <Contents3Img src='/image/vaccination-img2.jpg' />
            </Contents3ImageWrap>
          </Contents3Box>
          <Contents3Box>
            <Contents3TextWrap>
              <Contents3Button>심장사상충</Contents3Button>
              <Contents3ButtonText>
                심장사상충은 모기에 의해서 전염되는 기생충 질환으로 심장에
                기생하며, 심하게 감염 될 경우에는 호흡곤란, 복수 심장마비 등이
                나타날 수 있습니다. 생명까지 위험할 수 있는 질환이기 때문에
                정기적인 예방이 필수입니다. 또한 이미 감염된 경우, 예방약은
                무효하기 때문에 예방 전 검사가 필수입니다.
              </Contents3ButtonText>
            </Contents3TextWrap>
            <Contents3ImageWrap>
              <Contents3Img src='/image/vaccination-img3.jpg' />
              <Contents3Img src='/image/vaccination-img4.jpg' />
            </Contents3ImageWrap>
          </Contents3Box>
          <LineTextWrap>
            <Line />
            <LineText>심장 사상충 감염경로</LineText>
            <Line />
          </LineTextWrap>
          <Contents3RoundWrap>
            <Contents3RoundBox>
              <Contents3Round>
                <Contents3Icon src='/image/vaccination-icon1.png' />
              </Contents3Round>
              <Contents3IconText>
                심장사상충에 감염된 개를
                <br /> 모기가 흡혈합니다.
              </Contents3IconText>
            </Contents3RoundBox>

            <Contents3RoundBox>
              <Contents3Round>
                <Contents3Icon src='/image/vaccination-icon2.png' />
              </Contents3Round>
              <Contents3IconText>
                모기를 통해 유충이
                <br /> 같이 이동합니다.
              </Contents3IconText>
            </Contents3RoundBox>

            <Contents3RoundBox>
              <Contents3Round>
                <Contents3Icon src='/image/vaccination-icon3.png' />
              </Contents3Round>
              <Contents3IconText>
                모기가 개, 고양이에게
                <br /> 유충을 전파합니다.
              </Contents3IconText>
            </Contents3RoundBox>

            <Contents3RoundBox>
              <Contents3Round>
                <Contents3Icon src='/image/vaccination-icon4.png' />
              </Contents3Round>
              <Contents3IconText lineHight>
                심장사상충 예방을 하지 않은 동물들의 경우 혈관에서 유충이
                번식하여 심장, 폐 등의 장기에 기생을 하며 사망에 이르게 합니다.
              </Contents3IconText>
            </Contents3RoundBox>
          </Contents3RoundWrap>
        </Contents3Wrap>
        <Title>중성화 수술</Title>
        <Contents4Wrap>
          <Contents4Title>안전한 마취는 수술의 기본입니다.</Contents4Title>
          <Contents4Text>
            오토클레이브, EO가스멸균기 등의 정식 멸균과정을 거친 수술도구만을
            사용합니다.
            <br /> 위생과 멸균을 철저히 유지함을 기본으로 하는 것은 외과수술의
            포기할 수 없는 철학입니다.
          </Contents4Text>
        </Contents4Wrap>
        <SubTitle>- 중성화수술이 필요한 이유 -</SubTitle>
        <Contents5Wrap>
          <Contents5Img1 src='/image/vaccination-img5.jpg' />
          <Contents5Img2 src='/image/vaccination-table3.jpg' />
        </Contents5Wrap>
        <SubTitle>- 중성화수술 과정 -</SubTitle>
        <Contents6Wrap>
          <Contents6Box>
            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>1</NumRound>
                <Contents6Title>수술 스케줄 예약</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>- 전화/방문예약 가능</Contents6Text>
            </Contents6TextBox>

            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>2</NumRound>
                <Contents6Title>전일밤</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>- 12시간 전 금식, 흥분은 금물</Contents6Text>
            </Contents6TextBox>

            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>3</NumRound>
                <Contents6Title>당일오전</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>- 병원도착 및 상담</Contents6Text>
              <Contents6Text>
                - 마취/수술 동의서 작성(혈액검사 등 수술전 검사 진행)
              </Contents6Text>
            </Contents6TextBox>

            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>4</NumRound>
                <Contents6Title>마취 및 수술</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>
                - 환자의 위험도에 따른 마취모니터링 시스템
              </Contents6Text>
              <Contents6Text>
                - 고사양의 마취기계와 수술장비를 이용한 균일하고 안정적인 마취
              </Contents6Text>
              <Contents6Text>
                - 수술 전후 긴장을 늦추지 않고 세밀한 바이탈 체크
              </Contents6Text>
            </Contents6TextBox>
          </Contents6Box>
          <LongLine />
          <Contents6Box>
            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>5</NumRound>
                <Contents6Title>마취 후 처치</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>
                - 환자가 부드럽게 적응하고 깨어나도록 전문간호시스템으로
                세밀하게 케어합니다.
              </Contents6Text>
              <Contents6Text>
                - 마취를 하면 자연적으로 혈압 체온 등 바이탈이 떨어지게 됩니다.
                이로 인한 보이지 않는 장기 손상도 미래의 건강을 위해 최소화
                되도록 수액/입원처치를 권장하고 있습니다.
              </Contents6Text>
              <Contents6Text>
                - 마취 후 3~6시간의 필수 모니터링이 필요합니다.
              </Contents6Text>
            </Contents6TextBox>

            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>6</NumRound>
                <Contents6Title>퇴원 후</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>
                - 수술 후 넥카라를 착용하여 수술부위가 오염되지 않게 관리합니다.
              </Contents6Text>
            </Contents6TextBox>

            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>7</NumRound>
                <Contents6Title>수술 후 후처치</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>
                - 수술 부위 체크/소독 차 병원에 방문해 주기시 바랍니다.
              </Contents6Text>
            </Contents6TextBox>

            <Contents6TextBox>
              <Contents6TitleWrap>
                <NumRound>8</NumRound>
                <Contents6Title>실밥제거 (퇴원 후 7-10일)</Contents6Title>
              </Contents6TitleWrap>
              <Contents6Text>- 남은 실밥을 제거해주세요.</Contents6Text>
              <Contents6Text>
                - 실밥제거한 부분을 며칠 핥을 수 있습니다.
              </Contents6Text>
              <Contents6Text>
                - 핥는다면 넥카라는 조금 더 착용해 주셔야 합니다.
              </Contents6Text>
            </Contents6TextBox>
          </Contents6Box>
        </Contents6Wrap>
        <SubTitle>- 중성화 수술 시 함께 신청할 수 있어요 -</SubTitle>
        <Contents7Wrap1>
          <Contents7Box>
            <BlueBack>수술 전 조금 더 안전하게</BlueBack>
            <Contents7IconWrap1>
              <Contents7IconBlock>
                <Contents7IconSqere>
                  <Contents7Img src='/image/vaccination-icon5.png' />
                </Contents7IconSqere>
                <Contents7IconText>건강검진</Contents7IconText>
              </Contents7IconBlock>
              <Contents7IconBlock>
                <Contents7IconSqere>
                  <Contents7Img src='/image/vaccination-icon6.png' />
                </Contents7IconSqere>
                <Contents7IconText>pro BNP</Contents7IconText>
              </Contents7IconBlock>
            </Contents7IconWrap1>
          </Contents7Box>

          <Contents7Box>
            <BlueBack>수술 전 조금 더 안전하게</BlueBack>
            <Contents7IconBlock>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon7.png' />
              </Contents7IconSqere>
              <Contents7IconText>무통수액</Contents7IconText>
            </Contents7IconBlock>
          </Contents7Box>
        </Contents7Wrap1>

        <Contents7Wrap2>
          <BlueBack>꼭 해야 할 것들을 이번 기회에 한번에</BlueBack>
          <Contents7IconWrap2>
            <Contents7IconBlock>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon8.png' />
              </Contents7IconSqere>
              <Contents7IconText>탈장교정</Contents7IconText>
            </Contents7IconBlock>

            <Contents7IconBlock>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon9.png' />
              </Contents7IconSqere>
              <Contents7IconText>잠복고환 교정</Contents7IconText>
            </Contents7IconBlock>

            <Contents7IconBlock>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon10.png' />
              </Contents7IconSqere>
              <Contents7IconText>스케일링</Contents7IconText>
            </Contents7IconBlock>

            <Contents7IconBlock>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon11.png' />
              </Contents7IconSqere>
              <Contents7IconText>유치발치</Contents7IconText>
            </Contents7IconBlock>

            <Contents7IconBlock top>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon12.png' />
              </Contents7IconSqere>
              <Contents7IconText>
                코골이 등 단두종
                <br />
                증후군 개선술
              </Contents7IconText>
            </Contents7IconBlock>

            <Contents7IconBlock>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon13.png' />
              </Contents7IconSqere>
              <Contents7IconText>마이크로칩</Contents7IconText>
            </Contents7IconBlock>
          </Contents7IconWrap2>
        </Contents7Wrap2>

        <Contents7Wrap1>
          <Contents7Box>
            <BlueBack>수술 전 조금 더 안전하게</BlueBack>
            <Contents7IconBlock>
              <Contents7IconSqere>
                <Contents7Img src='/image/vaccination-icon14.png' />
              </Contents7IconSqere>
              <Contents7IconText>건강검진</Contents7IconText>
            </Contents7IconBlock>
          </Contents7Box>

          <Contents7Box>
            <BlueBack>수술 전 조금 더 안전하게</BlueBack>
            <Contents7IconWrap3>
              <Contents7IconBlock margin>
                <Contents7IconSqere>
                  <Contents7Img src='/image/vaccination-icon15.png' />
                </Contents7IconSqere>
                <Contents7IconText>넥카라</Contents7IconText>
              </Contents7IconBlock>

              <Contents7IconBlock margin>
                <Contents7IconSqere>
                  <Contents7Img src='/image/vaccination-icon16.png' />
                </Contents7IconSqere>
                <Contents7IconText>지속형 항생제 주사</Contents7IconText>
              </Contents7IconBlock>

              <Contents7IconBlock margin>
                <Contents7IconSqere>
                  <Contents7Img src='/image/vaccination-icon17.png' />
                </Contents7IconSqere>
                <Contents7IconText>처방식</Contents7IconText>
              </Contents7IconBlock>
            </Contents7IconWrap3>
          </Contents7Box>
        </Contents7Wrap1>
      </VacWrap>
    </Wrap>
  );
};

const VacWrap = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 15vh;
  margin-bottom: 10vh;

  @media screen and (max-width: 1700px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 670px;
    margin-top: 11vh;
    margin-bottom: 5vh;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    margin-top: 7vh;
    margin-bottom: 3vh;
  }
`;

const Title = styled.div`
  font-size: 33px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 40px;

  @media screen and (max-width: 700px) {
    font-size: 23px;
    line-height: 35px;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

const Contents1Wrap = styled.div`
  width: 100%;
  padding: 38px 80px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  box-sizing: border-box;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    padding: 30px 50px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 700px) {
    padding: 25px 30px;
    margin-bottom: 50px;
  }
`;

const Content1Text = styled.div`
  font-size: 19px;
  color: #666666;
  line-height: 33px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  margin-top: 60px;
  margin-bottom: 30px;

  @media screen and (max-width: 700px) {
    margin-top: 30px;
    font-size: 18px;
  }
`;

const Contents2Wrap = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 50px;
  }
`;

const Contents2Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Contents2BoxTitle = styled.div`
  font-size: 17px;
  text-align: center;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

const Contents2Table = styled.img`
  margin-bottom: 20px;

  @media screen and (max-width: 1700px) {
    width: 450px;
  }

  @media screen and (max-width: 1024px) {
    width: 550px;
  }

  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;

const CheckTextWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 93%;

  @media screen and (max-width: 700px) {
    width: 85%;
  }
`;

const CheckIcon = styled.img`
  margin-right: 7px;
  position: relative;
  top: -1px;
  width: 17px;
  height: 17px;
`;

const CheckText = styled.div`
  font-size: 13px;
  letter-spacing: -0.2px;

  @media screen and (max-width: 1700px) {
    font-size: 12px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    font-size: 11px;
  }
`;

const CheckBottemText = styled.div`
  margin-top: 13px;
  font-size: 13px;
  width: 93%;
  line-height: 23px;
  margin-bottom: 30px;

  @media screen and (max-width: 1700px) {
    font-size: 12px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 700px) {
    width: 85%;
    font-size: 11px;
  }
`;

const Contents3Wrap = styled.div`
  width: 100%;
  padding: 52px 100px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  box-sizing: border-box;
  margin-bottom: 100px;

  @media screen and (max-width: 700px) {
    padding: 30px 25px;
    margin-bottom: 50px;
  }
`;

const Contents3Text1 = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
  margin-bottom: 47px;

  @media screen and (max-width: 1700px) {
    font-size: 18px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 19px;
    line-height: 28px;
  }

  @media screen and (max-width: 700px) {
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 20px;
  }
`;

const Contents3Box = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  margin-bottom: ${props => (props.marginBottom ? '20px' : '50px')};
  justify-content: space-between;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const Contents3TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Contents3Button = styled.div`
  width: 273px;
  height: 43px;
  border-radius: 10px;
  background-color: #a48a79;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 20px;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    margin: 0 auto 20px auto;
  }

  @media screen and (max-width: 700px) {
    width: 200px;
  }
`;

const Contents3ButtonText = styled.div`
  font-size: 16px;
  line-height: 25px;

  @media screen and (max-width: 1700px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

const Contents3ImageWrap = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
`;

const Contents3Img = styled.img`
  border-radius: 20px;

  @media screen and (max-width: 1700px) {
    width: 180px;
  }

  @media screen and (max-width: 1024px) {
    width: 220px;
  }

  @media screen and (max-width: 700px) {
    width: 130px;
  }
`;

const LineTextWrap = styled.div`
  display: grid;
  grid-template-columns: 36% 24% 36%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 15% 65% 15%;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #a48a79;
`;

const LineText = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #a48a79;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const Contents3RoundWrap = styled.div`
  width: 93%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
    width: 93%;
  }

  @media screen and (max-width: 700px) {
    grid-gap: 10px;
  }
`;

const Contents3RoundBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 240px;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 200px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const Contents3Round = styled.div`
  border: 7px solid #a48a79;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 100px;
  margin-bottom: 15px;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
    border: 5px solid #a48a79;
    margin-bottom: 0;
  }

  @media screen and (max-width: 700px) {
  }
`;

const Contents3Icon = styled.img`
  @media screen and (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 700px) {
  }
`;

const Contents3IconText = styled.div`
  position: absolute;
  font-size: 15px;
  text-align: center;
  width: 190px;
  line-height: ${props => (props.lineHight ? '20px' : '26px')};
  top: 170px;

  @media screen and (max-width: 1024px) {
    top: 120px;
  }

  @media screen and (max-width: 700px) {
    font-size: 11px;
    width: 140px;
    line-height: ${props => (props.lineHight ? '16px' : '22px')};
  }
`;

const Contents4Wrap = styled.div`
  width: 100%;
  padding: 38px 80px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  box-sizing: border-box;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    padding: 38px 50px;
  }

  @media screen and (max-width: 700px) {
    padding: 25px 30px;
    margin-bottom: 40px;
  }
`;

const Contents4Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    font-size: 18px;
    letter-spacing: -0.5px;
    text-align: center;
  }
`;

const Contents4Text = styled.div`
  font-size: 19px;
  line-height: 30px;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 22px;
  }
`;

const Contents5Wrap = styled.div`
  width: 100%;
  padding: 38px 50px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  box-sizing: border-box;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 35% 55%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }

  @media screen and (max-width: 700px) {
    padding: 20px 10px;
    margin-bottom: 40px;
  }
`;

const Contents5Img1 = styled.img`
  position: relative;
  top: 2px;
  border-radius: 20px;

  @media screen and (max-width: 1700px) {
    width: 360px;
  }

  @media screen and (max-width: 1024px) {
    width: 450px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    width: 250px;
    margin-bottom: 15px;
  }
`;

const Contents5Img2 = styled.img`
  @media screen and (max-width: 1700px) {
    width: 500px;
  }

  @media screen and (max-width: 1024px) {
    width: 580px;
  }

  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;

const Contents6Wrap = styled.div`
  width: 100%;
  padding: 60px 60px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  box-sizing: border-box;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 46% 1% 46%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    padding: 60px 35px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    padding: 30px 25px;
  }
`;

const LongLine = styled.div`
  height: 100%;
  width: 0.1px;
  background-color: rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Contents6Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

const Contents6TextBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const Contents6TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NumRound = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 3px solid #42b4be;
  margin-right: 10px;
  color: #42b4be;
  font-size: 19px;
  font-weight: 800;

  @media screen and (max-width: 1700px) {
    width: 23px;
    height: 23px;
  }

  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
    font-size: 16px;
    margin-right: 6px;
  }

  @media screen and (max-width: 700px) {
    width: 16px;
    height: 16px;
    font-size: 13px;
    margin-right: 6px;
    border: 2px solid #42b4be;
  }
`;

const Contents6Title = styled.div`
  font-size: 21px;
  font-weight: 700;
  color: #42b4be;

  @media screen and (max-width: 1700px) {
    font-size: 20px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

const Contents6Text = styled.div`
  font-size: 16px;
  opacity: 0.9;
  margin: 4px 5px 4px 0;
  line-height: 24px;

  @media screen and (max-width: 1700px) {
    font-size: 15px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 700px) {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.2px;
  }
`;

const Contents7Wrap1 = styled.div`
  width: 100%;
  margin-bottom: 35px;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    grid-gap: 25px;
    margin-bottom: 25px;
  }
`;

const Contents7Wrap2 = styled.div`
  width: 100%;
  margin-bottom: 35px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    margin-bottom: 25px;
  }
`;

const Contents7Box = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlueBack = styled.div`
  width: 100%;
  background-color: #42b4be;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  margin-bottom: 35px;
  font-size: 22px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 17px;
  }
`;

const Contents7IconWrap1 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
`;

const Contents7IconWrap2 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: 30% 30% 30%;
  }
`;

const Contents7IconWrap3 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  @media screen and (max-width: 700px) {
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }
`;

const Contents7IconBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${props => (props.margin ? '0 20px' : '0 30px')};
  position: relative;
  top: ${props => (props.top ? '12px' : '')};

  @media screen and (max-width: 1700px) {
    margin: ${props => (props.margin ? '0 15px' : '0 20px')};
  }

  @media screen and (max-width: 1024px) {
    margin: ${props => (props.margin ? '0px' : '0 6px')};
  }

  @media screen and (max-width: 700px) {
    top: ${props => (props.top ? '7px' : '')};
  }
`;

const Contents7IconSqere = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 10px;
  border: 5px solid #42b4be;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 15px;

  @media screen and (max-width: 1024px) {
    width: 75px;
    height: 75px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

const Contents7IconText = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  position: relative;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  @media screen and (max-width: 700px) {
    font-size: 12px;
    font-weight: 600;
  }
`;

const Contents7Img = styled.img`
  @media screen and (max-width: 1024px) {
    width: 50px;
  }

  @media screen and (max-width: 700px) {
  }
`;

export default Vaccination;
