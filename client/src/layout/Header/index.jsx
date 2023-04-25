// eslint-disable-line no-unused-vars
import { useState } from "react";
import styled from "styled-components";

// components
import TitleLogo from "./TitleLogo";
import LeftList from "./LeftList";
import SignNav from "./SignNav";
import Search from "./Search";
import UserNav from "./UserNav";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.color.headerBg};
  justify-content: center;
  align-items: center;
  border-top: 3px solid #f48225;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  -webkit-box-align: center;
  z-index: 1;
  position: fixed;
  top: 0;

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    justify-content: space-between;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  /* margin: 0 auto; */
  width: ${(props) => props.theme.widthSize.contentMax};
  height: 100%;
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <HeaderContainer>
      <StyledHeader>
        <>
          <TitleLogo />
          <LeftList isLogin={isLogin} />
          <Search />
          {isLogin ? <UserNav /> : <SignNav />}
        </>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
