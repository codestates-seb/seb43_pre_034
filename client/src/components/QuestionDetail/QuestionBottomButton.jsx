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
`;

// 일반 회원이 보는 화면
const BottomBtn = () => {
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <li>Edit</li>
      <li>Follow</li>
    </QuestionBottomBtn>
  );
};

// 작성자가 보는 화면
const BottomBtnAuthor = () => {
  return (
    <QuestionBottomBtn>
      <li>Share</li>
      <li>Edit</li>
      <li>Delete</li>
    </QuestionBottomBtn>
  );
};
export { BottomBtn, BottomBtnAuthor };
