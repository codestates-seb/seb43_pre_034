import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignContainer = styled.div`
  flex: 0 0 132px;
  display: flex;
  font-size: 13px;
  margin: 1rem;

  .login_in {
    flex: 0 0 calc(100% / 2 - 2.5px);
    background: #e1ecf3;
    color: #39739d;
    height: 30px;
    border-radius: 3px;
    border: solid 1px #7aa7c7;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .sign_up {
    flex: 0 0 calc(100% / 2 - 2.5px);
    margin-left: 5px;
    background: #0a95ff;
    color: #fff;
    height: 30px;
    border-radius: 3px;
    border: solid 1px #0b96ff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    margin: 1rem 1rem 1rem 0;
  }
`;

const SignNav = () => {
  const navigate = useNavigate();

  return (
    <SignContainer>
      <button
        className="login_in"
        onClick={() => {
          navigate("/users/login");
        }}
      >
        Log in
      </button>
      <button className="sign_up">Sign up</button>
    </SignContainer>
  );
};

export default SignNav;
