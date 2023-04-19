import { useState } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  width: 100%;
  .commentBtn {
    border: none;
    background-color: inherit;
    color: #838c95;
    cursor: pointer;
    :hover {
      color: #0a95ff;
    }
  }
  .write-comment {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-right: 20px;
    .input-comment {
      width: 100%;
      height: 24px;
      border: none;
      border-radius: 5px;
      box-shadow: 0 4px 4px -4px black, 0 1px 4px rgba(0, 0, 0, 0.24);
      padding-right: 0;
    }
    .postBtn {
      position: absolute;
      border: none;
      background-color: inherit;
      padding-left: 0;
      right: 25px;
      margin-top: 3px;
      font-size: 14px;
      font-weight: 600;
      color: #838c95;
      :hover {
        color: #0a95ff;
      }
    }
  }
`;
const Comment = () => {
  const [showInput, setShowInput] = useState(false);
  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  return (
    <CommentContainer>
      <button className="commentBtn" onClick={handleShowInput}>
        Add a comment
      </button>
      {showInput ? (
        <div className="write-comment">
          <input className="input-comment" type="text"></input>
          <button className="postBtn" onClick={handleShowInput}>
            POST
          </button>
        </div>
      ) : null}
    </CommentContainer>
  );
};

export { Comment };
