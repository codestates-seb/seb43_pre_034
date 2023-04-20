import styled from "styled-components";
import { SideBarEdit } from "../components/common/Sidebar";
import { AnEditCompo, QuEditCompo } from "../components/EditPage/EditCompo";

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
  return (
    <EditContainer>
      <QuEditCompo />
      <div className="sidebar">
        <SideBarEdit />
      </div>
    </EditContainer>
  );
};

// answer-edit
const EditAnswer = () => {
  return (
    <EditContainer>
      <AnEditCompo />
      <div className="sidebar">
        <SideBarEdit />
      </div>
    </EditContainer>
  );
};
export { EditQuestion, EditAnswer };
