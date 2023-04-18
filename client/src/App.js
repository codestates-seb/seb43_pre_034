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
          {/* NavBar 특정 페이지만 보이기 */}
          <Route element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Detail />} />
          </Route>
          {/* NavBar 특정 페이지 숨기기 */}
          <Route path="/question/ask" element={<AskQuestion />} />
          <Route path="/users/login" element={<Login />} />
        </Routes>
      </Layout>
    </Container>
  );
}

export default App;
