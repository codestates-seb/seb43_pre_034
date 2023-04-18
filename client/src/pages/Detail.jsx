import styled from "styled-components";
import { AskQuestionBtn } from "../components/common/Buttons";
import { VotingContainer } from "../components/QuestionDetail/VotingCompo";
import { SideBar } from "../components/common/Sidebar";

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
    font-size: 14px;
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

const DetailBodyCon = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  section {
    width: 100%;
  }
`;
const DetailBody = () => {
  return (
    <DetailBodyCon>
      <VotingContainer />
      <section>
        <p>hihihihihihihihihiii</p>
      </section>
      <SideBar />
    </DetailBodyCon>
  );
};
function Detail() {
  return (
    <DetailPage>
      <DetailHeader>
        <div className="header">
          <h1>Angular disable button if variables are empty</h1>
          <AskQuestionBtn />
        </div>
        <section className="question-info">
          <p>
            Asked <span className="span">3 days ago</span>
          </p>
          <p>
            Modified <span className="span">yesterday</span>
          </p>
          <p>
            Viewed <span className="span">62 times</span>
          </p>
        </section>
      </DetailHeader>
      <DetailBody />
    </DetailPage>
  );
}

export default Detail;
