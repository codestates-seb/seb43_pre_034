import styled from "styled-components";
import QuillEditor from "../QuillEditor";
import { PostAnswerBtn } from "../common/Buttons";
import { useState, useEffect } from "react";
import axios from "axios";
import { AnswerChecked, AnswerCheckedAuthor } from "./VotingCompo";
import { AnBottomBtn, AnBottomBtnAuthor } from "./QuestionBottomButton";
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
const AnswerList = ({ anList, currentUser, deleteAnswer, quUserId }) => {
  // 체크된 답변을 관리하는 state
  // const [isCheckedList, setIsCheckedList] = useState([]);

  // const handleCheck = (answerId) => {
  //   const newIsCheckedList = isCheckedList.map((isChecked, index) => index === answerId);
  //   setIsCheckedList(newIsCheckedList);
  //   const [answer] = anList.filter((a) => a.answerId === answerId);
  //   const isChecked = newIsCheckedList[answerId];
  //   axios
  //     .patch(`${process.env.REACT_APP_API_URL}/answers/${currentUser}/${answer.answerId}/check`, { isChecked })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };
  return (
    <AnswerListCon>
      {anList &&
        anList.map((answer) => (
          <li key={answer && answer.answerId} className="answerItem">
            {answer && quUserId === Number(currentUser) ? (
              <AnswerCheckedAuthor
                answerId={answer && answer.userId}
                currentUser={currentUser}
              />
            ) : (
              <AnswerChecked />
            )}

            <div className="answer-body">
              <div
                className="answer-content"
                dangerouslySetInnerHTML={answer && { __html: answer.body }}
              />
              <div className="answer-bottom">
                {answer && Number(currentUser) === answer.userId ? (
                  <AnBottomBtnAuthor
                    anData={answer && answer}
                    currentUser={currentUser}
                    deleteAnswer={deleteAnswer}
                  />
                ) : (
                  <AnBottomBtn anData={answer && answer} />
                )}
                <AnswerAuthor anData={answer && answer} />
              </div>
              <AnComment answerId={answer && answer.answerId} />
            </div>
          </li>
        ))}
    </AnswerListCon>
  );
};
const AnswerCompo = ({ anList, currentUser, deleteAnswer, quUserId }) => {
  return (
    <AnswerCon>
      {anList && (
        <>
          <h2>
            <span className="total-num">{anList.length}</span>
            {anList.length === 1 ? "Answer" : "Answers"}
          </h2>
          <ul className="answer-container">
            <AnswerList
              anList={anList}
              currentUser={currentUser}
              deleteAnswer={deleteAnswer}
              quUserId={quUserId}
            />
          </ul>
        </>
      )}
    </AnswerCon>
  );
};

const AddAnswer = ({ questionId, currentUser, quData }) => {
  const [anForm, setAnForm] = useState({
    userId: "",
    questionId: questionId,
    body: "",
  });

  const [anList, setAnList] = useState([]);
  // get
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/answers/questions/${questionId}`)
      .then((res) => {
        // 데이터 역순으로 정렬
        setAnList(res.data.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [anList]);

  // post
  const onCreateAnswer = (e) => {
    e.preventDefault();
    console.log(axios.defaults.headers.common);
    axios
      .post(`${process.env.REACT_APP_API_URL}/answers`, {
        userId: currentUser,
        questionId: questionId,
        body: anForm.body,
      })
      .then((res) => {
        console.log(res);
        setAnList((prevList) => [...prevList, res.data.data]);
        console.log(anList);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
    setAnForm({
      userId: "",
      questionId: questionId,
      body: "",
    });
  };

  // delete
  const deleteAnswer = ({ answerId, userId, e }) => {
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/answers/${userId}/${answerId}`)
      .then((res) => {
        console.log(res.data);
        setAnList(
          anList.filter(
            (answer) =>
              answer.answerId !== answerId && answer.userId !== userId,
          ),
        );
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AddAnswerCon onSubmit={onCreateAnswer}>
      {anList && (
        <AnswerCompo
          anList={anList}
          currentUser={currentUser}
          deleteAnswer={deleteAnswer}
          quUserId={quData.userId}
        />
      )}
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
