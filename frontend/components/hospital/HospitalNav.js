import styled from 'styled-components';
import { useRouter } from 'next/router';

const HopitalNav = props => {
  const router = useRouter();

  return (
    <HospitalNavWrap>
      <HospitalBlcok
        className={props.categoryName === 'interior' ? 'active' : null}
        onClick={() => router.push('/introduce/hospital/interior')}
      >
        <BlockText
          className={props.categoryName === 'interior' ? 'active' : null}
        >
          시설 소개
        </BlockText>
      </HospitalBlcok>
      <HospitalBlcok
        className={props.categoryName === 'machine' ? 'active' : null}
        onClick={() => router.push('/introduce/hospital/machine')}
      >
        <BlockText
          className={props.categoryName === 'machine' ? 'active' : null}
        >
          장비 소개
        </BlockText>
      </HospitalBlcok>
    </HospitalNavWrap>
  );
};

const HospitalNavWrap = styled.div`
  width: 710px;
  height: 55px;
  display: grid;
  grid-template-columns: auto auto;
  border-radius: 10px;
  overflow: hidden;
  margin: 13vh 0 7vh 0;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 75%;
    margin: 10vh 0 5vh 0;
  }

  @media screen and (max-width: 700px) {
    width: 270px;
    margin: 1vh 0 4vh 0;
    height: 40px;
  }
`;

const BlockText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #666666;
  opacity: 0.7;
  transition: 0.2s;

  &.active {
    color: white;
    font-weight: 600;
    opacity: 1;
  }

  @media screen and (max-width: 700px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

const HospitalBlcok = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f3f2;
  position: relative;
  cursor: pointer;

  &.active {
    background-color: #a48a79;
  }

  &:hover ${BlockText} {
    opacity: 1;
  }
`;

export default HopitalNav;
