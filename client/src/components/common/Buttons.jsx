import styled from "styled-components";

const ButtonCompo = styled.button`
  height: 38px;
  background-color: #0a95ff;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
`;

// 질문 추가 버튼
const AskQuestionBtn = ({ handleOnclick }) => {
  return (
    <ButtonCompo onClick={handleOnclick || null}>
      <span>Ask Question</span>
    </ButtonCompo>
  );
};
// 질문 등록 버튼
const PostAnswerBtn = () => {
  return (
    <ButtonCompo>
      <span>Post Your Answer</span>
    </ButtonCompo>
  );
};
// 수정 저장 버튼
const EditSaveBtn = ({ onClick }) => {
  return (
    <ButtonCompo onClick={onClick || null}>
      <span>Save Edit</span>
    </ButtonCompo>
  );
};

const ButtonLogin = styled.button`
  width: 278px;
  height: 37px;
  border-radius: 5px;
  border: none;
  margin-bottom: 8px;
  cursor: pointer;
`;

const LoginBtn = ({ children, ...rest }) => {
  return <ButtonLogin {...rest}>{children}</ButtonLogin>;
};

const GlobalBtn = styled.button`
  background: #0a95ff;
  color: #fff;
  border: solid 1px #7aa7c7;
  border-radius: 3px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  cursor: pointer;
  font-size: 13px;
`;

/**
 * 공통적으로 사용하는 파란색 배경의 버튼 컴포넌트
 * @property {string} height 높이
 * @property {string} width 너비
 * @property {string} padding 패딩
 * @property {string} buttonText 텍스트
 * @property {function} onClick 이벤트 리스너
 */

const BluebgBtn = ({ height, width, padding, buttonText, onClick }) => {
  return (
    <GlobalBtn
      width={width || "100%"}
      height={height || "38px"}
      padding={padding || "10.4px"}
      onClick={onClick}
    >
      {buttonText}
    </GlobalBtn>
  );
};

const MyPageBtn = styled.button`
  background: white;
  color: #525960;
  border-radius: 2rem;
  border: none;
  padding: 0.8rem;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: hsl(206, 100%, 52%);
  }
`;
/**
 * MyPapge에서 사용하는 공통적인 버튼 컴포넌트
 * @property {string} children 버튼 텍스트
 */
const MyPageNavBtn = ({ children }) => {
  return <MyPageBtn>{children}</MyPageBtn>;
};

export {
  AskQuestionBtn,
  PostAnswerBtn,
  LoginBtn,
  BluebgBtn,
  EditSaveBtn,
  MyPageNavBtn,
  ButtonCompo,
};
