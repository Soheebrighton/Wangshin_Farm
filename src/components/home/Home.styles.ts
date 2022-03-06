import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: fuchsia; */
  /* width: 80%; */
  /* height: 100%; */
`;

export const ContainerWrapper = styled.div`
  /* padding: 10px; */
`;

export const Container = styled.div`
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
  user-select: none;
`;
