import styled from "styled-components";

// title compo
const EditTitleCon = styled.section`
  padding-bottom: 15px;
  padding-right: 15px;
  margin-top: 10px;
  color: #0c0d0e;
  width: 100%;
  .edit-title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .edit-title-input {
    width: 100%;
    padding: 7px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    color: #0c0d0e;
    :focus {
      outline: none;
      border: 1px solid #0063af8f;
      box-shadow: 2px 2px 2px #0164b025, -2px -2px 2px #0164b025;
    }
  }
`;

// Edit-title
const EditTitle = ({ editQu, setEditQu }) => {
  return (
    <EditTitleCon>
      <h1 className="edit-title">Title</h1>
      <input
        className="edit-title-input"
        type="text"
        value={editQu.title}
        onChange={(e) => setEditQu({ ...editQu, title: e.target.value })}
      />
    </EditTitleCon>
  );
};

export default EditTitle;
