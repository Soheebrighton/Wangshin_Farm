import { useRouter } from "next/router";
import * as S from "./Home.styles";

export default function Home() {
  const router = useRouter();

  const onClickAbout = () => {
    router.push("/about/");
  };

  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.ContainerWrapper>
            <S.Container onClick={onClickAbout}>농장소개</S.Container>
            <S.Container>상품소개</S.Container>
          </S.ContainerWrapper>
          <S.ContainerWrapper>
            <S.Container>주문하기</S.Container>
            <S.Container>문의하기</S.Container>
          </S.ContainerWrapper>
        </S.Wrapper>
      </S.Background>
    </>
  );
}
