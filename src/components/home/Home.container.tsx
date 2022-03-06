import styled from "@emotion/styled";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: fuchsia; */
  /* width: 80%; */
  /* height: 100%; */
`;

const ContainerWrapper = styled.div`
  /* padding: 10px; */
`;

const Container = styled.div`
  font-size: 1.6rem;
  width: 300px;
  height: 300px;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 20px 10px;
  cursor: pointer;
`;

export default function Home() {
  return (
    <>
      <Background>
        <Wrapper>
          <ContainerWrapper>
            <Container>농장소개</Container>
            <Container>상품소개</Container>
          </ContainerWrapper>
          <ContainerWrapper>
            <Container>주문하기</Container>
            <Container>문의하기</Container>
          </ContainerWrapper>
        </Wrapper>
      </Background>
    </>
  );
}
