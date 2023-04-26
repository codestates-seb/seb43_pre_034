import styled from "styled-components";
import { AskQuestionBtn } from "../components/common/Buttons";
import { VotingContainer } from "../components/QuestionDetail/VotingCompo";
import { SideBar } from "../components/common/Sidebar";
import { QuestionAuthor } from "../components/QuestionDetail/AuthorInfo";
import {
  QuBottomBtn,
  QuBottomBtnAuthor,
} from "../components/QuestionDetail/QuestionBottomButton";
import { QuComment } from "../components/QuestionDetail/Comment";
import AddAnswer from "../components/QuestionDetail/AddAnswer";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// styled-components
// 상세페이지-전체 구성
const DetailPage = styled.div`
  max-width: 1100px;
  border-left: 1px solid #d6d9dc;
  padding: 24px;

  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 100%;
    border: none;
  }
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    width: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.desktopMin} {
    width: 100%;
  }
`;
// 상세페이지-헤더
const DetailHeader = styled.div`
  h1 {
    font-size: 30px;
    color: #3b4045;
  }
  .question-info {
    display: flex;
    flex-direction: row;
    font-size: 14px;
  }
  p {
    margin: 13px 18px 25px 0px;
    color: #6a737c;
  }
  .span {
    color: #232629;
  }
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  border-bottom: 1px solid hsl(210, 8%, 90%);
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    h1 {
      font-size: 24px;
      color: #3b4045;
    }
    .question-info {
      font-size: 12px;
    }
  }
`;
// 상세페이지-본문(질문글)
const DetailBodyCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    display: flex;
    flex-direction: column;
  }
  .question-answer-page {
    width: inherit;
    display: flex;
    flex-direction: column;
  }
  .question {
    display: flex;
    flex-direction: row;
    margin: 20px 0px 80px;
  }
  .question-body {
    padding-right: 16px;
    width: 100%;
    margin: 16px 0px;
    .question-content {
      font-size: 18px;
      font-weight: 400;
      min-height: 80px;
      padding-left: 10px;
    }
  }
  .question-bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 4px;
    margin: 16px 0px;
    @media (max-width: 456px) {
      display: flex;
      flex-direction: column;
    }
  }
  .sidebar {
    height: 100vh;
    @media ${({ theme }) => theme.breakpoints.tabletMax} {
      width: 100%;
    }
  }
`;

// components
// 상세페이지 - 질문글
const DetailBody = ({ quData, deleteQu, currentUserId }) => {
  return (
    <DetailBodyCon>
      <div className="question-answer-page">
        <section className="question">
          <VotingContainer />
          <section className="question-body">
            <p className="question-content">{quData.data.body}</p>
            <div className="question-bottom">
              <QuBottomBtnAuthor
                questionId={quData && quData.data.questionId}
              />
              <QuestionAuthor quData={quData && quData.data} />
            </div>
            <QuComment
              questionId={quData && quData.data.questionId}
              questionData={quData && quData.data}
            />
          </section>
        </section>
        {/* answer는 컴포넌트 이동해서 get요청하기 */}
        <AddAnswer
          currentUserId={currentUserId}
          questionId={quData && quData.data.questionId}
          quData={quData && quData.data}
          currentUser={currentUserId && currentUserId}
        />
      </div>
      <section className="sidebar">
        <SideBar />
      </section>
    </DetailBodyCon>
  );
};

const Detail = () => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/questions/ask");
  };
  const currentUserId = localStorage.getItem("userId");
  const { id } = useParams();
  const [quData, setQuData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/questions/${id}`)
      .then((res) => {
        setQuData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const deleteQu = (questionId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/questions/${questionId}`)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DetailPage>
      {quData && (
        <>
          <DetailHeader>
            <div className="header">
              <h1>{quData.data.title}</h1>
              <AskQuestionBtn handleOnclick={handleOnclick} />
            </div>
            <section className="question-info">
              <p>
                Asked <span className="span">3 days ago</span>
              </p>
              <p>
                Modified <span className="span">yesterday</span>
              </p>
              <p>
                Viewed <span className="span">62 times</span>
              </p>
            </section>
          </DetailHeader>
          <DetailBody
            quData={quData}
            deleteQu={deleteQu}
            currentUserId={currentUserId}
          />
        </>
      )}
    </DetailPage>
  );
};

export default Detail;
