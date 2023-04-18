import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { BsBookmark } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";

const VotingCompo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  width: 40px;
  margin-right: 16px;
  color: #6a737c;
  > * {
    margin-bottom: 15px;
  }
  .icons {
    font-size: 18px;
    font-weight: bold;
  }
`;
const VotingContainer = () => {
  return (
    <VotingCompo>
      <TiArrowSortedUp />
      <p>0</p>
      <TiArrowSortedDown />
      <BsBookmark className="icons" />
      <BiHistory className="icons" />
    </VotingCompo>
  );
};

const VotingOnlyAuthor = () => {
  return (
    <VotingCompo>
      <TiArrowSortedUp />
      <p>0</p>
      <TiArrowSortedDown />
      <BsBookmark className="icons" />
      <ImCheckmark />
      <BiHistory className="icons" />
    </VotingCompo>
  );
};

export { VotingContainer, VotingOnlyAuthor };
