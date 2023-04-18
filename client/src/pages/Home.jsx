import styled from "styled-components";
import ContentHead from "../components/MainPage/ContentHead";

const Container = styled.div`
  flex: 0 1 calc(1264px - 164px);
  display: flex;
  height: 100vh;
  background: white;
`;

const Home = () => {
  return (
    <Container>
      <ContentHead></ContentHead>
    </Container>
  );
};

export default Home;
