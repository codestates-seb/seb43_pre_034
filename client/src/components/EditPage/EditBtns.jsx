import styled from "styled-components";
import { EditSaveBtn } from "../common/Buttons";
import { Link } from "react-router-dom";

// styled component
const EditBtnsComp = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* margin-top: 80px; */
  margin-bottom: 20px;
  .edit-btns {
    text-decoration: none;
  }
  .edit-cancle {
    padding: 10.4px;
    margin: 0px 4px;
    color: #0074cc;
    font-size: 13px;
    text-align: center;
  }
`;

// 수정 페이지 하단 buttons component
const EditBtns = ({ onClickEditSave, quId }) => {
  return (
    <EditBtnsComp>
      <EditSaveBtn
        onClick={(e) => {
          onClickEditSave(e);
        }}
      />

      <Link to={`/questions/${quId}`} className="edit-btns edit-cancle">
        <p>Cancle</p>
      </Link>
    </EditBtnsComp>
  );
};

export default EditBtns;
