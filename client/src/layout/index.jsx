// components
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
