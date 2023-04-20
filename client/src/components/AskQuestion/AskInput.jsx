import styled from "styled-components";
import { BluebgBtn } from "../common/Buttons";
import AskTip from "./AskTip";

const AskInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TitleInputBox = styled.div`
  flex: 0 1 70%;
  padding: 1.5rem;
  flex-direction: column;
  min-width: 737px;
  border-radius: 3px;
  background: #fff;
  border: 1px solid #e0dfdf;
  height: 100%;
  min-height: 172px;

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
  input {
    border: 1px solid #ced2d5;
    border-radius: 3px;
    width: 97%;
    padding: 0.45rem 0.5rem;
    margin-bottom: 0.5rem;
    ::placeholder {
      color: lightgray;
    }
    &:focus {
      outline: none !important;
      text-align: lefimport { useState } from "react";
t;
      border: 1px solid #7aa7c7;
      box-shadow: 0 0 2px 4px #cbe4f6;
    }
  }

  @media screen and (max-width: 1100px) {
    display: 0 1 1052px;
    width: 100%;
    min-width: 0;
    min-height: 0;
  }
`;

const AskInput = () => {
  return (
    <AskInputContainer>
      <AskTip
        title="Writing a good title"
        content="Your title should summarize the problem."
        content2="You might find that you have a better idea of your title after
          writing out the rest of the question."
      />
      <TitleInputBox>
        <div className="ask_title">Title</div>
        <p>
          Be specific and imagine you’re asking a question to another person.
        </p>
        <input
          type="text"
          name="title"
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        />
        <BluebgBtn buttonText="Next" width="51px" height="37px" />
      </TitleInputBox>
    </AskInputContainer>
  );
};

export default AskInput;
