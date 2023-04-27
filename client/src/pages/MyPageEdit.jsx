import styled from "styled-components";
import Profile from "../components/MyPage/Profile";
import Nav from "../components/MyPage/Nav";
import Status from "../components/MyPage/Status";

const MyPageEdit = () => {
  const selectedNav = "Settings";
  return (
    <Container>
      <Profile />
      <Nav selectedNav={selectedNav} />
      <Status selectedNav={selectedNav} />
    </Container>
  );
};

const Container = styled.main`
  max-width: 1100px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: white;
  padding: 1rem;
  border-left: 1px solid black;
`;

export default MyPageEdit;
