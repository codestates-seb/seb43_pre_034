import styled from "styled-components";
import { ReactComponent as AskBackground } from "../assets/images/ask_background.svg";

const AskContainer = styled.section`
  display: flex;
  width: calc(1264px - 164px);
  height: 100%;
`;

const AskTop = styled.div`
  padding: 2rem;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;

  .ask_title {
    font-size: 30px;
    font-weight: 600;
    color: #232629;
  }
`;

const AskQuestion = () => {
  return (
    <AskContainer>
      <AskTop>
        <span className="ask_title">Ask a public question</span>
        <AskBackground />
      </AskTop>
    </AskContainer>
  );
};

export default AskQuestion;
