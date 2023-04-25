import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <li>
        <Link
          to={`/questions/${anData.questionId}/answer-edit/${anData.answerId}`}
          className="linkToEdit"
        >
          Edit
        </Link>
      </li>
      <li>Follow</li>
    </QuestionBottomBtn>
  );
};

// 작성자가 보는 화면
// 게시글 하단
const QuBottomBtnAuthor = ({ questionId }) => {
  console.log(questionId);
  useEffect(() => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/questions/${questionId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <Link to={"/question/:id/edit"} className="linkToEdit">
        Edit
      </Link>
      <li>Delete</li>
    </QuestionBottomBtn>
  );
};

// 답변 하단
const AnBottomBtnAuthor = () => {
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <Link to={"/question/:id/answeredit/answerid"} className="linkToEdit">
        Edit
      </Link>
      <li>Delete</li>
    </QuestionBottomBtn>
  );
};

export { QuBottomBtn, AnBottomBtn, QuBottomBtnAuthor, AnBottomBtnAuthor };
