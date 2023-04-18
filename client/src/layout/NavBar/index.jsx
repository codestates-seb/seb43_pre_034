import styled from "styled-components";
import { GlobeSVG } from "../../assets/NavSvg";

const NavBarContainer = styled.nav`
  display: flex;
  width: ${(props) => props.theme.widthSize.navbar};
`;

const NavOl = styled.ol`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  );
};

export default NavBar;
