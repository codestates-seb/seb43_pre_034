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
const EditBody = ({ content }) => {
  return (
    <EditBodyCon>
      <h2 className="edit-body">{content}</h2>
      <QuillEditor EditorHeight={"290px"} EditorWidth={"100%"} />
    </EditBodyCon>
  );
};

export default EditBody;
