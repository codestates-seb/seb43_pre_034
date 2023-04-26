import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

// styled component
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

// commentList
const CommentListCon = styled.div`
  word-break: break-all;
  padding-bottom: 10px;
  line-height: 130%;
  vertical-align: baseline;
  .comment-list {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    border-top: 1px solid hsl(210, 8%, 90%);
    border-bottom: 1px solid hsl(210, 8%, 90%);
  }
  p {
    width: 100%;
    padding: 6px 6px 6px 16px;
    font-size: 14px;
    color: #232629;
    .comment-user {
      text-decoration: none;
      color: #0074cc;
      margin: 0px 10px;
      cursor: pointer;
      :active {
        color: #0074cc;
      }
    }
    span {
      color: #9199a1;
    }
  }
  .deleteBtn {
    border: none;
    background-color: inherit;
    font-size: 12px;
    text-align: center;
    margin-bottom: 3px;
    width: 65px;
    color: #9199a1;
    cursor: pointer;
  }
`;

// component
// Question comment list
const QuCommentList = ({ quCommentList, setQuCommentList, currentUserId }) => {
  // 삭제요청
  const onDeleteComment = (questionId, questionCommentId) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/questions/${questionId}/comments/${questionCommentId}`,
      )
      .then((res) => {
        setQuCommentList(
          quCommentList.filter(
            (comment) => comment.questionCommentId !== questionCommentId,
          ),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  quCommentList.map((el) => console.log(el));
  return (
    <CommentListCon>
      <ul>
        {quCommentList &&
          quCommentList.map((comment) => (
            <li className="comment-list" key={comment.questionCommentId}>
              <p>
                {comment.body}-
                <a className="comment-user" href="/#">
                  {comment.userId}
                </a>
                <span>{comment.createdAt}</span>
              </p>
              {comment && comment.userId === currentUserId ? (
                <button
                  className="deleteBtn"
                  onClick={() =>
                    onDeleteComment(
                      comment.questionId,
                      comment.questionCommentId,
                    )
                  }
                >
                  DELETE
                </button>
              ) : null}
            </li>
          ))}
      </ul>
    </CommentListCon>
  );
};

// Answer CommentList
const AnCommentList = ({ anCommentList, setAnCommentList }) => {
  // 삭제요청
  const onDeleteComment = (userId, answerCommentId) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/answer-comments/${userId}/${answerCommentId}`,
      )
      .then((res) => {
        console.log(res);
        setAnCommentList(
          anCommentList.filter(
            (comment) => comment.answerCommentId !== answerCommentId,
          ),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <CommentListCon>
      <ul>
        {anCommentList &&
          anCommentList.map((comments) => (
            <li className="comment-list" key={comments.answerCommentId}>
              <p>
                {comments.body}-
                <a className="comment-user" href="/#">
                  {comments.userId}
                </a>
                <span>{comments.createdAt}</span>
              </p>
              <button
                className="deleteBtn"
                onClick={() =>
                  onDeleteComment(comments.userId, comments.answerCommentId)
                }
              >
                DELETE
              </button>
            </li>
          ))}
      </ul>
    </CommentListCon>
  );
};

// Question comment component
const QuComment = ({ questionId, questionData }) => {
  // input창 열기/닫기
  const [showInput, setShowInput] = useState(false);
  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  // 댓글 추가하기
  const questionCommentId = useRef(0);
  const [content, setContent] = useState("");
  const [quComment, setQuComment] = useState([]);
  // post요청이 완료되면 commentList받아오기
  useEffect(() => {
    // 서버 API 호출
    axios
      .get(`${process.env.REACT_APP_API_URL}/questions/${questionId}/comments`)
      .then((res) => {
        // 반환된 댓글 리스트를 Comment 컴포넌트의 state에 저장
        setQuComment(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [questionId]);
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCommentSubmit = () => {
    const newComment = {
      questionCommentId: questionCommentId.current,
      userId: questionData.userId,
      questionId: questionId,
      body: content,
    };

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/questions/${questionId}/comments`,
        newComment,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        setQuComment(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    questionCommentId.current++;
    // 입력된 댓글 내용 초기화 및 입력창 닫기

    setContent("");
    setShowInput(false);
  };

  return (
    <CommentContainer>
      {quComment ? (
        <QuCommentList
          quCommentList={quComment}
          setQuCommentList={setQuComment}
        />
      ) : null}
      <button className="commentBtn" onClick={handleShowInput}>
        Add a comment
      </button>
      {showInput ? (
        <div className="write-comment">
          <input
            className="input-comment"
            type="text"
            value={content}
            onChange={handleContentChange}
          ></input>
          <button className="postBtn" onClick={handleCommentSubmit}>
            POST
          </button>
        </div>
      ) : null}
    </CommentContainer>
  );
};

//answer comment component
const AnComment = ({ answerId }) => {
  // input창 열기/닫기
  const [showInput, setShowInput] = useState(false);
  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  // 댓글 추가하기
  const [content, setContent] = useState("");
  const [anCommentList, setAnCommentList] = useState([]);

  // post요청이 완료되면 commentList받아오기
  useEffect(() => {
    // 서버 API 호출
    axios
      .get(`${process.env.REACT_APP_API_URL}/answer-comments/${answerId}`)
      .then((res) => {
        // 반환된 댓글 리스트를 Comment 컴포넌트의 state에 저장
        setAnCommentList(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [answerId]);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const onClickCommentSubmit = () => {
    const newComment = {
      userId: 2,
      answerId: answerId,
      body: content,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/answer-comments`, newComment)
      .then((res) => {
        setAnCommentList((prevList) => [...prevList, res.data.data]);
      })
      .catch((err) => {
        console.error(err);
      });
    // 입력된 댓글 내용 초기화 및 입력창 닫기
    setContent("");
    setShowInput(false);
  };

  return (
    <CommentContainer>
      {anCommentList ? (
        <AnCommentList
          anCommentList={anCommentList}
          setAnCommentList={setAnCommentList}
        />
      ) : null}
      <button className="commentBtn" onClick={handleShowInput}>
        Add a comment
      </button>
      {showInput ? (
        <div className="write-comment">
          <input
            className="input-comment"
            type="text"
            value={content}
            onChange={handleContentChange}
          ></input>
          <button className="postBtn" onClick={onClickCommentSubmit}>
            POST
          </button>
        </div>
      ) : null}
    </CommentContainer>
  );
};
export { QuComment, AnComment };
