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
import MyPage from "./pages/MyPage";
import MyPageEdit from "./pages/MyPageEdit";
//URL PATH
import { MY_PAGE_URL_PATH } from "./constants/constant";

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
            <Route path="/questions/:id" element={<Detail />} />
            <Route path="/questions/:id/edit" element={<EditQuestion />} />
            <Route
              path="/questions/:id/answeredit/:answerid"
              element={<EditAnswer />}
            />
            <Route path={MY_PAGE_URL_PATH.USERS_PROFILE} element={<MyPage />} />
            <Route
              path={MY_PAGE_URL_PATH.USERS_PROFILE_EDIT}
              element={<MyPageEdit />}
            />
          </Route>
          {/* NavBar 특정 페이지 숨기기 */}
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Container>
  );
}

export default App;
