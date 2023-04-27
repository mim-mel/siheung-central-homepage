import styled from 'styled-components';
import { Wrap } from '../about';
import IntroduceNav from '@/components/subpage/IntroduceNav';
import HopitalNav from '@/components/hospital/HospitalNav';
import { useState } from 'react';

const MachineArray = [
  {
    src: '/image/machine1.jpg',
    name: '고압증기멸균기',
    info: '고압 고온으로 멸균을 하여 멸균수술시 필수적 요소 입니다. 자외선멸균소독기 의료장비의 소독을 도와줍니다.',
  },
  {
    src: '/image/machine2.jpg',
    name: '고배율현미경',
    info: '세포,염증,세균,진균 등 각종 질환에 대한 기본정보를 제공해 줍니다.',
  },
  {
    src: '/image/machine3.jpg',
    name: '검이경',
    info: '강아지 고양이의 귀상태를 전자식 녹화 카메라로 평가합니다.',
  },
  {
    src: '/image/machine4.jpg',
    name: '검안경',
    info: '눈의 각막손상, 망막이상, 백내장 등 안과질환의 기본정보를 제공해주는 장비입니다.',
  },
  {
    src: '/image/machine5.jpg',
    name: '자동안압기',
    info: '눈의 안구의 압력을 통증없이 빠르게 측정합니다.',
  },
  {
    src: '/image/machine6.jpg',
    name: '네뷸라이저',
    info: '호흡기질병치료시 미세분무를 통해 폐포까지 약물이 직접, 빠르게 전달하도록 도와주는 장비입니다.',
  },
  {
    src: '/image/machine7.jpg',
    name: '뇨비중계',
    info: '소변의 농도를 평가하여 비뇨기계 이상여부를 알수 있습니다.',
  },
  {
    src: '/image/machine8.jpg',
    name: '전자체온계',
    info: '동물의 심부체온을 체크해 저체온 고체온증을 확인 합니다.',
  },
  {
    src: '/image/machine9.jpg',
    name: '전자혈압계',
    info: '동물의 수축기/이완기 혈압을 체크하여 자동으로 일정시간동안 모니터링 해줍니다.',
  },
  {
    src: '/image/machine10.jpg',
    name: '수동혈압계(도플러)',
    info: '의료진이 동물의 혈압을 직접 체크하여 좀더 정밀한 모니터링을 합니다.',
  },
  {
    src: '/image/machine11.jpg',
    name: '수액펌프',
    info: '강아지 고양이에게 정확한 양의 수액을 주입할 수 있도록 해주기때문에 적절한 처치에 꼭 필요한 장비입니다.',
  },
  {
    src: '/image/machine12.jpg',
    name: '주사기펌프',
    info: '반려동물 아이들에게 주사기로 일정시간 일정량을 세팅하여 주입 할수 있습니다.',
  },
  {
    src: '/image/machine13.jpg',
    name: '미니 원심분리기',
    info: '뇨검사, 혈액검사등에서 필요한 샘플채취를위해 사용합니다.',
  },
  {
    src: '/image/machine14.jpg',
    name: '대형 원심분리기',
    info: '소변, 삼출물, 혈액 등에서 필요한 샘플채취와 분리를 위해 사용합니다.',
  },
  {
    src: '/image/machine15.jpg',
    name: '디지털 방사선장치(digital X-ray)',
    info: '근골격계 필수 영상장비로 디지털화 되어 조금더 정밀한 평가가 가능합니다. ',
  },
  {
    src: '/image/machine16.jpg',
    name: '내시경 (olympus endoscopy)',
    info: '소화기계 질환을 실시간으로 영상을 확인하고 조직을 채취하거나 이물을 제거할수 있습니다.',
  },
  {
    src: '/image/machine17.jpg',
    name: '전기소작기(지혈,결찰)',
    info: '전기소작기란 고주파 전류의 저항을 이용해 출혈 지혈 및 조직을 제거해주는 외과 수술에선 없어선 안 될 핵심기구입니다.',
  },
  {
    src: '/image/machine18.jpg',
    name: '혈구검사기계(vet-abc)',
    info: '백혈구, 적혈구, 혈소판 등의 혈액수치를 검사하여 빈혈, 감염, 탈수등을 감별하도록 도와줍니다.',
  },
  {
    src: '/image/machine19.jpg',
    name: '혈액 생화학분석기계(NX 600)',
    info: '동물전용 혈액검사장비로 최신 사양의 후지사의 NX600을 사용하고 있습니다.',
  },
  {
    src: '/image/machine20.jpg',
    name: '혈액화학분석기 (V 200) ',
    info: '개고양이의 면역지표 신장수치 장기기능지표 혈전지표 등 여러기능의 수치를 기록합니다.',
  },
  {
    src: '/image/machine21.jpg',
    name: '호르몬검사장비(V10)',
    info: '동물전용 호르몬 검사장비로 신뢰도 높은 후지사의 호르몬검사장비를 사용합니다.',
  },
  {
    src: '/image/machine22.jpg',
    name: '전해질 가스분석기(ABL 80)',
    info: '혈중 전해질과 중탄산 등을 평가하여 산성여부와 전해질 불균형을 확인합니다.',
  },
  {
    src: '/image/machine23.jpg',
    name: '혈당(Glucose) 측정기',
    info: '혈액으로 간단하고 신속하게 혈당을 측정합니다.',
  },
  {
    src: '/image/machine24.jpg',
    name: '케톤(Ketone) 측정기',
    info: '혈중 케톤체의 정도를 평가하여 산증의 여부를 신속히 알수 있습니다.',
  },
  {
    src: '/image/machine25.jpg',
    name: '무영등(쌍등 LED)',
    info: '수술이나 처치시 환부의 시야를 확보하여 술자에게 조금더 정밀한 수술을 할 수 있게 도와줍니다.',
  },
  {
    src: '/image/machine26.jpg',
    name: '무영등(스탠트 LED)',
    info: '수술이나 처치시 환부의 시야를 확보하여 술자에게 조금더 정밀한 수술을 할 수 있게 도와줍니다.',
  },
  {
    src: '/image/machine27.jpg',
    name: '호흡마취기',
    info: '수술이나 검사시 부작용을 최소화 하기 위해서 정확하고 정밀한 마취를 도와주는 장비입니다.',
  },
  {
    src: '/image/machine28.jpg',
    name: '인공호흡기(ventilater)',
    info: '호흡이 불안정한 환자나, 무호흡의 환자, 응급상황시 인공호흡기능을 대체해줄 수 있습니다.',
  },
  {
    src: '/image/machine29.jpg',
    name: '환자감시기',
    info: '모든 수술시, 중환자 모니터링시 환축의 정확한 상태를 확인하여 의료진이 대처할 수 있도록 도와줍니다.',
  },
  {
    src: '/image/machine30.jpg',
    name: '휴대형 환자감시기',
    info: '중환자입원장이나 개별세팅이 가능하며, 혈압, 체온, 산소포화도에 따라 의료진이 대처할 수 있도록 도와줍니다.',
  },
  {
    src: '/image/machine31.jpg',
    name: '초음파스케일러',
    info: '초음파를 이용해 치아에 쌓인 치석을 제거하는 장비입니다.',
  },
  {
    src: '/image/machine32.jpg',
    name: '치과 방사선장비',
    info: '디지털로 치아상태를 즉시 구현하여 마취중 치과검사 시간을 줄여주고 정확한 상태를 확인할 수 있도록 도와줍니다.',
  },
  {
    src: '/image/machine33.jpg',
    name: '치과유닛',
    info: '스케일링 외에도 발치, 신경치료, 레진, 미백 등 치과치료에 기본이 되는 장비입니다.',
  },
  {
    src: '/image/machine34.jpg',
    name: '정형외과골절세트',
    info: '골절수술시 적절한 사이즈의 plate와 screw를 사용할 수 있도록 미리 멸균된 골절세트를 보유하고 있습니다.',
  },
  {
    src: '/image/machine35.jpg',
    name: '정형외과수술용saw',
    info: '골 절단시 수술시간을 최소화하고 정확히 원하는 부위를 깔끔하게 절단할 수 있는 장비입니다.',
  },
  {
    src: '/image/machine36.jpg',
    name: '정형외과수술용드릴',
    info: '골절수술시 수술시간을 최소화하고 정확한 조작을 위해 필요한 장비입니다.',
  },
  {
    src: '/image/machine37.jpg',
    name: '정형외과수술용드릴 (TPLO) 전용 드릴',
    info: '특수 수술시 필요한 정형외과용 드릴입니다.',
  },
  {
    src: '/image/machine38.jpg',
    name: '전침기 세트',
    info: '한방/재활치료시 전기자극을 추가하여 침치료 효율을 증대시켜주는 장비입니다.',
  },
  {
    src: '/image/machine39.jpg',
    name: '적외선 온열치료기',
    info: '물리치료 재활치료시 온열치료를 원활하게 도와 줍니다.',
  },
  {
    src: '/image/machine40.jpg',
    name: '레이져기기',
    info: '레이저수술을 위해 사용하거나 재활시 혈액순환개선등을 위해 사용합니다.',
  },
  {
    src: '/image/machine41.jpg',
    name: '전기자극장비',
    info: '근육과 신경에 전기자극을 주어 약해져있는 기능회복에 도움을 줍니다.',
  },
  {
    src: '/image/machine42.jpg',
    name: '체외충격파치료(ESWT)',
    info: '음속보다 빠른 파동 에너지를 피부를 통해 전달하여 병변을 치료하는 최신식 비수술적 재활물리치료 장비입니다.',
  },
];

