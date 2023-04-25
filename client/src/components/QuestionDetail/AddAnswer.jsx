import styled from "styled-components";
import QuillEditor from "../QuillEditor";
import { PostAnswerBtn } from "../common/Buttons";
import { useState, useEffect } from "react";
import axios from "axios";
import { VotingChecked } from "./VotingCompo";
import { AnBottomBtn } from "./QuestionBottomButton";
import { AnswerAuthor } from "./AuthorInfo";
import { AnComment } from "./Comment";

// styled component
const AddAnswerCon = styled.form`
  width: 100%;
  h2 {
    font-size: 20px;
    padding-top: 20px;
    margin-bottom: 19px;
  }
  .answer-post-btn {
    margin-top: 60px;
  }
`;
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
const AnswerList = ({ anList }) => {
  return (
    <AnswerListCon>
      {anList.map((answer) => (
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
const AnswerCompo = ({ anList }) => {
  return (
    <AnswerCon>
      {anList && (
        <>
          <h2>
            <span className="total-num">{anList.length}</span>
            {anList.length === 1 ? "Answer" : "Answers"}
          </h2>
          <ul className="answer-container">
            <AnswerList anList={anList} />
          </ul>
        </>
      )}
    </AnswerCon>
  );
};

const AddAnswer = ({ questionId, quData }) => {
  const [anForm, setAnForm] = useState({
    userId: 1,
    questionId: questionId,
    body: "",
  });

  const [anList, setAnList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/answers/questions/${questionId}`)
      .then((res) => {
        setAnList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [anList]);
  const onCreateAnswer = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/answers`, {
        userId: 1,
        questionId: questionId,
        body: anForm.body,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setAnForm({
      userId: 1,
      questionId: questionId,
      body: "",
    });
  };

  return (
    <AddAnswerCon onSubmit={onCreateAnswer}>
      {anList && <AnswerCompo anList={anList} />}
      <h2>Your Answer</h2>
      <QuillEditor
        editorWidth={"100%"}
        editorHeight={"200px"}
        inputValue={anForm.body}
        setEditorText={setAnForm}
        editorText={anForm}
      />
      <div className="answer-post-btn">
        <PostAnswerBtn type="submit" />
      </div>
    </AddAnswerCon>
  );
};
export default AddAnswer;
