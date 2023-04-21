import styled from "styled-components";
import { Link } from "react-router-dom";

function Status() {
  const statsCategories = ["reputation", "reached", "answers", "questions"];
  return (
    <Container>
      <LeftSide>
        <div className="stats">
          <div className="stats-sec">Stats</div>
          <div className="categories">
            {statsCategories.map((el, index) => {
              return (
                <Category key={index}>
                  <div className="stats-info">1</div>
                  {el}
                </Category>
              );
            })}
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <div className="about">
          <div className="about-sec">About</div>
          <div className="about-info">
            Your about me section is currently blank. Would you like to add one?
            <LinkProfile to="/">Edit profile</LinkProfile>
          </div>
        </div>
      </RightSide>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex-direction: column;
  }
`;

const LeftSide = styled.section`
  flex: 0 1 18%;
  .stats-sec {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    border-radius: 5px;
    border: 0.1px solid black;
  }
  .stats-info {
    font-size: 1.2rem;
    font-weight: 700;
  }
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    margin-bottom: 5rem;
  }
`;
const RightSide = styled.section`
  flex: 0 1 82%;
  .about {
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
  }
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
    .about {
      margin-left: 0;
    }
  }
`;
const LinkProfile = styled(Link)`
  display: inline;
  text-decoration: none;
  margin-left: 0.3rem;
  margin-bottom: 2rem;
`;
const Category = styled.div`
  width: 5rem;
  margin: 6px;
`;

export default Status;
