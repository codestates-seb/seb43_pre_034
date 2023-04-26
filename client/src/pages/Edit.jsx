import styled from "styled-components";
import { SideBarEdit } from "../components/common/Sidebar";
import { AnEditCompo, QuEditCompo } from "../components/EditPage/EditCompo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// edit 페이지 styled-component
const EditContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  padding: 24px;
  border-left: 1px solid #d6d9dc;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 100%;
    border: none;
  }
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.breakpoints.desktopMin} {
    width: 100%;
  }
`;

//pages
// question-edit
const EditQuestion = () => {
  const { id } = useParams();
  const [quDataForEdit, setQuDataForEdit] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/questions/${id}`)
      .then((res) => {
        setQuDataForEdit(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <EditContainer>
      <QuEditCompo
        quDataForEdit={quDataForEdit && quDataForEdit}
        setQuDataForEdit={setQuDataForEdit}
      />
      <div className="sidebar">
        <SideBarEdit />
      </div>
    </EditContainer>
  );
};

// answer-edit
const EditAnswer = () => {
  const { id, answerid } = useParams();
  const [quTitle, setQuTitle] = useState(null);
  const [anDataForEdit, setAnDataForEdit] = useState(null);
  useEffect(() => {
    // 멀티 리퀘스트 보내기
    const quPromise = axios.get(
      `${process.env.REACT_APP_API_URL}/questions/${id}`,
    );
    const anPromise = axios.get(
      `${process.env.REACT_APP_API_URL}/answers/${answerid}`,
    );
    Promise.all([quPromise, anPromise])
      .then((res) => {
        setQuTitle(res[0].data.data.title);
        setAnDataForEdit(res[1].data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [answerid]);
  return (
    <EditContainer>
      <AnEditCompo
        quTitle={quTitle && quTitle}
        editAn={anDataForEdit && anDataForEdit}
        setEditAn={setAnDataForEdit}
      />
      <div className="sidebar">
        <SideBarEdit />
      </div>
    </EditContainer>
  );
};
export { EditQuestion, EditAnswer };
