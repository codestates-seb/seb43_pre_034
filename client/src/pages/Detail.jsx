import styled from "styled-components";
const DetailPage = styled.div`
  border: 2px solid black;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 100%;
    margin: 24px 16px;
  }
  @media ${({ theme }) => theme.breakpoints.tabletMax} {
    width: 100%;
    margin: 24px 16px;
  }
  @media ${({ theme }) => theme.breakpoints.desktopMin} {
    width: 100%;
    margin: 24px 16px;
  }
`;

const DetailHeader = styled.div`
  h1 {
    font-size: 30px;
    color: #3b4045;
  }
  .question-info {
    display: flex;
    flex-direction: row;
  }
  p {
    margin-right: 18px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    h1 {
      font-size: 24px;
      color: #3b4045;
    }
    .question-info {
      margin-top: 15px;
      font-size: 14px;
    }
  }
`;

function Detail() {
  return (
    <DetailPage>
      <DetailHeader>
        <h1>Angular disable button if variables are empty</h1>
        <div className="question-info">
          <p>
            Asked <span>3 days ago</span>
          </p>
          <p>
            Modified <span>yesterday</span>
          </p>
          <p>
            Viewed <span>62 times</span>
          </p>
        </div>
      </DetailHeader>
    </DetailPage>
  );
}

export default Detail;
