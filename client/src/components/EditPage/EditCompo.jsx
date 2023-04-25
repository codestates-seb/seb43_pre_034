import styled from "styled-components";
import EditTitle from "./EditTitle";
import EditBody from "./EditBody";
import EditSummary from "./EditSummary";
import Tags from "./Tags";
import EditBtns from "./EditBtns";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
  .edit-summaryBox {
    margin-top: 60px;
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
const QuEditCompo = () => {
  const { id } = useParams();
  const [quData, setQuData] = useState();
  const [editBody, setEditBody] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/questions/${id}`)
      .then((res) => {
        setQuData(res.data.data);
        setEditBody(res.data.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(quData);

  // 수정된 question patch
  const onClickEditSave = () => {
    e.preventDefault();
    const editData = {
      title: quData.title,
      body: editBody.body,
      userId: quData.userId,
      questionId: quData.questionId,
    };
    console.log(editData);
    axios
      .patch(`${process.env.REACT_APP_API_URL}/questions/${id}`, editData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <EditComponent>
      {quData && (
        <section className="edit-section">
          <EditHeader />
          <EditTitle quData={quData} setQuData={setQuData} />
          <EditBody
            content={"Body"}
            editBody={editBody}
            setEditBody={setEditBody}
            quData={quData}
          />
          <Tags />
          <EditSummary />
          <EditBtns onClick={onClickEditSave} />
        </section>
      )}
    </EditComponent>
  );
};

// Answer edit compo
const AnEditCompo = () => {
  return (
    <EditComponent>
      <section className="edit-section">
        <EditHeader />

        <h2 className="edit-qutitle">
          <Link to={"/question/:id"} className="link-questiontitle">
            Angular disable button if variables are empty
          </Link>
        </h2>
        <EditBody content={"Answer"} />
        <div className="edit-summaryBox">
          <EditSummary />
        </div>
        <EditBtns />
      </section>
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
