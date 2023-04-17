import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";

// pages
import Home from "./pages/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${(props) => props.theme.color.bg};
`;

function App() {
  return (
    <Container>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Container>
  );
}

export default App;
