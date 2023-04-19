import styled from "styled-components";
import { AskQuestionBtn } from "../components/common/Buttons";
import {
  VotingChecked,
  VotingContainer,
} from "../components/QuestionDetail/VotingCompo";
import { SideBar } from "../components/common/Sidebar";
import { BottomBtn } from "../components/QuestionDetail/QuestionBottomButton";
import { QuestionAuthor } from "../components/QuestionDetail/AuthorInfo";
import { Comment } from "../components/QuestionDetail/Comment";

// styled-components
// 상세페이지-전체 구성
const DetailPage = styled.div`
  max-width: 1100px;
  border-left: 1px solid #d6d9dc;
  padding: 24px;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 100%;
    border: none;
  }
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    width: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.desktopMin} {
    width: 100%;
  }
`;
// 상세페이지-헤더
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
      font-size: 12px;
    }
  }
`;
// 상세페이지-본문(질문글)
const DetailBodyCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    display: flex;
    flex-direction: column;
  }
  .question-answer-page {
    display: flex;
    flex-direction: column;
  }
  .question {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .question-body {
    padding-right: 16px;
    width: 100%;
    margin: 16px 0px;
  }
  .question-bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 4px;
    margin: 16px 0px;
    @media (max-width: 456px) {
      display: flex;
      flex-direction: column;
    }
  }
  .sidebar {
    height: 100vh;
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      width: 100%;
    }
  }
`;
// 답변 전체 구성
const AnswerCompo = styled.section`
  width: 100%;
  padding-top: 10px;
  h2 {
    font-size: 20px;
    .total-num {
      margin-right: 8px;
    }
  }
  .answer-container {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid hsl(210, 8%, 90%);
    .answer-body {
      vertical-align: baseline;
      padding-right: 16px;
      width: 100%;
      margin: 16px 0px;
    }
    .answer-bottom {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 4px;
      margin: 16px 0px;
      @media (max-width: 456px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

// components
// 상세페이지 - 질문글
const DetailBody = () => {
  return (
    <DetailBodyCon>
      <div className="question-answer-page">
        <section className="question">
          <VotingContainer />
          <section className="question-body">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, earum tempore hic quaerat blanditiis molestias veniam
              incidunt, in deserunt odit officia assumenda quo mollitia amet
              vero odio quas expedita eos.
            </p>
            <div className="question-bottom">
              <BottomBtn />
              <QuestionAuthor />
            </div>
            <Comment />
          </section>
        </section>
        <DetailAnswer />
      </div>
      <section className="sidebar">
        <SideBar />
      </section>
    </DetailBodyCon>
  );
};

// 상세페이지 - 답변
const DetailAnswer = () => {
  return (
    <AnswerCompo>
      <h2>
        <span className="total-num">1</span>Answer
      </h2>
      <section className="answer-container">
        <VotingChecked />
        <section className="answer-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem sint fugit alias vero delectus ex et, rem accusantium
            quis aliquam dicta, deleniti dolore expedita voluptate quisquam,
            quibusdam tempora! Cumque, accusamus.
          </p>
          <div className="answer-bottom">
            <BottomBtn />
            <QuestionAuthor />
          </div>
          <Comment />
        </section>
      </section>
    </AnswerCompo>
  );
};

const Detail = () => {
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
};

export default Detail;