const Machine = () => {
  const [count, setCount] = useState(0);
  const elementLength = 9;

  const onRight = () => {
    if (count < elementLength) {
      setCount(prev => prev + 1);
    } else {
      setCount(prev => 0);
    }
  };

  const onLeft = () => {
    if (count > 0 && count < elementLength) {
      setCount(prev => prev - 1);
    } else {
      setCount(prev => 0);
    }
  };

  return (
    <Wrap>
      <IntroduceNav
        url='/image/sub-main1.jpg'
        title='병원 미리보기'
        categoryName='hospital'
      />

      <HopitalNav categoryName='machine' />
      <MachineWrap>
        {MachineArray.map((item, i) => (
          <MachineBox key={i}>
            <Img src={item.src} />
            <Title>{item.name}</Title>
            <Text>{item.info}</Text>
          </MachineBox>
        ))}
      </MachineWrap>
    </Wrap>
  );
};

const MachineWrap = styled.div`
  width: 1050px;
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: space-between;
  grid-gap: 15px;
  margin-bottom: 10vh;

  @media screen and (max-width: 1700px) {
    width: 850px;
    grid-template-columns: auto auto auto auto auto;
  }

  @media screen and (max-width: 1024px) {
    width: 690px;
    grid-template-columns: auto auto auto auto;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    grid-template-columns: auto auto;
  }
`;

const MachineBox = styled.div`
  width: 155px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  overflow: hidden;
`;

const Img = styled.img``;

const Title = styled.div`
  font-size: 14.5px;
  font-weight: 600;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 6px;
  line-height: 17px;
`;

const Text = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin: 0 10px;
`;
export default Machine;
