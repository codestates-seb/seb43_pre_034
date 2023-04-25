import styled from "styled-components";
import QuillEditor from "../QuillEditor";

//body compo
const EditBodyCon = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .edit-body {
    padding: 0px 2px;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
  }
`;

//Edit-body
const EditBody = ({ content, editBody, setEditBody, quData }) => {
  console.log(editBody);
  return (
    <EditBodyCon>
      <h2 className="edit-body">{content}</h2>
      <QuillEditor
        editorWidth={"100%"}
        editorHeight={"300px"}
        inputValue={editBody ? editBody.body : ""}
        editorText={quData ? editBody.body : ""}
        setEditorText={setEditBody}
      />
    </EditBodyCon>
  );
};

export default EditBody;
