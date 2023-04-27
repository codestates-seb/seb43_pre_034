import styled from "styled-components";

const TagsCon = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 0px;
  padding-left: 5px;
  li {
    height: 23px;
    margin-right: 10px;
    background-color: #e1ecf4;
    color: #39739d;
    padding: 4.8px 8px;
    border-radius: 3px;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsCon>
      {tags && tags.map((tag, idx) => <li key={idx}>{tag}</li>)}
    </TagsCon>
  );
};

export default Tags;
