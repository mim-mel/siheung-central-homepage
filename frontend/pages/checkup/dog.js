import CheckUpNav from '@/components/subpage/CheckUpNav';
import { Wrap } from '../introduce/about';
import styled from 'styled-components';
import { useState } from 'react';

const dogArray = [
  {
    id: 0,
    name: '문 진',
    text: '보호자님과의 이야기를 나누고 아이의 실제나이, 병력, 수술유무, 출산 등 특이사항에 대한 정보를 얻습니다.어디가 안 좋아서 병원을 다녔는지 건강했던 아이인지 가족력이나 같은 형제의 유전적 소인이 있는지에 따른 정보로 건강검진의 방향을 결정합니다. ',
  },
  {
    id: 1,
    name: '신체검사',
    text: '귀, 피부, 치아, 청진, 관절의 촉진 등  수의사 신체검사가 이루어 집니다.',
  },
  {
    id: 2,
    name: '혈액검사',
    text: '빈혈,염증,혈소판, 간수치,신장수치, 단백질수치, 전해질, 콜레스테롤 등을 검사하여 건강상태를 확인합니다.',
  },
  {
    id: 3,
    name: '방사선검사',
    text: '흉부방사선- 흉강내 장기인 폐, 심장, 기관의 이상 여부를 확인합니다. 복부방사선- 복강내 간, 신장, 소화기, 비뇨기계, 골반에 대한 이상여부를 확인합니다. 후지골격계 - 뒷다리에 대한 방사선검사로 슬개골, 고관절, 십자인대손상, 발목관절 등을 검사합니다.       ',
  },
  {
    id: 4,
    name: '초음파검사',
    text: '방사선만으로 알수없는 장기 내부의 세밀한 정보를 파악합니다.',
  },
  {
    id: 5,
    name: '소변검사',
    text: '소변에 대한 정밀한 검사를 통해 방광질환, 신장질환, 당뇨 등에 대한 정보를 얻을수 있습니다. ',
  },
  {
    id: 6,
    name: '안검사',
    text: '눈에 대한 검사로, 눈물분비량, 각막의 상처유무, 안압검사, 검안경검사 등이 있습니다.',
  },
  {
    id: 7,
    name: '갑상선호르몬 검사',
    text: '갑상선 기능저하증과 갑상선 기능항진증에 대한 검사입니다.',
  },
  {
    id: 8,
    name: '부신피질호르몬 검사',
    text: '부신피질호르몬 수치에 따른 결과를 파악하는 검사입니다.',
  },
  {
    id: 9,
    name: 'SDMA 검사',
    text: '신장질환에 대핸 혈청검사보다 조기에 발견할수 있는 검사입니다.',
  },
  {
    id: 10,
    name: 'pro-bnp 검사',
    text: '심장근육에서 방출되는 biomarker로 심장병을 진단할수 있는 검사법중 하나입니다.',
  },
  {
    id: 11,
    name: '항체가 검사',
    text: '접종에 대한 결과를 혈액을 뽑아 항체가 정도로 파악하는 검사로 , 접종 후 또는 접종 한 시가가 오래 되었을 경우 반려동물의 항체가 있는지에 따라 접종 스케줄을 조정합니다.',
  },
  {
    id: 12,
    name: '심장사상충검사 ',
    text: '매달 예방하면서 관리하는 아이들 이라도 1년에 한번 혈액을 뽑아 감염유무를 검사하는 것을 권장하며 예방약을 먹은지 오래 되었을 경우 필수로 추천하는 검사입니다.',
  },
  {
    id: 13,
    name: '전문검진',
    text: '내시경- 상부소화기 이물, 식도염, 위염, 위궤양 등의 소화기 질환에 대한 검사입니다.',
  },
  {
    id: 14,
    name: '치과검사',
    text: '잇몸, 치아 검사 및 치과 방사선 검사로 구강질환에 대한 검사입니다.',
  },
  {
    id: 15,
    name: '알러지검사',
    text: '피부나 소화기계 알러지 증상이 빈번한 반려동물의 알러지원을 찾기 위한 검사로 수의사상담 후 범위를 정할 수 있습니다.',
  },
];

const Dog = () => {
  const [TitleState, setTitleState] = useState(dogArray[0].name);
  const [TextState, setTextState] = useState(
    '반려 동물들은 사람의 언어를 통해 아픈곳을 호소하는 것이 아니기 때문에 그만큼 수술 전 검사가 매우 중요합니다. 센트럴 에서는 환자의 평소 증상 및 연령에 따른 질병을 반영할 수 있는 검사를 통해 환자의 상태를 확인하고 수술전 지시되는 질병이 발견되는 경우, 마취시 안정한 수준으로 상태를 조절해 마취를 진행하는 것을 원칙으로 합니다'
  );
  const [ButtonId, setButtonId] = useState(0);

  const handleBtn = num => {
    const dog = dogArray[num];
    setTitleState(dog.name);
    setTextState(dog.text);
    setButtonId(num);
  };

  return (
    <Wrap>
      <CheckUpNav
        url='/image/sub-main3.jpg'
        title='반려견 건강검진'
        categoryName='dog'
      />
      <DogWrap>
        <Title>반려견 건강검진 세부항목</Title>
        <BtnWrap>
          {dogArray.map(item => (
            <Btn
              key={item.id}
              onClick={() => handleBtn(item.id)}
              className={ButtonId === item.id ? 'active' : null}
            >
              {item.name}
            </Btn>
          ))}
        </BtnWrap>
        <TextWrap>
          <Name>{TitleState}</Name>
          <Info>{TextState}</Info>
        </TextWrap>
      </DogWrap>
    </Wrap>
  );
};

export const DogWrap = styled.div`
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

export const Title = styled.div`
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
    margin-bottom: 30px;
    text-align: center;
    margin-top: 0;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 15px;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto auto auto auto;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
  }
`;

export const Btn = styled.div`
  width: 190px;
  height: 58px;
  border-radius: 10px;
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &.active {
    background-color: #a48a79;
    color: white;
    font-weight: 600;
  }

  @media screen and (max-width: 1700px) {
    width: 175px;
    font-size: 17px;
  }

  @media screen and (max-width: 1024px) {
    width: 155px;
    font-size: 16px;
    height: 50px;
  }

  @media screen and (max-width: 700px) {
    width: 100px;
    font-size: 14px;
    text-align: center;
    padding: 6px;
    box-sizing: border-box;
    height: 53px;
  }
`;

export const TextWrap = styled.div`
  width: 100%;
  padding: 40px 55px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  @media screen and (max-width: 700px) {
    padding: 30px 35px;
  }
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

export const Info = styled.div`
  font-size: 20px;
  line-height: 34px;

  @media screen and (max-width: 700px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

export default Dog;
