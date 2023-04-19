import styled from "styled-components";

// 작성자 정보 기본 구조
const AuthorInfo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #b3d3ea;
  border-radius: 3px;
  align-items: start;
  padding: 5px 6px 7px 7px;
  font-size: 14px;
  .created-at {
    color: #6a737c;
  }
  .img {
    width: 32px;
    height: 32px;
    background-color: #11266c;
  }
  .user-section {
    display: flex;
    flex-direction: row;
    margin: 5px;
    .user-info {
      margin-left: 6px;
      font-weight: 700;
      p:first-of-type {
        color: #0074cc;
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
`;

// 게시글 작성자 정보
const QuestionAuthor = () => {
  return (
    <AuthorInfo>
      <p className="created-at">
        asked <span>Apr 14 at 6:33</span>
      </p>
      <section className="user-section">
        {/* <img src="/" alt="user-profile" /> */}
        <div className="img" />
        <div className="user-info">
          <p>user name</p>
          <p>113</p>
        </div>
      </section>
    </AuthorInfo>
  );
};

// 답변 작성자 정보
const AnswerAuthor = () => {
  return (
    <AuthorInfo>
      <p>
        Answered <span>just now</span>
      </p>
      <section className="user-section">
        {/* <img src="/" alt="user-profile" /> */}
        <div className="img" />
        <div className="user-info">
          <p>user name</p>
          <p>113</p>
        </div>
      </section>
    </AuthorInfo>
  );
};
export { QuestionAuthor, AnswerAuthor };
