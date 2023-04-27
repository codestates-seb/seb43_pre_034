import styled from "styled-components";
import Profile from "../components/MyPage/Profile";
import Nav from "../components/MyPage/Nav";
import Status from "../components/MyPage/Status";
const MyPage = () => {
  const selectedNav = "Profile";

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
  /* flex: 0 1 calc(1264px - 164px); */
  min-height: 100vh;
  height: 100%;
  background: white;
  //media query tablet일 떄는 padding 자체가 없어야 한다.
  padding: 1rem;
  border-left: 1px solid black;
`;

export default MyPage;
