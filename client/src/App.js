import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import NavBar from "./layout/NavBar";

// pages
import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuesion";

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
          {/* NavBar 특정 페이지만 보이기 */}
          <Route element={<NavBar />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* NavBar 특정 페이지 숨기기 */}
          <Route path="/question/ask" element={<AskQuestion />} />
        </Routes>
      </Layout>
    </Container>
  );
}

export default App;
