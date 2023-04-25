import styled from "styled-components";
import { VotingChecked } from "./VotingCompo";
import { AnBottomBtn } from "./QuestionBottomButton";
import { AnswerAuthor } from "./AuthorInfo";
import { AnComment } from "./Comment";
import { useState, useEffect } from "react";
import axios from "axios";

// styled component
// answer
const AnswerCon = styled.section`
  width: 100%;
  padding-top: 10px;
  h2 {
    font-size: 20px;
    .total-num {
      margin-right: 8px;
    }
  }
`;

// answer list
const AnswerListCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  .answerItem {
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    :last-of-type {
      margin-bottom: 0px;
    }
  }
  .answer-body {
    display: flex;
    flex-direction: column;
    vertical-align: baseline;
    padding-right: 16px;
    width: 100%;
    margin: 16px 0px;
    .answer-content {
      min-height: 80px;
      font-size: 18px;
      font-weight: 400;
      padding-left: 10px;
    }
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
`;
// component
// answer list
const AnswerList = ({ anData }) => {
  return (
    <AnswerListCon>
      {anData.map((answer) => (
        <li key={answer.answerId} className="answerItem">
          <VotingChecked />
          <div className="answer-body">
            <p className="answer-content">{answer.body}</p>
            <div className="answer-bottom">
              <AnBottomBtn anData={answer && answer} />
              <AnswerAuthor anData={answer && answer} />
            </div>
            <AnComment answerId={answer.answerId} />
          </div>
        </li>
      ))}
    </AnswerListCon>
  );
};
const AnswerCompo = ({ questionId }) => {
  const [anData, setAnData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/answers/questions/${questionId}`)
      .then((res) => {
        setAnData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [questionId]);
  // console.log(anData);
  return (
    <AnswerCon>
      {anData && (
        <>
          <h2>
            <span className="total-num">{anData.length}</span>
            {anData.length === 1 ? "Answer" : "Answers"}
          </h2>
          <ul className="answer-container">
            <AnswerList anData={anData} />
          </ul>
        </>
      )}
    </AnswerCon>
  );
};

export default AnswerCompo;
