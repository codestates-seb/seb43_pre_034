// components
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
