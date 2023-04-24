import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as AskBackground } from "../assets/images/ask_background.svg";
import { BluebgBtn } from "../components/common/Buttons";

// components
import WriteGuide from "../components/AskQuestion/WriteGuide";
import QuillEditor from "../components/QuillEditor";
import AskTip from "../components/AskQuestion/AskTip";
import AskDeleteModal from "../components/AskQuestion/AskDeleteModal";
import AskTags from "../components/AskQuestion/AskTags";

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
  .write_form {
    z-index: 2;
    opacity: 0.3 !important;
    cursor: not-allowed !important;
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

const AskInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;

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
  > input {
    border: 1px solid #ced2d5;
    border-radius: 3px;
    width: 97%;
    padding: 0.45rem 0.5rem;
    margin-bottom: 1rem;
    ::placeholder {
      color: lightgray;
    }
    &:focus {
      outline: none !important;
      text-align: left;
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

const SubmitCancelBox = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 6rem;
  justify-content: flex-start;
`;

const AskQuestion = () => {
  let [isClicked, setIsClicked] = useState("titleClick");
  let [askForm, setAskForm] = useState({
    title: "",
    content: "",
    tags: [],
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("askForm >> ", askForm);

    axios
      .post(`${process.env.REACT_APP_API_URL}/questions`, {
        title: askForm.title,
        body: askForm.content,
        userId: 3,
      })
      .then((res) => {
        console.log(res.data.questionId);
        window.location.href = `${res.data.questionId}`;
      })
      .catch((err) => {
        console.log(err);
      });

    setAskForm({ title: "", content: "", tags: [] });
  };

  return (
    <AskContainer>
      <form onSubmit={onSubmitHandler} className="ask_content">
        <AskTop>
          <span className="ask_title">Ask a public question</span>
          <AskBackground className="is_display" />
        </AskTop>
        <WriteGuide />
        <AskInputContainer>
          {isClicked === "titleClick" ? (
            <AskTip
              title="Writing a good title"
              content="Your title should summarize the problem."
              content2="You might find that you have a better idea of your title after
          writing out the rest of the question."
            />
          ) : null}
          <TitleInputBox>
            <label htmlFor="title" className="ask_title">
              Title
            </label>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <input
              type="text"
              name="title"
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              value={askForm.title}
              onChange={(e) =>
                setAskForm({ ...askForm, title: e.target.value })
              }
            />
            {isClicked === "titleClick" ? (
              <BluebgBtn
                buttonText="Next"
                width="51px"
                height="37px"
                onClick={() => setIsClicked("contentClick")}
              />
            ) : null}
          </TitleInputBox>
        </AskInputContainer>
        <EditorContainer
          className={
            isClicked === "contentClick" || askForm.content
              ? null
              : "write_form"
          }
        >
          {isClicked === "contentClick" ? (
            <AskTip
              title="Introduce the problem"
              content="Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself."
            />
          ) : null}
          <EditorBox>
            <label htmlFor="content" className="ask_title">
              What are the details of your problem?
            </label>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <div>
              <QuillEditor
                className={
                  isClicked === "contentClick" || askForm.content
                    ? null
                    : "write_form"
                }
                disabled={isClicked === "contentClick" ? false : true}
                editorWidth={"100%"}
                editorHeight={"200px"}
                inputValue={askForm.content}
                setEditorText={setAskForm}
                editorText={askForm}
              />
            </div>
            <div className="padding_bottombox" />
            {isClicked === "contentClick" ? (
              <BluebgBtn
                buttonText="Next"
                width="51px"
                height="37px"
                onClick={() => setIsClicked("tagClick")}
              />
            ) : null}
          </EditorBox>
        </EditorContainer>
        <AskInputContainer
          className={isClicked === "tagClick" ? null : "write_form"}
        >
          {isClicked === "tagClick" ? (
            <AskTip
              title="Adding tags"
              content="Tags help ensure that your question will get attention from the right people."
              content2="Tag things in more than one way so people can find them more easily. Add tags for product lines, projects, teams, and the specific technologies or languages used."
            />
          ) : null}
          <TitleInputBox>
            <label htmlFor="tags" className="ask_title">
              Tags
            </label>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <AskTags
              askForm={askForm}
              setAskForm={setAskForm}
              isClicked={isClicked}
            />
            {isClicked === "tagClick" ? (
              <BluebgBtn
                tyoe="submit"
                buttonText="Post your question"
                width="140px"
                height="37px"
              />
            ) : null}
          </TitleInputBox>
        </AskInputContainer>
        <SubmitCancelBox>
          <AskDeleteModal />
        </SubmitCancelBox>
      </form>
    </AskContainer>
  );
};

export default AskQuestion;
