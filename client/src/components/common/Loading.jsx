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
    border: 10px solid #f3f3f3;
    border-top: 10px solid #054475;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spinAnimation} 2s linear infinite;
  `;

  return <Spinner />;
};

export default LoadingSpinner;
