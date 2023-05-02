import CheckUpNav from '@/components/subpage/CheckUpNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';

const Introduce = () => {
  return (
    <Wrap>
      <CheckUpNav
        url='/image/sub-main3.jpg'
        title='건강검진이란'
        categoryName='introduce'
      />
      <IntroduceWrap>
        <Title>건강검진의 필요성</Title>
        <TextBox>
          <Text marginBottom>
            건강검진은 질병 발생 전 위험 인자를 찾아 사전에 예방을 하고 질병을
            조기에 발견하여 건강을 유지/증진 시키기 위해 필요합니다.
            반려동물에게도 사람과 같이 생애전환기가 있습니다. 유년기, 중장년기,
            노령기 각 연령별 발생하는 질병들이 다양하고, 그 진행속도는 사람과
            비교할 수 없을 정도로 빠릅니다. 각 생애전환기에 적합한 건강검진을
            통해 질병을 조기에 발견하여 반려동물의 삶의 질을 높이고 기대수명을
            늘릴 필요가 있습니다.
          </Text>
          <Text>
            반려동물은 만 1세 검진을 통하여 20년 건강관리의 표준을 파악하는 것이
            중요하며, 반려동물의 생애전환기인 7세, 10세에 건강검진을 실시하여
            각종 질환에 대비해야 합니다.
          </Text>
        </TextBox>
      </IntroduceWrap>
    </Wrap>
  );
};

const IntroduceWrap = styled.div`
  margin: 17vh auto 11vh auto;
  width: 1050px;

  @media screen and (max-width: 1700px) {
    width: 940px;
  }

  @media screen and (max-width: 1024px) {
    width: 670px;
    margin: 11vh auto 8vh auto;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    margin: 2vh auto 8vh auto;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: 35px;

  @media screen and (max-width: 1024px) {
    font-size: 33px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 700px) {
    font-size: 23px;
    margin-bottom: 20px;
    text-align: center;
    margin-top: 0;
  }
`;

const TextBox = styled.div`
  width: 100%;
  padding: 40px 50px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  @media screen and (max-width: 700px) {
    padding: 30px 30px;
  }
`;

const Text = styled.div`
  font-size: 19px;
  margin-bottom: ${props => (props.marginBottom ? '20px' : '')};
  line-height: 29px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export default Introduce;
