// components
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
