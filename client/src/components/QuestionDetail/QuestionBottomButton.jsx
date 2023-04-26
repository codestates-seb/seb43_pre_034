import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

// 게시글, 답변 아래 Share Edit Follow/Delete 기본 구조
const QuestionBottomBtn = styled.ul`
  display: flex;
  flex-direction: row;
  color: #6a737c;
  width: 130px;
  height: 26px;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .linkToEdit {
    text-decoration: none;
    color: #6a737c;
    border: none;
    background-color: inherit;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    /* padding-top: 3px; */
  }
`;

// 일반 회원이 보는 화면
// 게시글 하단
const QuBottomBtn = ({ questionId }) => {
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <li>
        <Link to={`/questions/${questionId}/edit`} className="linkToEdit">
          Edit
        </Link>
      </li>
      <li>Follow</li>
    </QuestionBottomBtn>
  );
};

// 답변 하단
const AnBottomBtn = ({ anData }) => {
  const nav = useNavigate();
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <li>
        <button
          className="linkToEdit"
          onClick={() =>
            nav(
              `/questions/${anData.questionId}/answer-edit/${anData.answerId}`,
            )
          }
        >
          Edit
        </button>
      </li>
      <li>Follow</li>
    </QuestionBottomBtn>
  );
};

// 작성자가 보는 화면
// 게시글 하단
const QuBottomBtnAuthor = ({ questionId, deleteQu }) => {
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <Link to={`/questions/${questionId}/edit`} className="linkToEdit">
        Edit
      </Link>
      <li>
        <button className="linkToEdit" onClick={() => deleteQu(questionId)}>
          Delete
        </button>
      </li>
    </QuestionBottomBtn>
  );
};

// 답변 하단
const AnBottomBtnAuthor = ({ anData, currentUser, deleteAnswer }) => {
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <Link
        to={`/questions/${anData.questionId}/answer-edit/${anData.answerId}`}
        className="linkToEdit"
      >
        Edit
      </Link>
      <li>
        <button
          className="linkToEdit"
          onClick={(e) =>
            deleteAnswer({
              answerId: anData.answerId,
              userId: currentUser,
              e: e,
            })
          }
        >
          Delete
        </button>
      </li>
    </QuestionBottomBtn>
  );
};

export { QuBottomBtn, AnBottomBtn, QuBottomBtnAuthor, AnBottomBtnAuthor };
