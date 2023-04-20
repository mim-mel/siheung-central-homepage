import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const Nav = () => {
  const router = useRouter();
  const [IsMenu, setIsMenu] = useState(false);
  const [IsIntroduce, setIsIntroduce] = useState(false);
  const [IsClinic, setIsClinic] = useState(false);
  const [IsCheckUp, setIsCheckUp] = useState(false);
  const [IsMap, setIsMap] = useState(false);
  const [IsNews, setIsNews] = useState(false);

  //토글바 활성화
  const isMenuToggle = () => {
    if (IsMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  //센트럴 동물병원 소개 토글
  const isIntroduceToggle = () => {
    if (IsIntroduce) {
      setIsIntroduce(false);
    } else {
      setIsIntroduce(true);
    }

    if (IsIntroduce === false && IsClinic !== IsIntroduce) {
      setIsClinic(false);
    }
    if (IsIntroduce === false && IsCheckUp !== IsIntroduce) {
      setIsCheckUp(false);
    }
    if (IsIntroduce === false && IsMap !== IsIntroduce) {
      setIsMap(false);
    }
    if (IsIntroduce === false && IsNews !== IsIntroduce) {
      setIsNews(false);
    }
  };

  //전문센터클리닉 토글
  const isClinicToggle = () => {
    if (IsClinic) {
      setIsClinic(false);
    } else {
      setIsClinic(true);
    }

    if (IsClinic === false && IsIntroduce !== IsClinic) {
      setIsIntroduce(false);
    }
    if (IsClinic === false && IsCheckUp !== IsClinic) {
      setIsCheckUp(false);
    }
    if (IsClinic === false && IsMap !== IsClinic) {
      setIsMap(false);
    }
    if (IsClinic === false && IsNews !== IsClinic) {
      setIsNews(false);
    }
  };

  //건강검진센터 토글
  const isCheckUpToggle = () => {
    if (IsCheckUp) {
      setIsCheckUp(false);
    } else {
      setIsCheckUp(true);
    }

    if (IsCheckUp === false && IsIntroduce !== IsCheckUp) {
      setIsIntroduce(false);
    }
    if (IsCheckUp === false && IsClinic !== IsCheckUp) {
      setIsClinic(false);
    }
    if (IsCheckUp === false && IsMap !== IsCheckUp) {
      setIsMap(false);
    }
    if (IsCheckUp === false && IsNews !== IsCheckUp) {
      setIsNews(false);
    }
  };

  //오시는 길 토글
  const isMapToggle = () => {
    if (IsMap) {
      setIsMap(false);
    } else {
      setIsMap(true);
    }

    if (IsMap === false && IsIntroduce !== IsMap) {
      setIsIntroduce(false);
    }
    if (IsMap === false && IsClinic !== IsMap) {
      setIsClinic(false);
    }
    if (IsMap === false && IsCheckUp !== IsMap) {
      setIsCheckUp(false);
    }
    if (IsMap === false && IsNews !== IsMap) {
      setIsNews(false);
    }
  };

  //병원소식 토글
  const isNewsToggle = () => {
    if (IsNews) {
      setIsNews(false);
    } else {
      setIsNews(true);
    }

    if (IsNews === false && IsIntroduce !== IsNews) {
      setIsIntroduce(false);
    }
    if (IsNews === false && IsClinic !== IsNews) {
      setIsClinic(false);
    }
    if (IsNews === false && IsCheckUp !== IsNews) {
      setIsCheckUp(false);
    }
    if (IsNews === false && IsMap !== IsNews) {
      setIsMap(false);
    }
  };

  return (
    <NavWrap>
      <WebLogo src='/image/logo.png' onClick={() => router.push('/')} />
      <MobileLogo src='/image/logo-m.png' />
      {IsMenu ? (
        <BurgerLogo onClick={() => isMenuToggle()} src='/image/x-mark.png' />
      ) : (
        <BurgerLogo
          onClick={() => isMenuToggle()}
          src='/image/burger_menu.png'
        />
      )}
      <NavTitleBox isMenu={IsMenu}>
        <NavTitle marginTop='3vh' onClick={() => isIntroduceToggle()}>
          <NavTitleText>
            센트럴 동물병원 소개
            <Arrow src='/image/arrow.png' isToggleOn={IsIntroduce} />
          </NavTitleText>
          <Triangle />
          <HoverWrap isToggleOn={IsIntroduce}>
            <SubTitleBoxWrap top='14.7vh'>
              <SubTitleBox onClick={() => router.push('/introduce/about')}>
                <SubTitle>병원 소개</SubTitle>
              </SubTitleBox>
              <SubTitleBox onClick={() => router.push('/introduce/member')}>
                <SubTitle>의료진 소개</SubTitle>
              </SubTitleBox>
              <SubTitleBox onClick={() => router.push('/introduce/time')}>
                <SubTitle>진료시간 안내</SubTitle>
              </SubTitleBox>
              <SubTitleBox
                borderBottom
                onClick={() => router.push('/introduce/hospital')}
              >
                <SubTitle>병원 미리보기</SubTitle>
              </SubTitleBox>
            </SubTitleBoxWrap>
          </HoverWrap>
        </NavTitle>
        <NavTitle onClick={() => isClinicToggle()}>
          <NavTitleText>
            전문센터/클리닉
            <Arrow src='/image/arrow.png' isToggleOn={IsClinic} />
          </NavTitleText>
          <Triangle />
          <HoverWrap isToggleOn={IsClinic}>
            <SubTitleBoxWrap top='19.7vh'>
              <SubTitleBox onClick={() => router.push('/clinic/old')}>
                <SubTitle>노령 질환 센터</SubTitle>
              </SubTitleBox>
              <SubTitleBox onClick={() => router.push('/clinic/surgery')}>
                <SubTitle>동물 수술 센터</SubTitle>
              </SubTitleBox>
              <SubTitleBox onClick={() => router.push('/clinic/medicine')}>
                <SubTitle>내과 클리닉 센터</SubTitle>
              </SubTitleBox>
              <SubTitleBox
                onClick={() => router.push('/clinic/rehabilitation')}
              >
                <SubTitle>재활 통증의학 센터</SubTitle>
              </SubTitleBox>
              <SubTitleBox onClick={() => router.push('/clinic/vaccination')}>
                <SubTitle>예방의학 클리닉</SubTitle>
              </SubTitleBox>
              <SubTitleBox
                borderBottom
                onClick={() => router.push('/clinic/emergency')}
              >
                <SubTitle>24시 응급실</SubTitle>
              </SubTitleBox>
            </SubTitleBoxWrap>
          </HoverWrap>
        </NavTitle>
        <NavTitle onClick={() => isCheckUpToggle()}>
          <NavTitleText>
            건강검진센터
            <Arrow src='/image/arrow.png' isToggleOn={IsCheckUp} />
          </NavTitleText>
          <Triangle />
          <HoverWrap isToggleOn={IsCheckUp}>
            <SubTitleBoxWrap top='24.7vh'>
              <SubTitleBox onClick={() => router.push('/checkup/introduce')}>
                <SubTitle>건강검진이란?</SubTitle>
              </SubTitleBox>
              <SubTitleBox onClick={() => router.push('/checkup/dog')}>
                <SubTitle>반려견 건강검진</SubTitle>
              </SubTitleBox>
              <SubTitleBox onClick={() => router.push('/checkup/cat')}>
                <SubTitle>반려묘 건강검진</SubTitle>
              </SubTitleBox>
              <SubTitleBox
                borderBottom
                onClick={() => router.push('/checkup/caution')}
              >
                <SubTitle>건강검진 전 후 안내 주의사항</SubTitle>
              </SubTitleBox>
            </SubTitleBoxWrap>
          </HoverWrap>
        </NavTitle>
        <NavTitle onClick={() => isMapToggle()}>
          <NavTitleText>
            오시는 길
            <Arrow src='/image/arrow.png' isToggleOn={IsMap} />
          </NavTitleText>
          <Triangle />
          <HoverWrap isToggleOn={IsMap}>
            <SubTitleBoxWrap top='29.7vh'>
              <SubTitleBox borderBottom onClick={() => router.push('/map')}>
                <SubTitle>찾아오시는 길</SubTitle>
              </SubTitleBox>
            </SubTitleBoxWrap>
          </HoverWrap>
        </NavTitle>
        <NavTitle marginBottom='3vh' onClick={() => isNewsToggle()}>
          <NavTitleText>
            병원소식
            <Arrow src='/image/arrow.png' isToggleOn={IsNews} />
          </NavTitleText>
          <Triangle />
          <HoverWrap isToggleOn={IsNews}>
            <SubTitleBoxWrap top='34.7vh'>
              <SubTitleBox onClick={() => router.push('/news/inform')}>
                <SubTitle>공지사항</SubTitle>
              </SubTitleBox>
              <SubTitleBox
                borderBottom
                onClick={() => router.push('/news/notice')}
              >
                <SubTitle>센트럴 소식</SubTitle>
              </SubTitleBox>
            </SubTitleBoxWrap>
          </HoverWrap>
        </NavTitle>
      </NavTitleBox>
      <InformWrap>
        <BoxTitle marginBottom='2vh'>공지사항</BoxTitle>
        <InfoTextWrap>
          <InfoIcon src='/image/paw.png' />
          <InfoText>시흥시 지원 광견병 접종 안내</InfoText>
        </InfoTextWrap>
        <InfoTextWrap>
          <InfoIcon src='/image/paw.png' />
          <InfoText>공지사항</InfoText>
        </InfoTextWrap>
        <InfoTextWrap>
          <InfoIcon src='/image/paw.png' />
          <InfoText>공지사항</InfoText>
        </InfoTextWrap>
      </InformWrap>
      <TimeWrap>
        <BoxTitle marginBottom='1.4vh'>진료 및 수술예약</BoxTitle>
        <TimeButton>
          <ButtonText>031-432-2475</ButtonText>
          <ButtonIconWrap>
            <img src='/image/phone.png' alt='phone' />
          </ButtonIconWrap>
        </TimeButton>
        <InfoTextWrap>
          <InfoIcon src='/image/paw.png' />
          <InfoTextWrap2>
            <InfoText marginBottom='5px'>
              <span>진료시간</span>
            </InfoText>
            <InfoText>
              <span>평일:</span> 09:00-24:00
            </InfoText>
            <InfoText>
              <span>주말:</span> 09:00-22:00
            </InfoText>
          </InfoTextWrap2>
        </InfoTextWrap>
        <InfoTextWrap>
          <InfoIcon src='/image/paw.png' />
          <InfoTextWrap2>
            <InfoText marginBottom='5px'>
              <span>야간 응급진료:</span> 00:00-09:00
            </InfoText>
            <InfoText>평일밤 응급실 운영</InfoText>
          </InfoTextWrap2>
        </InfoTextWrap>
        <InfoTextWrap>
          <InfoIcon src='/image/paw.png' />
          <InfoTextWrap2>
            <InfoText marginBottom='5px'>
              <span>오시는 길:</span> 경기도 시흥시 정황대로
            </InfoText>
            <InfoText>174 광개토빌딩 110호,203호</InfoText>
          </InfoTextWrap2>
        </InfoTextWrap>
      </TimeWrap>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 18%;
  height: 100vh;
  background-color: #ad9686;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 70px;
    flex-direction: row;
    padding: 0 50px;
    box-sizing: border-box;
    justify-content: space-between;
  }

  @media screen and (max-width: 700px) {
    padding: 0 25px;
  }
`;

const WebLogo = styled.img`
  margin-top: 4vh;
  cursor: pointer;

  @media screen and (max-width: 1700px) {
    transform: scale(85%);
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const BurgerLogo = styled.img`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

//NavTitle hover start

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 12px solid transparent;
  border-top: 12px solid transparent;
  border-left: 15px solid transparent;
  border-right: 15px solid #623d30;
  position: absolute;
  left: 92%;
  display: none;
  opacity: 0;

  @media screen and (max-width: 1700px) {
    left: 90%;
  }
`;

const HoverWrap = styled.div`
  width: 0px;
  opacity: 0;
  height: 100vh;
  background-color: #623d30;
  position: absolute;
  top: 0;
  left: 100%;
  overflow: hidden;
  transition: 0.3s;

  @media screen and (max-width: 1024px) {
    width: 100%;
    opacity: 1;
    height: ${props => (props.isToggleOn ? 'auto' : '0px')};
    background-color: #e0e0e0;
    position: relative;
    overflow: hidden;
    left: 0;
    transition: 0.3s;
  }
`;

const SubTitle = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 18px;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    color: #623d30;
    opacity: 1;
    font-size: 20px;
    font-weight: 600;
  }
`;

const SubTitleBoxWrap = styled.div`
  position: absolute;
  top: ${props => props.top};
  width: 100%;
  display: none;
  transition: 0.3s;

  @media screen and (max-width: 1024px) {
    position: relative;
    top: 0;
    left: 0;
    display: block;
  }
`;

const SubTitleBox = styled.div`
  width: 100%;
  height: 5vh;
  border-top: 0.3px solid #ad9686;
  border-bottom: ${props => (props.borderBottom ? '0.3px solid #ad9686' : '')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 50px;

    &:hover {
      background-color: #c9c9c9;
    }
  }

  @media (hover: hover) {
    &:hover {
      background-color: #735042;

      @media screen and (max-width: 1024px) {
        background-color: #c9c9c9;
      }
    }

    :hover ${SubTitle} {
      opacity: 1;
    }
  }
`;

//NavTitle hover end

const NavTitleBox = styled.div`
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: ${props => (props.isMenu ? 'block' : 'none')};
    width: 100%;
    height: auto;
    position: absolute;
    background-color: #623d30;
    top: 70px;
    left: 0;
    box-sizing: border-box;
  }
`;

const Arrow = styled.img`
  position: absolute;
  top: ${props => (props.isToggleOn ? '39%' : '50%')};
  left: 91%;
  transform: translate(0, -50%);
  display: none;
  transform: ${props => (props.isToggleOn ? 'rotate(90deg)' : '')};
  transition: 0.3s;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const NavTitle = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  cursor: pointer;

  @media screen and (max-width: 1700px) {
    font-size: 19px;
  }

  @media (hover: hover) {
    :hover ${Triangle} {
      display: flex;
      opacity: 1;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    :hover ${HoverWrap} {
      width: 250px;
      opacity: 1;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }

    :hover ${SubTitleBoxWrap} {
      display: block;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 60px;
    margin-top: 0;
    margin-bottom: 0;
    border-top: 0.3px solid #ad9686;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    height: auto;
  }
`;

const NavTitleText = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const InformWrap = styled.div`
  width: 80%;
  height: 19vh;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 1.5vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 25px;
  box-sizing: border-box;

  @media screen and (max-width: 1700px) {
    width: 90%;
    padding: 20px 23px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const BoxTitle = styled.div`
  font-size: 21px;
  font-weight: 700;
  color: #623d30;
  margin-bottom: ${props => props.marginBottom};
  margin-top: 1.8vh;

  @media screen and (max-width: 1700px) {
    font-size: 19px;
  }
`;

const InfoTextWrap = styled.div`
  display: grid;
  grid-template-columns: 12% 88%;
  margin-bottom: 1.5vh;
  align-items: flex-start;
`;

const InfoTextWrap2 = styled.div`
  display: block;
`;

const InfoIcon = styled.img`
  margin-right: 9px;
  padding-top: 1px;
`;

const InfoText = styled.div`
  font-size: 14px;
  color: #333333;
  margin-bottom: ${props => props.marginBottom};

  span {
    color: #916459;
    font-weight: 600;
  }

  @media screen and (max-width: 1700px) {
    font-size: 12px;
  }
`;

const TimeWrap = styled.div`
  width: 80%;
  height: 35vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 25px;
  box-sizing: border-box;

  @media screen and (max-width: 1700px) {
    width: 90%;
    padding: 10px 23px;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const TimeButton = styled.div`
  width: 100%;
  height: 4.5vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #816459;
  margin-bottom: 1.5vh;
`;

const ButtonText = styled.div`
  font-size: 19px;
  font-weight: 600;
  margin-right: 8px;
  color: white;

  @media screen and (max-width: 1700px) {
    font-size: 15px;
  }
`;
const ButtonIconWrap = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export default Nav;
