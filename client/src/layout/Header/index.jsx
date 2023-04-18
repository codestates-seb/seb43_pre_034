import styled from "styled-components";

// components
import ProductsNav from "./ProductsNav";
import SignNav from "./SignNav";
import Search from "./Search";
import TitleLogo from "./TitleLogo";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.color.headerBg};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    justify-content: space-between;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: ${(props) => props.theme.widthSize.contentMax};
  height: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <TitleLogo />
        <ProductsNav />
        <Search />
        <SignNav />
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
