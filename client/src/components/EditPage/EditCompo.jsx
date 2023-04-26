import styled from "styled-components";
import EditTitle from "./EditTitle";
import { QuEditBody, AnEditBody } from "./EditBody";
import EditSummary from "./EditSummary";
import Tags from "./Tags";
import EditBtns from "./EditBtns";
import { Link } from "react-router-dom";
import axios from "axios";
// edit 페이지 styled-component
// main-edit compo
const EditComponent = styled.div`
  display: flex;
  flex-direction: column;
  .edit-section {
    width: 100%;
  }
  .edit-qutitle {
    margin: 16px 0px 19px;
    font-size: 18px;
    .link-questiontitle {
      text-decoration: none;
      color: #0063bf;
    }
  }
  .edit-bottom {
    margin-top: 80px;
  }
`;

// header compo
const EditHeaderCon = styled.header`
  padding: 16px;
  border: 1px solid #e6cf79;
  font-size: 13px;
  color: #3b4045;
  background-color: #fdf7e2;
  .edit-header {
    margin-bottom: 13px;
  }
`;

// components
// Question edit compo
const QuEditCompo = ({ quDataForEdit, setQuDataForEdit }) => {
  console.log(quDataForEdit);
  // 수정된 question patch
  const onClickEditSave = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/questions/${quDataForEdit.questionId}`,
        quDataForEdit,
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <EditComponent>
      {quDataForEdit && (
        <section className="edit-section">
          <EditHeader />
          <EditTitle editQu={quDataForEdit} setEditQu={setQuDataForEdit} />
          <QuEditBody
            content={"Body"}
            editQu={quDataForEdit}
            setEditQu={setQuDataForEdit}
          />
          <Tags editQu={quDataForEdit} setEditQu={setQuDataForEdit} />
          {/* <EditSummary /> */}
          <EditBtns
            onClickEditSave={onClickEditSave}
            quId={quDataForEdit.questionId}
          />
        </section>
      )}
    </EditComponent>
  );
};

// Answer edit compo
const AnEditCompo = ({ quTitle, editAn, setEditAn }) => {
  const onClickEditSave = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/answers/${editAn.answerId}`,
        editAn,
      )
      .then((res) => {
        console.log(res.data);
        // window.location.href = `${res.data.questionId}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <EditComponent>
      {editAn && (
        <section className="edit-section">
          <EditHeader />
          <h2 className="edit-qutitle">
            <Link
              to={`/questions/${editAn.questionId}`}
              className="link-questiontitle"
            >
              {quTitle}
            </Link>
          </h2>
          <AnEditBody
            content={"Answer"}
            editAn={editAn}
            setEditAn={setEditAn}
          />
          <div className="edit-bottom">
            {/* <EditSummary /> */}
            <EditBtns
              onClickEditSave={onClickEditSave}
              quId={editAn.questionId}
            />
          </div>
        </section>
      )}
    </EditComponent>
  );
};

// header
const EditHeader = () => {
  return (
    <EditHeaderCon>
      <p className="edit-header">
        Your edit will be placed in a queue until it is peer reviewed.
      </p>
      <p>
        We welcome edits that make the post easier to understand and more
        valuable for readers. Because community members review edits, please try
        to make the post substantially better than how you found it, for
        example, by fixing grammar or adding additional resources and
        hyperlinks.
      </p>
    </EditHeaderCon>
  );
};

export { QuEditCompo, AnEditCompo };
