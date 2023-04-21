import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = ({
  editorHeight,
  editorWidth,
  setEditorText,
  editorText,
  inputValue,
}) => {
  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        ["clean"],
      ],
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "align",
    "color",
    "background",
  ];

  const onChangeHandler = (content) => {
    setEditorText({ ...editorText, content: content });
  };

  return (
    <div name="content">
      <ReactQuill
        style={{ height: editorHeight, width: editorWidth }}
        modules={modules}
        formats={formats}
        theme="snow"
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
        placeholder="내용을 입력하세요."
      />
    </div>
  );
};

export default QuillEditor;
