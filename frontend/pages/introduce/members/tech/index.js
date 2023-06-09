import styled from 'styled-components';
import MemberNav from '@/components/members/MemberNav';
import IntroduceNav from '@/components/subpage/IntroduceNav';
import { Wrap } from '../../about';

const Tech = () => {
  return (
    <Wrap>
      <IntroduceNav
        url='/image/sub-main1.jpg'
        title='의료진 소개'
        categoryName='members'
      />
      <MemberNav categoryName='tech' />
      <TechWrap>
        <ImgBlock>
          <Img src='/image/member-tech1.jpg' />
          <NameBack>
            <Name>간호실장 전은혜</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech2.jpg' />
          <NameBack>
            <Name>간호실장 이유리</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech3.jpg' />
          <NameBack>
            <Name>총괄매니저 최유리</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech4.jpg' />
          <NameBack>
            <Name>테크니션 심현진</Name>
          </NameBack>
        </ImgBlock>
      </TechWrap>
      <TechWrap>
        <ImgBlock>
          <Img src='/image/member-tech5.jpg' />
          <NameBack>
            <Name>테크니션 이창신</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech6.jpg' />
          <NameBack>
            <Name>테크니션 오유진</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech7.jpg' />
          <NameBack>
            <Name>테크니션 송은빈</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech8.jpg' />
          <NameBack>
            <Name>테크니션 김가은</Name>
          </NameBack>
        </ImgBlock>
      </TechWrap>

      <TechWrap marginBottom>
        <ImgBlock>
          <Img src='/image/member-tech9.jpg' />
          <NameBack>
            <Name>테크니션 김지원</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech10.jpg' />
          <NameBack>
            <Name>테크니션 임은수</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech11.jpg' />
          <NameBack>
            <Name>테크니션 박가연</Name>
          </NameBack>
        </ImgBlock>
        <ImgBlock>
          <Img src='/image/member-tech12.jpg' />
          <NameBack>
            <Name>테크니션 김가람</Name>
          </NameBack>
        </ImgBlock>
      </TechWrap>
    </Wrap>
  );
};

const TechWrap = styled.div`
  width: 833px;
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  margin: 0 auto 24px auto;
  justify-content: space-between;
  margin-bottom: ${props => (props.marginBottom ? '11vh' : '24px')};

  @media screen and (max-width: 1024px) {
    width: 82%;
    margin-bottom: ${props => (props.marginBottom ? '8vh' : '24px')};
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 47% 47%;
    grid-gap: 24px;
  }
`;

const ImgBlock = styled.div`
  width: 190px;
  height: 255px;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 155px;
    height: 215px;
  }

  @media screen and (max-width: 700px) {
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
  }
`;

const NameBack = styled.div`
  position: absolute;
  top: 85%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 35px;
    top: 84%;
  }

  @media screen and (max-width: 700px) {
  }
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
  letter-spacing: 1px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 300;
  }

  @media screen and (max-width: 700px) {
  }
`;

export default Tech;
