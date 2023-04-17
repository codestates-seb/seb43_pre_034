import styled from "styled-components";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { BiHistory } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";

const VotingCompo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 100%;
  width: 40px;
  margin-right: 16px;
`;
const VotingContainer = () => {
  return (
    <VotingCompo>
      <IoMdArrowDropup size="36px" />
      <p>0</p>
      <IoMdArrowDropdown size="36px" />
      <BsBookmark />
      <BiHistory />
    </VotingCompo>
  );
};

const VotingOnlyAuthor = () => {
  return (
    <VotingCompo>
      <IoMdArrowDropup />
      <p>0</p>
      <IoMdArrowDropdown />
      <BsBookmark />
      <ImCheckmark />
      <BiHistory />
    </VotingCompo>
  );
};

export { VotingContainer, VotingOnlyAuthor };
