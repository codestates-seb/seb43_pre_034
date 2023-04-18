import styled from "styled-components";
import UpperPart from "./UpperPart";
import DownerPart from "./DonwerPart";
const ContentHead = () => {
  return (
    <Header>
      <UpperPart />
      <DownerPart />
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  height: 100px;
  padding: 1.5rem;
`;

export default ContentHead;
