import styled from "styled-components";

const DownerPart = ({ data }) => {
  return (
    <ContentNavBtn>
      <p className="total-questions dis_none">{data.length} questions</p>
      <div className="btn-wrap">
        <div className="nav-btn">
          <button className="nav-btns">
            <span>Newest</span>
          </button>
          <button className="nav-btns">
            <span>Active</span>
          </button>
          <button className="nav-btns disappear">
            <span>Bountied</span>
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
  .total-questions {
    margin-left: 1rem;
  }
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
      display: flex;
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
  @media screen and (min-width: 581px) and (max-width: 782px) {
    flex-wrap: wrap;
    .btn-wrap {
      justify-content: space-between;
    }
    .disappear {
      display: none !important;
    }
  }
  @media screen and (max-width: 580px) {
    .btn-wrap {
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .dis_none,
    .disappear {
      display: none !important;
    }
  }
`;

export default DownerPart;
