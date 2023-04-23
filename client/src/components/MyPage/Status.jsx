import styled from "styled-components";
import InfoLeft from "./Info/InfoLeft";
import InfoRight from "./Info/InfoRight";
import EditLeft from "./Edit/EditLeft";
import EditRight from "./Edit/EditRight";
function Status({ selectedNav }) {
  const statsCategories = ["reputation", "reached", "answers", "questions"];
  return (
    <Container>
      <LeftSide>
        {selectedNav === "Profile" ? (
          <InfoLeft statsCategories={statsCategories} />
        ) : (
          <EditLeft />
        )}
      </LeftSide>
      <RightSide>
        {selectedNav === "Profile" ? <InfoRight /> : <EditRight />}
      </RightSide>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  @media ${(props) => props.theme.breakpoints.tabletMax} {
    flex-direction: column;
  }
`;

const LeftSide = styled.section`
  flex: 0 1 18%;
`;

const RightSide = styled.section`
  flex: 0 1 82%;
`;

export default Status;
