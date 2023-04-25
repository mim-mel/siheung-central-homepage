import styled from 'styled-components';
import { Wrap } from '../about';
import IntroduceNav from '@/components/subpage/IntroduceNav';
import HopitalNav from '@/components/hospital/HospitalNav';
import { useState } from 'react';

const InteriorArray = [
  {
    src: '/image/interior1.jpg',
    name: '건물 외관',
  },
  {
    src: '/image/interior2.jpg',
    name: '용품진열장',
  },
  {
    src: '/image/interior3.jpg',
    name: '로 비',
  },
  {
    src: '/image/interior4.jpg',
    name: '수술실',
  },
  {
    src: '/image/interior5.jpg',
    name: '엑스레이실',
  },
  {
    src: '/image/interior6.jpg',
    name: '진료실',
  },
  {
    src: '/image/interior7.jpg',
    name: '처치실',
  },
  {
    src: '/image/interior8.jpg',
    name: '펫호텔',
  },
  {
    src: '/image/interior9.jpg',
    name: '재활치료실',
  },
  {
    src: '/image/interior10.jpg',
    name: '미용실',
  },
];

const Interior = () => {
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

      <HopitalNav categoryName='interior' />
      <HospitalWrap>
        <ArrowLeft src='/image/hospital-arrow.png' onClick={() => onLeft()} />
        <ArrowRight src='/image/hospital-arrow.png' onClick={() => onRight()} />
        <SliderWrap1>
          <SliderWrap2 count={count}>
            {InteriorArray.map((item, i) => (
              <SliderBlock key={i}>
                <Img src={item.src} />
                <Info>{item.name}</Info>
              </SliderBlock>
            ))}
          </SliderWrap2>
        </SliderWrap1>
      </HospitalWrap>
    </Wrap>
  );
};

const HospitalWrap = styled.div`
  width: 810px;
  height: 490px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
  border-radius: 20px;
  margin: 0 auto 9vh auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 630px;
    height: 410px;
  }

  @media screen and (max-width: 700px) {
    width: 290px;
    height: 290px;
    margin: 0 auto 6vh auto;
  }
`;

const ArrowLeft = styled.img`
  position: absolute;
  top: 47.5%;
  left: -7%;
  opacity: 0.4;
  transform: rotate(180deg);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    top: 47%;
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    left: -8%;
  }

  @media screen and (max-width: 700px) {
    left: -12%;
    transform: rotate(180deg) scale(0.8);
  }
`;

const ArrowRight = styled.img`
  position: absolute;
  top: 47.5%;
  left: 103.5%;
  opacity: 0.4;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    top: 47%;
    opacity: 1;
  }

  @media screen and (max-width: 700px) {
    transform: scale(0.8);
    left: 102%;
  }
`;

const SliderWrap1 = styled.div`
  width: 750px;
  height: 430px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 580px;
    height: 360px;
  }

  @media screen and (max-width: 700px) {
    width: 260px;
    height: 260px;
  }
`;

const SliderWrap2 = styled.div`
  display: flex;
  width: 7000px;
  height: 430px;
  position: relative;
  left: ${props => '-' + props.count * 750 + 'px'};
  transition: 0.2s;

  @media screen and (max-width: 1024px) {
    height: 360px;
    left: ${props => '-' + props.count * 580 + 'px'};
  }

  @media screen and (max-width: 700px) {
    height: 260px;
    left: ${props => '-' + props.count * 260 + 'px'};
  }
`;

const SliderBlock = styled.div`
  width: 750px;
  height: 430px;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 580px;
    height: 360px;
  }

  @media screen and (max-width: 700px) {
    width: 260px;
    height: 260px;
  }
`;

const Img = styled.img`
  @media screen and (max-width: 1024px) {
    width: 630px;
    height: 410px;
  }

  @media screen and (max-width: 700px) {
    width: 260px;
    height: 260px;
  }
`;

const Info = styled.div`
  width: 135px;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  top: 5%;
  left: 79%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 110px;
    height: 40px;
    top: 6%;
    left: 76%;
    font-size: 15px;
  }

  @media screen and (max-width: 700px) {
    width: 90px;
    height: 35px;
    font-size: 14px;
    top: 5%;
    left: 60%;
  }
`;

export default Interior;
