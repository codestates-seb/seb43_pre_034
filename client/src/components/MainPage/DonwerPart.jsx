import styled from "styled-components";

const DownerPart = () => {
  return (
    <ContentNavBtn>
      <p className="total-questions">23,654,144 questions</p>
      <div className="btn-wrap">
        <div className="nav-btn">
          <button className="nav-btns">
            <span>Newest</span>
          </button>
          <button className="nav-btns">
            <span>Active</span>
          </button>
          <button className="nav-btns disappear">
            <span>Bountied 227</span>
          </button>
          <button className=" nav-btns disappear">
            <span>Unanswered</span>
          </button>
          <button className="nav-btns">
            <span>More</span>
          </button>
        </div>
        <button className="filter-btn">
          <span>filter</span>
        </button>
      </div>
    </ContentNavBtn>
  );
};

const ContentNavBtn = styled.div`
  font-size: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: nowrap;
  align-items: center;
  .btn-wrap {
    display: flex;
    button {
      height: 38px;
      border-radius: 3px;
      font-size: 14px;
      padding: 10px;
      white-space: nowrap;
      cursor: pointer;
      display: inline-block;
      font-weight: 500;
    }
    .nav-btn {
      flex: 1 1 208px;
      margin-right: 1rem;
      > * {
        margin-right: -3px;
      }
    }
    .nav-btns {
      background-color: hsl(210, 8%, 97.5%);
      color: hsl(210, 8%, 35%);
    }
    .filter-btn {
      background-color: hsl(205, 46%, 92%);
      border-color: hsl(205, 41%, 63%);
      color: hsl(205, 47%, 42%);
    }
  }
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    .disappear {
      display: none !important;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    flex-wrap: wrap;
  }
`;

export default DownerPart;
