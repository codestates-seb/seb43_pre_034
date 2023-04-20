import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({ EditorHeight, EditorWidth }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <ReactQuill
        style={{ height: EditorHeight, width: EditorWidth }}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="내용을 입력하세요."
      />
    </>
  );
};

export default QuillEditor;
