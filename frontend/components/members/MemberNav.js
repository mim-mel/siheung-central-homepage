import styled from 'styled-components';
import { useRouter } from 'next/router';

const MemberNav = props => {
  const router = useRouter();

  return (
    <MemberNavWrap>
      <MemberBlcok
        className={props.categoryName === 'vet' ? 'active' : null}
        onClick={() => router.push('/introduce/members/vet/1')}
      >
        <BlockLine className={props.categoryName === 'vet' ? 'active' : null} />
        <BlockText className={props.categoryName === 'vet' ? 'active' : null}>
          의료진 소개
        </BlockText>
      </MemberBlcok>
      <MemberBlcok
        className={props.categoryName === 'tech' ? 'active' : null}
        onClick={() => router.push('/introduce/members/tech')}
      >
        <BlockLine
          className={props.categoryName === 'tech' ? 'active' : null}
        />
        <BlockText className={props.categoryName === 'tech' ? 'active' : null}>
          테크니션
        </BlockText>
      </MemberBlcok>
      <MemberBlcok
        className={props.categoryName === 'other' ? 'active' : null}
        onClick={() => router.push('/introduce/members/other')}
      >
        <BlockText className={props.categoryName === 'other' ? 'active' : null}>
          병원부설
        </BlockText>
      </MemberBlcok>
    </MemberNavWrap>
  );
};

const MemberNavWrap = styled.div`
  width: 833px;
  height: 55px;
  display: grid;
  grid-template-columns: auto auto auto;
  border-radius: 10px;
  overflow: hidden;
  margin: 13vh 0 11vh 0;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    width: 75%;
    margin: 10vh 0 5vh 0;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    margin: 1vh 0 5vh 0;
    margin-top: 80px;
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

const BlockLine = styled.div`
  position: absolute;
  left: 99.8%;
  top: 50%;
  transform: translate(0, -50%);
  width: 0.1px;
  height: 34px;
  background-color: black;
  opacity: 0.15;
  display: flex;

  &.active {
    display: none;
  }
`;

const MemberBlcok = styled.div`
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

export default MemberNav;
