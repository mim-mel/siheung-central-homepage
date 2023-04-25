import styled from 'styled-components';
import { Wrap } from './about';
import IntroduceNav from '@/components/subpage/IntroduceNav';

const Time = () => {
  return (
    <Wrap>
      <IntroduceNav
        url='/image/sub-main1.jpg'
        title='진료시간 안내'
        categoryName='time'
      />
      <TimeWrap>
        <TitleWrap>
          <Title>연중무휴 24시 동물병원</Title>
          <TitleWrapText marginBottom>
            시흥 24시 센트럴 동물의료센터는 1년 365일 항상 병원에 의료진이
            있으며 응급진료가 가능한 동물병원입니다.
          </TitleWrapText>
          <TitleWrapText>
            단 병원의 시스템상 토요일 밤, 일요일 밤 심야응급시간에는 입원환자
            집중관리를 위해 외래응급진료는 휴진하고 있습니다.
          </TitleWrapText>
        </TitleWrap>
        <ContentsWrap paddingTop>
          <ContentsTitle>일반 진료시간</ContentsTitle>
          <ContentsTextWrap>
            <ContentsTextBlock>
              <ContentsTextBlock2>
                <ContentsButton>평일</ContentsButton>
                <ContentsText top>
                  09:00-24:00 ( 마감 30분전 접수마감 )
                </ContentsText>
              </ContentsTextBlock2>

              <ContentsTextBlock2>
                <ContentsButton>주말</ContentsButton>
                <ContentsText top>
                  09:00-22:00 ( 마감 30분전 접수마감 )
                </ContentsText>
              </ContentsTextBlock2>
            </ContentsTextBlock>
          </ContentsTextWrap>
        </ContentsWrap>
        <ContentsWrap>
          <ContentsTitle>일반 진료시간</ContentsTitle>
          <ContentsTextWrap>
            <ContentsTextBlock>
              <ContentsTextBlock2>
                <ContentsIcon src='/image/member-time-icon1.png' />
                <ContentsText top withSubText>
                  00:00-09:00 ( 응급진료비 별도 청구 )
                  <SubText>( 토,일 밤 외래응급진료 휴진 )</SubText>
                </ContentsText>
              </ContentsTextBlock2>
            </ContentsTextBlock>
          </ContentsTextWrap>
        </ContentsWrap>
        <ContentsWrap>
          <ContentsTitle>입원 간호케어 시스템</ContentsTitle>
          <ContentsTextWrap>
            <ContentsTextBlock>
              <ContentsTextBlock2>
                <ContentsIcon src='/image/member-time-icon2.png' />
                <ContentsText top>
                  365일 24시간 간호 중점관리시스템
                </ContentsText>
              </ContentsTextBlock2>
            </ContentsTextBlock>
          </ContentsTextWrap>
        </ContentsWrap>
        <ContentsWrap>
          <ContentsTitle>예약우선 진료제 시행</ContentsTitle>
          <ContentsTextWrap>
            <ContentsTextBlock>
              <ContentsTextBlock2>
                <ContentsIcon src='/image/time-icon3.png' />
                <ContentsText top>
                  진료는 예약없이도 가능하나, 대기시간이 길어질 수 있음을 양해
                  바랍니다.
                </ContentsText>
              </ContentsTextBlock2>

              <ContentsTextBlock2>
                <ContentsIcon src='/image/time-icon3.png' />
                <ContentsText top>
                  예약을 하더라도 응급처치 환자를 우선으로 함을 양해 바랍니다.
                </ContentsText>
              </ContentsTextBlock2>

              <ContentsTextBlock2>
                <ContentsIcon src='/image/time-icon3.png' />
                <ContentsText top>
                  응급진료/수술 - 예약진료 - 비예약진료 순
                </ContentsText>
              </ContentsTextBlock2>
            </ContentsTextBlock>
          </ContentsTextWrap>
        </ContentsWrap>
        <ContentsWrap>
          <ContentsTitle>응급실 내원전화</ContentsTitle>
          <ContentsTextWrap>
            <ContentsTextBlock>
              <ContentsTextBlock2>
                <ContentsIcon src='/image/time-icon4.png' />
                <ContentsText top>
                  심야응급 시간에는 미리 전화 후 내원하시면 조금 더 빠른 대처가
                  가능할 수 있습니다.
                </ContentsText>
              </ContentsTextBlock2>
            </ContentsTextBlock>
          </ContentsTextWrap>
        </ContentsWrap>
      </TimeWrap>
    </Wrap>
  );
};

const TimeWrap = styled.div`
  width: 807px;
  height: auto;
  margin: 13vh auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  @media screen and (max-width: 1024px) {
    width: 85%;
  }

  @media screen and (max-width: 700px) {
    margin: 4vh auto 8vh auto;
  }
`;

const TitleWrap = styled.div`
  padding: 44px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #816459;

  @media screen and (max-width: 1024px) {
    padding: 35px 0;
  }

  @media screen and (max-width: 700px) {
    padding: 30px 0;
  }
`;

const Title = styled.div`
  font-size: 33px;
  color: white;
  font-weight: 500;
  margin-bottom: 2.5vh;

  @media screen and (max-width: 1024px) {
    margin-bottom: 1.5vh;
  }

  @media screen and (max-width: 700px) {
    font-size: 23px;
  }
`;

const TitleWrapText = styled.div`
  font-size: 14px;
  font-weight: 200;
  color: white;
  margin-bottom: ${props => (props.marginBottom ? '10px' : '')};

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 700px) {
    font-size: 11px;
    width: 85%;
    line-height: 19px;
  }
`;

const ContentsWrap = styled.div`
  padding: 10px 35px;
  width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: ${props => (props.paddingTop ? '45px' : '25px')};

  @media screen and (max-width: 1024px) {
    grid-template-columns: 35% 60%;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 100%;
    padding: 10px 10px;
    padding-top: ${props => (props.paddingTop ? '35px' : '25px')};
  }
`;

const ContentsTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #816459;

  @media screen and (max-width: 1024px) {
    font-size: 21px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

const ContentsTextWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContentsIcon = styled.img`
  margin-right: 15px;
  margin-left: 5px;
  margin-top: 7px;

  @media screen and (max-width: 700px) {
    margin-left: 0;
    margin-top: 2px;
    margin-right: 8px;
  }
`;

const ContentsButton = styled.div`
  padding: 7px 12px;
  box-sizing: border-box;
  background-color: #a48a79;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  margin-right: 15px;

  @media screen and (max-width: 1024px) {
    width: 40px;
    padding: 5px 7px;
    font-size: 13px;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    width: 40px;
    height: 25px;
    margin-right: 10px;
  }
`;

const ContentsTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentsTextBlock2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 2px;
  }
`;

const ContentsText = styled.div`
  font-size: 19px;
  letter-spacing: 0.3px;
  color: #666666;
  margin-bottom: ${props => (props.withSubText ? '40px' : '10px')};
  position: relative;
  top: ${props => (props.top ? '5px' : '0')};
  line-height: 29px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    line-height: 25px;
    top: ${props => (props.top ? '3px' : '0')};
  }

  @media screen and (max-width: 700px) {
    font-size: 13px;
    top: 0;
  }
`;

const SubText = styled.div`
  font-size: 19px;
  letter-spacing: 0.3px;
  color: #666666;
  position: absolute;
  left: 41.5%;
  width: 300px;
  margin-top: 3px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    line-height: 25px;
  }

  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;

export default Time;
