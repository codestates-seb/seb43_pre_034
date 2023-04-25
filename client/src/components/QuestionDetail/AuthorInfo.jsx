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
      text-align: center;

      .profile-name {
        color: #0074cc;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 3px;
      }
    }
  }
`;

// 게시글 작성자 정보
const QuestionAuthor = ({ quData }) => {
  if (!quData) {
    return <div>Loading...</div>;
  }
  return (
    <AuthorInfo>
      {quData && (
        <>
          <p className="created-at">
            asked <span>{quData.createdAt}</span>
          </p>
          <section className="user-section">
            {/* <img src="/" alt="user-profile" /> */}
            <div className="img" />
            <div className="user-info">
              <p className="profile-name">{quData.name}</p>
              <p>113</p>
            </div>
          </section>
        </>
      )}
    </AuthorInfo>
  );
};

// 답변 작성자 정보
const AnswerAuthor = ({ anData }) => {
  if (!anData) {
    return <div>Loading...</div>;
  }
  return (
    <AuthorInfo>
      <p className="created-at">
        Answered <span>{anData.createdAt}</span>
      </p>
      <section className="user-section">
        {/* <img src="/" alt="user-profile" /> */}
        <div className="img" />
        <div className="user-info">
          <p className="profile-name">{anData.name}</p>
          <p>113</p>
        </div>
      </section>
    </AuthorInfo>
  );
};
export { QuestionAuthor, AnswerAuthor };
