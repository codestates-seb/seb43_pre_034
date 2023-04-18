import styled from "styled-components";

const SignContainer = styled.ol`
  flex: 0 0 132px;
  display: flex;
  font-size: 13px;
  padding: 1rem;

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
  }

  @media ${(props) => props.theme.breakpoints.mobileMax} {
    padding: 1rem 1rem 1rem 0;
  }
`;

const SignNav = () => {
  return (
    <SignContainer>
      <li className="login_in">Log in</li>
      <li className="sign_up">Sign up</li>
    </SignContainer>
  );
};

export default SignNav;
