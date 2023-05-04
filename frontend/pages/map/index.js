import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  SubMain,
  SubMainImg,
  SubTitle,
} from '@/components/subpage/IntroduceNav';
import { Wrap } from '../introduce/about';
import { Title } from '../checkup/introduce';

const MapImgArray = [
  {
    text: '주차장 입구',
    src: '/image/map-img1.jpg',
  },
  {
    text: '주차장 1층 입구',
    src: '/image/map-img2.jpg',
  },
  {
    text: '주차장 지하 3층',
    src: '/image/map-img3.jpg',
  },
  {
    text: '주차장 엘리베이터',
    src: '/image/map-img4.jpg',
  },
  {
    text: '건물 입구',
    src: '/image/map-img5.jpg',
  },
];

const Map = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.3481339, 126.7334881);
    const mapOptions = {
      center: location,
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <Wrap>
      <SubMain>
        <SubMainImg src='/image/sub-main4.jpg' />
        <SubTitle>오시는 길</SubTitle>
      </SubMain>
      <MapWrap>
        <BoxWrap>
          <MapImg ref={mapElement} />
          <Link href='https://map.naver.com/v5/search/%EC%8B%9C%ED%9D%A5%20%EC%84%BC%ED%8A%B8%EB%9F%B4%20%EB%8F%99%EB%AC%BC%EC%9D%98%EB%A3%8C%EC%84%BC%ED%84%B0/place/1393893257?c=15,0,0,0,dh&isCorrectAnswer=true'>
            <MapBtn>
              <BtnText>네이버 지도로 보기</BtnText>
              <BtnArrow src='/image/map-arrow.png' />
            </MapBtn>
          </Link>
        </BoxWrap>
        <TextWrap marginTop>
          주소 : 경기도 시흥시 정왕대로 174번지 광개토빌딩 1차
          (시흥24시센트럴동물의료센터)
        </TextWrap>
        <TextWrap marginBottom>
          주차장 무료주차 가능(병원 전산 할인 필수)
        </TextWrap>
        <Title>주차장 사진 안내</Title>
        <ImgWrap>
          {MapImgArray.map((item, i) => (
            <ImgBox key={i}>
              <Img src={item.src} />
              <ImgText>{item.text}</ImgText>
            </ImgBox>
          ))}
        </ImgWrap>
      </MapWrap>
    </Wrap>
  );
};

const MapWrap = styled.div`
  width: 1000px;
  margin: 10vh auto 10vh auto;

  @media screen and (max-width: 1700px) {
    width: 940px;
  }

  @media screen and (max-width: 1024px) {
    width: 670px;
    margin: 8vh auto 8vh auto;
  }

  @media screen and (max-width: 700px) {
    width: 320px;
    margin: 0 auto 6vh auto;
  }
`;

const BoxWrap = styled.div`
  width: 100%;
  height: 470px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  @media screen and (max-width: 1024px) {
    height: 430px;
  }

  @media screen and (max-width: 700px) {
    height: 320px;
  }
`;

const MapImg = styled.div`
  width: 100%;
  height: 100%;
`;

const MapBtn = styled.div`
  width: 200px;
  height: 46px;
  position: absolute;
  top: 83%;
  left: 77%;
  border-radius: 30px;
  background-color: #2db400;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 180px;
    top: 80%;
    left: 70%;
  }

  @media screen and (max-width: 700px) {
    width: 150px;
    height: 35px;
    top: 7%;
    left: 50%;
  }
`;

const BtnText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  left: -2px;

  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;

const BtnArrow = styled.img`
  position: relative;
  left: 8px;

  @media screen and (max-width: 700px) {
    width: 11px;
    left: 6px;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  font-size: 20px;
  margin-top: ${props => (props.marginTop ? '60px' : '')};
  margin-bottom: ${props => (props.marginBottom ? '80px' : '20px')};

  @media screen and (max-width: 1024px) {
    margin-top: ${props => (props.marginTop ? '50px' : '')};
    margin-bottom: ${props => (props.marginBottom ? '70px' : '20px')};
    font-size: 19px;
  }

  @media screen and (max-width: 700px) {
    margin-top: ${props => (props.marginTop ? '30px' : '')};
    margin-bottom: ${props => (props.marginBottom ? '60px' : '20px')};
    font-size: 17px;
    line-height: 27px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  grid-gap: 30px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 48% 48%;
    grid-gap: 15px;
  }
`;

const ImgBox = styled.div`
  display: block;
`;

const Img = styled.img`
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    width: 210px;
  }

  @media screen and (max-width: 700px) {
    width: 155px;
  }
`;

const ImgText = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
  @media screen and (max-width: 700px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

export default Map;
