import styled from "styled-components";
import ContentPart from "../components/MainPage/Content";
const Container = styled.div`
  /* max-width:calc(100%-164px) */
  flex: 0 1 calc(1264px - 164px);
  display: flex;
  height: 100vh;
  background: white;
`;

const Home = () => {
  return (
    <Container>
      <ContentPart />
    </Container>
  );
};

export default Home;
