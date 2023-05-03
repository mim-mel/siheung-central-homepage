import CheckUpNav from '@/components/subpage/CheckUpNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';
import { IntroduceWrap, Title, TextBox } from './introduce';

const Caution = () => {
  return (
    <Wrap>
      <CheckUpNav
        url='/image/sub-main3.jpg'
        title='건강검진 전 후 안내 주의사항'
        categoryName='caution'
      />
      <IntroduceWrap>
        <Title>건강검진 안내사항</Title>
        <TextBox padding>
          <TextWrap>
            <TextTitle marginTopX>건강검진 전 주의사항</TextTitle>
            <TextIcon src='/image/caution-icon.png' />
            <Text>
              예약을 권장합니다. 검진 전 미리 연락주셔서 반려동물의 이름, 나이,
              성별, 체중 등을 미리 남겨 주시면 더 원활한 진료가 가능합니다.
            </Text>
            <Text>
              건강검진 전날 밤 12시 이후에는 물과 사료 일체 금식합니다. 정확한
              검사와 진단을 위해 금식시간을 꼭 지켜주세요. 건강검진 전, 후
              24시간은 흥분하거나 무리하지 않도록 충분한 휴식을 취해주세요. 금식
              후 첫 식사는 의료진의 안내에 따라 급여량 및 급여 방법을
              준수해주세요.
            </Text>
            <Text>
              초음파 검사시 정확한 검사를 위해 삭모를 할수 있으며, 피부가 민감한
              아이는 피부 발적/소양감이 생길수 있습니다. 내원 당일 접수 후
              건강검진 관련 상담 및 검진 항목 설정을 합니다.
            </Text>
            <Text>
              일반적으로 건강검진상 마취를 필요로 하지 않으며, 특별히 마취를
              할경우 미리 상담과 안내가 나갑니다.
            </Text>
          </TextWrap>
          <TextWrap>
            <TextTitle marginTopX>건강검진 후 주의사항</TextTitle>
            <TextIcon src='/image/caution-icon.png' />
            <Text>
              소변의 채취를 위해 방광천자를 할 수 있으며, 복부에 멍이 작게 들수
              있습니다. 안과 정밀검사시 산동검사를 할수 있습니다. 검사 후 아이가
              눈부시거나 어지러워 할 수 있습니다. 아이를 잘 어지럽지 않게 잘
              보살펴 귀가 해주세요.
            </Text>
            <Text>
              고양이의 경우 스트레스로 방광염이 생길 수 있으니 소변체크를 잘
              해주세요. 고양이의 경우 상부호흡기 질환 유발 바이러스가 잠복해
              있으면 검진 후 눈을 깜빡이거나 눈꼽이 낄 수 있습니다.
            </Text>
            <Text>
              보통의 소형 동물은 혈액채취를 위해 목의 경정맥이 이용 합니다. 목의
              경정맥은 채혈이 가능한 가장 두꺼운 혈관이자 손상이 적은 혈관이나
              과도한 움직임등으로 인한 약간의 멍이 들수도 있습니다.
            </Text>
          </TextWrap>
          <TextWrap marginBottomX>
            <TextTitle marginTopX>검사 시간</TextTitle>
            <TextIcon src='/image/caution-icon.png' />
            <Text>
              약 1-2시간 소요 (필수검진기준 )<br />약 3~4시간 소요
              (정밀검진기준)
            </Text>
            <Text marginBottomX>
              추가 검사 및 별도의 특화 검사시 추가적인 비용과 시간이 소요될수
              있습니다.
            </Text>
          </TextWrap>
        </TextBox>
      </IntroduceWrap>
    </Wrap>
  );
};

const TextWrap = styled.div`
  margin-bottom: ${props => (props.marginBottomX ? '' : '50px')};
  position: relative;
  padding-left: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    padding-left: 0;
    margin-bottom: ${props => (props.marginBottomX ? '' : '30px')};
  }
`;

const TextTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 25px;
  margin-top: ${props => (props.marginTopX ? '' : '50px')};

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 17px;
    margin-bottom: 11px;
    margin-left: 25px;
  }
`;

const Text = styled.div`
  font-size: 19px;
  line-height: 29px;
  margin-bottom: ${props => (props.marginBottomX ? '' : '20px')};

  @media screen and (max-width: 1024px) {
    font-size: 17px;
    line-height: 27px;
  }

  @media screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 23px;
  }
`;

const TextIcon = styled.img`
  position: absolute;
  top: -4px;
  left: -33px;

  @media screen and (max-width: 700px) {
    width: 27px;
    top: -3px;
    left: -5px;
  }
`;

export default Caution;
