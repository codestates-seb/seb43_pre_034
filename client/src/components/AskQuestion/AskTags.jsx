import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  width: 100%;
  padding-left: 4px;
  border: 1px solid #ced2d5;
  border-radius: 3px;
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    li {
      width: auto;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 3px;
      margin: 0 8px 8px 0;
      background: #e1ecf4;
      font-size: 12px;

      .tag_name {
        color: #39739d;
      }
      .tag_close {
        cursor: pointer;
        color: #39739d;
        font-weight: bold;
        padding-left: 0.3rem;
      }
    }
  }

  input {
    flex: 1;
    border: none;
    font-size: 14px;
    /* padding: 0.45rem 0.5rem; */
    outline: none !important;
    ::placeholder {
      color: lightgray;
    }
  }
  &:focus-within {
    text-align: left;
    border: 1px solid #7aa7c7;
    box-shadow: 0 0 2px 4px #cbe4f6;
  }
`;

const AskTags = ({ askForm, setAskForm, isClicked }) => {
  const removeTags = (idxToRemove) => {
    let removed = tags.slice();
    let filterd = removed.splice(0, idxToRemove, 1);

    setAskForm({ ...askForm, tags: filterd });
  };

  const addTags = (e) => {
    let keyword = e.target.value;

    if (!askForm.tags.includes(keyword) && keyword !== "") {
      let tmp = [...askForm.tags];
      setAskForm({ ...askForm, tags: [...tmp, keyword] });

      e.target.value = null; // 초기화
    }
  };

  const onKeyDownhandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <TagsContainer>
      <ul>
        {askForm.tags.map((tag, idx) => (
          <li key={idx}>
            <span className="tag_name">{tag}</span>
            <span
              role="presentation"
              className="tag_close"
              onClick={() => removeTags(idx)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className={isClicked === "tagClick" ? null : "write_form"}
        disabled={isClicked === "tagClick" ? false : true}
        placeholder="e.g. (node.js python .net)"
        onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
        onKeyDown={onKeyDownhandler}
      />
    </TagsContainer>
  );
};

export default AskTags;
