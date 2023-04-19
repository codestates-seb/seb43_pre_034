import styled, { css } from "styled-components";

const Questions = () => {
  return (
    <Question>
      <Status>
        <div>0 votes</div>
        <div>0 answers</div>
        <div>3 views</div>
      </Status>
      <Info>
        <h3 className="title">
          <a href="#!">Where does QWindow* gets passed to a QML component</a>
        </h3>
        <div>
          I try to update/inherit from QWinTaskbarButton so that I can control
          the color shown by the component on task app icon progress as that is
          not exposed currently (at least in QT 5.15) I cannot figure ...
        </div>
        <div className="user-id">
          Ghitas user avatar Ghita 4,425 asked 1 min ago
        </div>
      </Info>
    </Question>
  );
};

const Question = styled.div`
  width: 100%;
  /* height: 150px; */
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-right: none;

  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex-direction: column;
  }
`;
const CommonStyle = css`
  padding: 0.5rem;
  line-height: 1.5rem;
`;

const Status = styled.div`
  ${CommonStyle}
  font-size:13px;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex-direction: row;
    justify-content: start;
    align-items: end;
    & div {
      margin: auto 4px;
    }
  }
  @media ${(props) => props.theme.breakpoints.mobileMax} {
    & div {
      margin: auto 4px;
      flex-direction: column;
    }
  }
  //367px;
  @media screen and (max-width: 367px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Info = styled.div`
  flex: 0 1 580px;
  ${CommonStyle}
  font-size:13px;
  position: relative;
  align-items: center;
  .user-id {
    display: flex;
    justify-content: end;
  }
`;

export default Questions;
