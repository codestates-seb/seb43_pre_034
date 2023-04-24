import styled from "styled-components";
import QuillEditor from "../QuillEditor";
import { PostAnswerBtn } from "../common/Buttons";
import { useState } from "react";
import axios from "axios";

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

// component
const AddAnswer = ({ questionId, quData }) => {
  const [answerData, setAnswerData] = useState({
    userId: 1,
    questionId: questionId,
    userId: 1,
    body: "",
  });

  const onCreateAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://ec2-54-180-87-180.ap-northeast-2.compute.amazonaws.com:8080/answers",
        answerData,
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddAnswerCon>
      <h2>Your Answer</h2>
      <QuillEditor
        editorWidth={"100%"}
        editorHeight={"200px"}
        inputValue={answerData.content}
        setEditorText={setAnswerData}
        editorText={answerData}
      />
      <div className="answer-post-btn">
        <PostAnswerBtn onCreateAnswer={onCreateAnswer} />
      </div>
    </AddAnswerCon>
  );
};
export default AddAnswer;
