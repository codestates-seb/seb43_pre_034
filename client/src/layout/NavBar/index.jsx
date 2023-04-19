import styled from "styled-components";
import { GlobeSVG } from "../../assets/NavSvg";
import { Outlet } from "react-router";

const Container = styled.div`
  max-width: ${(props) => props.theme.widthSize.contentMax};
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavBarContainer = styled.nav`
  flex: 0 0 ${(props) => props.theme.widthSize.navbar};
  display: flex;
  height: 100%;
  top: 50px;
  position: sticky;

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    display: none;
  }
`;

const NavOl = styled.ol`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #6a737c;
  font-size: 11px;

  .title {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
  .common {
    font-size: 13px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 400;
    padding: 0.6rem 0.5rem 0.6rem 2rem;
    cursor: pointer;
  }

  .selcted {
    color: #0c0d0e;
    font-weight: bold;
    background: #f1f2f3;
    gap: 0.3rem;
    border: none;
    border-right: 3px solid #f48225;
    padding: 0.6rem 0.5rem 0.6rem 0.5rem;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavBarContainer>
        <NavOl>
          <li className="title">PUBLIC</li>
          <li className="common selcted">
            <GlobeSVG />
            Questions
          </li>
          <li className="common">Tags</li>
          <li className="common">Users</li>
          <li className="common">Companies</li>
        </NavOl>
      </NavBarContainer>
      <Outlet />
    </Container>
  );
};

export default NavBar;
