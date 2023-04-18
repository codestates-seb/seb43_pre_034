import styled from "styled-components";

const Container = styled.div`
  flex: 0 1 calc(1264px - 164px);
  display: flex;
  height: 200px;
  background: black;
  border: 2px solid yellow;
`;

const Home = () => {
  return <Container></Container>;
};

export default Home;
