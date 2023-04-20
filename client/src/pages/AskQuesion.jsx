import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as AskBackground } from "../assets/images/ask_background.svg";
import { BluebgBtn } from "../components/common/Buttons";

// components
import WriteGuide from "../components/AskQuestion/WriteGuide";
import QuillEditor from "../components/QuillEditor";
import AskInput from "../components/AskQuestion/AskInput";
import AskTip from "../components/AskQuestion/AskTip";

const AskContainer = styled.main`
  width: 100%;
  display: flex;
  background: #f8f9f9;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  height: 100%;

  .ask_content {
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 1rem;
    padding: 0 24px;
    flex-direction: column;
    max-width: ${(props) => props.theme.widthSize.contentMax};
  }
  @media screen and (max-width: 1100px) {
    display: block;
    width: 100%;
    max-width: none;
  }
`;

const AskTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 130px;
  justify-content: space-between;

  .ask_title {
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: 600;
    color: #232629;
  }
  .is_display {
    display: block;
  }

  @media screen and (max-width: 1050px) {
    .is_display {
      display: none;
    }
  }
`;

const EditorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EditorBox = styled.div`
  flex: 0 1 70%;
  min-width: 737px;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border: 1px solid #e0dfdf;
  background: #fff;
  border-radius: 3px;

  .ask_title {
    font-size: 15px;
    font-weight: bold;
    color #0C0D0E;
  }
  p {
    font-size: 13px;
    color: #3B4045;
    margin: 7px 0px 10px 0;
    white-space: normal;
  }
  .padding_bottombox {
    padding: 1.6rem;
  }
  @media screen and (max-width: 1100px) {
    max-width: 1100px;
    width: 100%;
    min-width: 0;
  }
`;

const SubmitCancelBtnDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 6rem;
  justify-content: flex-start;

  .cancal_btn {
    background: none;
    border-radius: 3px;
    color: #c22e32;
    width: 110px;
    height: 37px;
    padding: 10.4px;
    border: none;
    cursor: pointer;
    font-size: 13px;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;

    &:hover {
      background: #fdf2f2;
    }
    &:active {
      background: hsl(358, 76%, 90%);
      padding: 0 10.4px;
      border: 3px solid hsl(358, 74%, 83%);
    }
  }
`;

const AskQuestion = () => {
  let [isTitle, setIsTitle] = useState(false);
  return (
    <AskContainer>
      <div className="ask_content">
        <AskTop>
          <span className="ask_title">Ask a public question</span>
          <AskBackground className="is_display" />
        </AskTop>
        <WriteGuide />
        <AskInput />
        <EditorContainer>
          <AskTip
            title="Introduce the problem"
            content="Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself."
          />
          <EditorBox>
            <div className="ask_title">
              What are the details of your problem?
            </div>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <div>
              <QuillEditor EditorWidth={"100%"} EditorHeight={"200px"} />
            </div>
            <div className="padding_bottombox" />
            <BluebgBtn buttonText="Next" width="51px" height="37px" />
          </EditorBox>
        </EditorContainer>
        <EditorContainer>
          <AskTip
            title="Expand on the problem"
            content="Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself."
            content2="Not all questions benefit from including code, but if your problem is better understood with code you’ve written, you should include a minimal, reproducible example."
            content3="Please make sure to post code and errors as text directly to the question (and not as images), and format them appropriately."
          />
          <EditorBox>
            <div className="ask_title">
              What did you try and what were you expecting?
            </div>
            <p>
              Describe what you tried, what you expected to happen, and what
              actually resulted. Minimum 20 characters.
            </p>
            <div>
              <QuillEditor EditorWidth={"100%"} EditorHeight={"200px"} />
            </div>
            <div className="padding_bottombox" />
            <BluebgBtn buttonText="Next" width="51px" height="37px" />
          </EditorBox>
        </EditorContainer>
        <AskInput />
        <SubmitCancelBtnDiv>
          <BluebgBtn
            buttonText="Post your question"
            width="140px"
            height="37px"
          />
          <button className="cancal_btn">Discard draft</button>
        </SubmitCancelBtnDiv>
      </div>
    </AskContainer>
  );
};

export default AskQuestion;
