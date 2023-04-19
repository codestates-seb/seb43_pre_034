import styled from "styled-components";
import ContentPart from "../components/MainPage/Content";
import { SideBar } from "../components/common/Sidebar";
const Container = styled.div`
  flex: 0 1 calc(1264px - 164px);
  display: flex;
  /* height: 100%; */
  background: white;
`;

const Home = () => {
  return (
    <Container>
      <ContentPart />
      <Section>
        <SideBar className="side-bar" />
      </Section>
    </Container>
  );
};

const Footer = styled.div`
  width: 100vw;
`;
const Section = styled.div`
  height: 100vh;
`;

export default Home;
