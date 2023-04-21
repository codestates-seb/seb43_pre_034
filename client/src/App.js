import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import NavBar from "./layout/NavBar";
// pages
import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuesion";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import { EditQuestion, EditAnswer } from "./pages/Edit";
import { AnswerAuthor } from "./components/QuestionDetail/AuthorInfo";
import MyPage from "./pages/MyPage";

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
            <Route path="/question/:id" element={<Detail />} />
            <Route path="question/:id/edit" element={<EditQuestion />} />
            <Route
              path="/question/:id/answeredit/:answerid"
              element={<EditAnswer />}
            />
            <Route path="/users/info" element={<MyPage />} />
          </Route>
          {/* NavBar 특정 페이지 숨기기 */}
          <Route path="/question/ask" element={<AskQuestion />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Container>
  );
}

export default App;
