import styled from "styled-components";

const TagsCompo = styled.div`
  padding: 10px 15px 15px 0px;
  width: 100%;
  margin-top: 60px;
  .edit-tags {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .tag-con {
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
      flex-direction: row;
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

        .tag {
          color: #39739d;
        }
        .tag-remove {
          cursor: pointer;
          color: #39739d;
          font-weight: bold;
          padding-left: 0.3rem;
        }
      }
    }

    .input-tag {
      border-radius: 3px;
      flex: 1;
      border: none;
      font-size: 14px;
      outline: none;
      color: #0c0d0e;
    }
    :focus-within {
      outline: none;
      border: 1px solid #0063af8f;
      box-shadow: 0px 0px 2px 4px #0164b025;
    }
  }
`;

const Tags = ({ editQu, setEditQu }) => {
  const removeTags = (idxToRemove) => {
    let removed = editQu.tags.slice();
    let filterd = removed.splice(0, idxToRemove, 1);

    setEditQu({ ...editQu, tags: filterd });
  };
  const addTags = (e) => {
    let keyword = e.target.value;

    if (!editQu.tags.includes(keyword) && keyword !== "") {
      let tmp = [...editQu.tags];
      setEditQu({ ...editQu, tags: [...tmp, keyword] });

      e.target.value = null; // 초기화
    }
  };
  console.log(editQu);
  const onKeyDownhandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <TagsCompo>
      <h3 className="edit-tags">Tags</h3>
      <div className="tag-con">
        <ul>
          {editQu.tags &&
            editQu.tags.map((tag, idx) => (
              <li key={idx}>
                <p className="tag">{tag}</p>
                <span
                  role="presentation"
                  className="tag-remove"
                  onClick={() => removeTags(idx)}
                >
                  x
                </span>
              </li>
            ))}
        </ul>
        <input
          className="input-tag"
          type="text"
          value={editQu.Tags}
          onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
          onKeyDown={onKeyDownhandler}
        />
      </div>
    </TagsCompo>
  );
};

export default Tags;
