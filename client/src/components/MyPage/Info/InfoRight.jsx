import styled from "styled-components";
import { Link } from "react-router-dom";
import { MY_PAGE_URL_PATH } from "../../../constants/constant";
function InfoRight() {
  return (
    <AboutSection>
      <div className="about-sec">About</div>
      <div className="about-info">
        Your about me section is currently blank. Would you like to add one?
        <LinkProfile to={MY_PAGE_URL_PATH.USERS_PROFILE_EDIT}>
          Edit profile
        </LinkProfile>
      </div>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  .about-sec {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .about-info {
    font-size: 1.1rem;
    padding: 32px;
    text-align: center;
    border-radius: 5px;
    margin-top: 1rem;
    padding-bottom: 3rem;
    background-color: #e1dbdb;
  }
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    margin-left: 0;
  }
`;

const LinkProfile = styled(Link)`
  display: inline;
  text-decoration: none;
  margin-left: 0.3rem;
  margin-bottom: 2rem;
`;
export default InfoRight;
