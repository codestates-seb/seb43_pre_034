import styled, { css } from "styled-components";
import UpperPart from "./UpperPart";
import DownerPart from "./DonwerPart";
import Questions from "./Question";
const ContentPart = () => {
  return (
    <Content>
      <CotentHead>
        <UpperPart />
        <DownerPart />
      </CotentHead>
      <ContentBody>
        <Questions />
      </ContentBody>
    </Content>
  );
};

const Content = styled.div`
  flex: 0 1 802px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const CommonStyle = css`
  width: 100%;
  box-sizing: border-box;
`;

const CotentHead = styled.div`
  ${CommonStyle}
  height: 100px;
  margin-bottom: 1rem;
`;
const ContentBody = styled.div`
  ${CommonStyle}
  height: 100vh;
`;

export default ContentPart;
