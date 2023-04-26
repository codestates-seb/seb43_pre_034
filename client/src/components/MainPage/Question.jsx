import styled, { css } from "styled-components";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

//main page questions component
const Questions = forwardRef(({ data }, ref) => {
  //질문자 데이터 정보
  const {
    score,
    body,
    title,
    name,
    questionId,
    createdAt,
    tags,
    checked,
    answerCount,
  } = data;
  //각 시간 표현
  const dateString = createdAt;
  const date = new Date(dateString);
  const timePassed = new Date().getTime() - date.getTime();
  const minutesPassed = Math.floor(timePassed / (1000 * 60));
  const hourssPassed = Math.floor(timePassed / (1000 * 60 * 60));
  const daysPassed = Math.floor(timePassed / (1000 * 60 * 60 * 24));

  //routing path 표시
  const PATH = `questions/${questionId}`;
  return (
    <Question>
      <Status>
        <div className="votes">{score} votes</div>
        {checked ? (
          <CheckedAnswer>{answerCount} answers</CheckedAnswer>
        ) : (
          <div className="answer">{answerCount} answers</div>
        )}
        {/* <div>3 views</div> */}
      </Status>
      <Info>
        <h3 className="title">
          <QuestionSpecificLink to={PATH}>{title}</QuestionSpecificLink>
        </h3>
        <div>{body}</div>
        {tags.length !== 0 ? (
          <div className="tags">
            {tags.map((el, idx) => {
              <Tag key={idx}>{el}</Tag>;
            })}
          </div>
        ) : null}
        <div ref={ref} className="user-id">
          {name} asked{" "}
          {minutesPassed > 59
            ? hourssPassed > 59
              ? `${daysPassed} days`
              : `${hourssPassed} hours`
            : `${minutesPassed} mins`}{" "}
          ago
        </div>
      </Info>
    </Question>
  );
});

//react devtool에서 표시되는 이름 명시
Questions.displayName = "Questions";

const Question = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-right: none;

  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex-direction: column;
  }
`;
const CommonStyle = css`
  padding: 0.5rem;
  line-height: 1.5rem;
`;

const Status = styled.div`
  ${CommonStyle}
  font-size: 13px;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .votes {
    font-weight: bold;
  }
  .answer {
    border: 1px solid green;
    padding: 2px;
    border-radius: 5px;
    color: green;
  }
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex-direction: row;
    justify-content: start;
    align-items: end;
    & div {
      margin: auto 4px;
    }
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    & div {
      margin: auto 4px;
      flex-direction: column;
    }
  }
  //367px;
  @media screen and (max-width: 367px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Info = styled.div`
  flex: 0 1 580px;
  ${CommonStyle}
  font-size:13px;
  position: relative;
  align-items: center;
  .user-id {
    display: flex;
    justify-content: end;
  }
  .tags {
    border: 1px solid black;
  }
`;

const QuestionSpecificLink = styled(Link)`
  text-decoration: none;
`;
const CheckedAnswer = styled.div`
  border: 1px solid green;
  padding: 2px;
  border-radius: 5px;
  color: white;
  background-color: green;
`;

const Tag = styled.div`
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
`;
export default Questions;
