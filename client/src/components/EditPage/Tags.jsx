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
  .input-tag {
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

const Tags = () => {
  return (
    <TagsCompo>
      <h3 className="edit-tags">Tags</h3>
      <input className="input-tag" type="text" />
    </TagsCompo>
  );
};

export default Tags;
