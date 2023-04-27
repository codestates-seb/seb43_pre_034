import styled from "styled-components";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { useState } from "react";
import axios from "axios";

// styled-component
const VotingCompo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  width: 52px;
  padding-right: 16px;
  color: #6a737c;
  > * {
    margin-bottom: 5px;
  }
  .icons {
    font-size: 18px;
    color: #bbc2c8;
  }
  .vote {
    font-size: 42px;
    color: #bbc2c8;
  }
  .checked {
    cursor: pointer;
    color: #1b4d2c;
  }
  .icon-check {
    cursor: pointer;
    color: #bbc2c8;
  }
`;

// 기본 container
const VotingContainer = () => {
  return (
    <VotingCompo>
      <GoTriangleUp className="vote" />
      <p>0</p>
      <GoTriangleDown className="vote" />
      <BsBookmark className="icons" />
      <BiHistory className="icons" />
    </VotingCompo>
  );
};

// 답변
// 작성자 채택 전/후 container
const AnswerCheckedAuthor = ({ answerId, currentUser }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (answerId, currentUser) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/answers/${currentUser}/${answerId}/check`,
        {
          data: !isChecked,
        },
      )
      .then((res) => {
        console.log(res.data);
        setIsChecked(!isChecked);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <VotingCompo>
      <GoTriangleUp className="vote" />
      <p>0</p>
      <GoTriangleDown className="vote" />
      <BsBookmark className="icons" />
      <ImCheckmark
        onClick={() => handleCheck(answerId, currentUser)}
        className={isChecked ? "checked" : "icon-check"}
      />
      <BiHistory className="icons" />
    </VotingCompo>
  );
};

const AnswerChecked = () => {
  return (
    <VotingCompo>
      <GoTriangleUp className="vote" />
      <p>0</p>
      <GoTriangleDown className="vote" />
      <BsBookmark className="icons" />
      <ImCheckmark className="checked" />
      <BiHistory className="icons" />
    </VotingCompo>
  );
};
export { VotingContainer, AnswerCheckedAuthor, AnswerChecked };
