import { useState, useRef } from "react";
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
  .comment-list {
    word-break: break-all;
    border-top: 1px solid hsl(210, 8%, 90%);
    padding-bottom: 10px;
    line-height: 130%;
    vertical-align: baseline;
    p {
      width: 100%;
      padding: 6px 6px 6px 16px;
      border-bottom: 1px solid hsl(210, 8%, 90%);
      font-size: 14px;
      color: #232629;
      a {
        text-decoration: none;
        color: #0074cc;
        cursor: pointer;
        :active {
          color: #0074cc;
        }
      }
      span {
        color: #9199a1;
      }
    }
  }
`;
const Comment = () => {
  // input창 열기/닫기
  const [showInput, setShowInput] = useState(false);
  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  // 댓글 추가하기
  // csss용 initailData
  const initailData = {
    id: 0,
    username: "zzionie",
    content:
      "Yes, I didn't have time to continue with development since then but it's very stable.",
    created_at: "2023.04.19",
  };
  const [showComment, setShowComment] = useState(false);
  const handlePostComment = () => {
    setShowComment(true);
    setShowInput(!showInput);
  };

  return (
    <CommentContainer>
      {showComment ? (
        <div className="comment-list">
          <p>
            {initailData.content}-
            <a className="comment-user" href="/#">
              {initailData.username}
            </a>{" "}
            <span>{initailData.created_at}</span>
          </p>
        </div>
      ) : null}
      <button className="commentBtn" onClick={handleShowInput}>
        Add a comment
      </button>
      {showInput ? (
        <div className="write-comment">
          <input className="input-comment" type="text"></input>
          <button className="postBtn" onClick={handlePostComment}>
            POST
          </button>
        </div>
      ) : null}
    </CommentContainer>
  );
};

export { Comment };
