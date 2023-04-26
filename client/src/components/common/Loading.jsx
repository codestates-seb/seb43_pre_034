import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  const spinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const Spinner = styled.div`
    border: 7px solid #f3f3f3;
    border-top: 7px solid #054475;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    animation: ${spinAnimation} 2s linear infinite;
  `;

  return <Spinner />;
};

export default LoadingSpinner;
