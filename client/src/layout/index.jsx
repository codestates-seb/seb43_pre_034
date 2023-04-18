import styled from "styled-components";

// components
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";

const Container = styled.div`
  display: flex;
  width: ${(props) => props.theme.widthSize.contentMax};
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <NavBar />
        <Main>{children}</Main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
