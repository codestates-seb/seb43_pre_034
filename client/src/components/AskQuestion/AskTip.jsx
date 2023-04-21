import styled from "styled-components";
import { PencilSvg } from "../../assets/PencilSvg.js";

const AskTipContainer = styled.div`
  flex: 0 1 28%;
  display: flex;
  flex-direction: column;
  border: 1px solid #d0d4d7;
  box-shadow: hsl(210, 8%, 85%) 0px 2px 2px 0px;
  margin-left: 1rem;

  .tip_title {
    padding: 1rem;
    color: #232629;
    font-size: 15px;
    background: #f8f9f9;
    border-bottom: 1px solid #d0d4d7;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

const AskTipContent = styled.div`
  display: flex;
  font-size: 12px;
  background: #fff;
  padding: 1.4rem 1rem 1rem 1rem;

  p {
    margin: 0 0 0.6rem 1rem;
    line-height: 1rem;
  }
`;

const AskTip = ({ title, content, content2 }) => {
  return (
    <AskTipContainer>
      <div className="tip_title">{title}</div>
      <AskTipContent>
        <div>
          <PencilSvg />
        </div>
        <div>
          <p>{content}</p>
          {content2 ? <p>{content2}</p> : null}
        </div>
      </AskTipContent>
    </AskTipContainer>
  );
};

export default AskTip;
