import styled from 'styled-components';
import { useRouter } from 'next/router';

const VetNav = props => {
  const router = useRouter();

  return (
    <VetNavWrap>
      <VetBlock onClick={() => router.push('/introduce/members/vet/1')}>
        <VetBlockBorder
          className={props.categoryName === 'vet1' ? 'active' : null}
        />
        <VetImg src='/image/member-vet1.jpg' />
      </VetBlock>
      <VetBlock onClick={() => router.push('/introduce/members/vet/2')}>
        <VetBlockBorder
          className={props.categoryName === 'vet2' ? 'active' : null}
        />
        <VetImg src='/image/member-vet1.jpg' />
      </VetBlock>
      <VetBlock></VetBlock>
      <VetBlock></VetBlock>
      <VetBlock></VetBlock>
      <VetBlock></VetBlock>
      <VetBlock></VetBlock>
      <VetBlock></VetBlock>
    </VetNavWrap>
  );
};

const VetNavWrap = styled.div`
  width: 913px;
  height: 104px;
  display: grid;
  grid-template-columns: 12% 12% 12% 12% 12% 12% 12% 12%;
  justify-content: space-between;
  margin-bottom: 5vh;

  @media screen and (max-width: 1700px) {
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 24% 24% 24% 24%;
    width: 65%;
    grid-gap: 20px 0;
    margin-bottom: 15vh;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    height: 80px;
    grid-gap: 10px 0;
    margin-bottom: 13vh;
  }
`;

const VetBlock = styled.div`
  width: 104px;
  height: 104px;
  background-color: #e0e0e0;
  display: flex;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 70px;
    height: 70px;
  }
`;

const VetBlockBorder = styled.div`
  display: none;

  &.active {
    display: flex;
    width: 95px;
    height: 95px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 7px solid #a48a79;
  }

  @media screen and (max-width: 700px) {
    &.active {
      width: 63px;
      height: 63px;
      border: 6px solid #a48a79;
    }
  }
`;

const VetImg = styled.img``;

export default VetNav;
