import styled from "styled-components";

//loading 추가
function InfoLeft({ statsCategories, score, questionCount, answerCount }) {
  return (
    <StatsSection>
      <div className="stats-sec">Stats</div>
      <div className="categories">
        {statsCategories.map((el, index) => {
          return (
            <Category key={index}>
              <div className="stats-info">
                {el === "answers"
                  ? answerCount
                  : el === "questions"
                  ? questionCount
                  : el === "reputation"
                  ? score
                  : 0}
              </div>
              {el}
            </Category>
          );
        })}
      </div>
    </StatsSection>
  );
}

const StatsSection = styled.section`
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

const Category = styled.div`
  width: 5rem;
  margin: 6px;
`;
export default InfoLeft;
