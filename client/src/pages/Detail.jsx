import styled from "styled-components";
import { AskQuestionBtn } from "../components/common/Buttons";
import {
  VotingContainer,
  VotingOnlyAuthor,
} from "../components/QuestionDetail/VotingCompo";
const DetailPage = styled.div`
  max-width: 1051px;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 100%;
    margin: 24px 16px;
  }
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    width: 100%;
    margin: 24px 16px;
  }
  @media ${({ theme }) => theme.breakpoints.desktopMin} {
    width: 100%;
    margin: 24px 16px;
  }
`;

const DetailHeader = styled.div`
  h1 {
    font-size: 30px;
    color: #3b4045;
  }
  .question-info {
    display: flex;
    flex-direction: row;
  }
  p {
    margin: 13px 18px 25px 0px;
    color: #6a737c;
  }
  .span {
    color: #232629;
  }
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  border-bottom: 1px solid hsl(210, 8%, 90%);
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    h1 {
      font-size: 24px;
      color: #3b4045;
    }
    .question-info {
      font-size: 14px;
    }
  }
`;

function Detail() {
  return (
    <DetailPage>
      <DetailHeader>
        <div className="header">
          <h1>Angular disable button if variables are empty</h1>
          <AskQuestionBtn />
        </div>
        <div className="question-info">
          <p>
            Asked <span className="span">3 days ago</span>
          </p>
          <p>
            Modified <span className="span">yesterday</span>
          </p>
          <p>
            Viewed <span className="span">62 times</span>
          </p>
        </div>
      </DetailHeader>
      <VotingContainer />
      <VotingOnlyAuthor />
    </DetailPage>
  );
}

export default Detail;
