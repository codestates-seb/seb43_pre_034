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

  const onChangeHandler = (body) => {
    setEditorText({ ...editorText, body: body });
  };

  return (
    <div name="body">
      <ReactQuill
        style={{ height: editorHeight, width: editorWidth }}
        modules={modules}
        formats={formats}
        theme="snow"
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default QuillEditor;
