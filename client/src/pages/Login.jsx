import { useState } from "react";
import styled from "styled-components";
import { LoginBtn } from "../components/common/Buttons";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import logo from "../assets/images/stack.png";

//전체 로그인 박스
const LoginSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .logo {
    width: 48px;
    height: 37px;
    margin-bottom: 30px;
  }
`;

//구글 로그인
const GoogleButton = styled(LoginBtn)`
  border: 1px solid rgb(214, 217, 220);
  background-color: white;
  color: rgb(59, 64, 69);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 4px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//깃헙 로그인
const GithubButton = styled(LoginBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 38, 41);
  span {
    color: white;
    margin-left: 4px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//페이스북 로그인
const FacebookButton = styled(LoginBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(56, 84, 153);
  span {
    color: white;
    margin-left: 4px;
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//이메일 로그인 박스
const LoginBox = styled.div`
  width: 278px;
  height: 230px;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 10px;
  background-color: aliceblue;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//이메일 로그인 폼
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 84%;
  margin: 0 8%;
`;

//로그인 인풋
const LoginInput = styled.input``;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginSection>
      <img src={logo} className="logo" alt="로고" />
      <GoogleButton>
        <FcGoogle size="20" />
        <span>Log in with Google</span>
      </GoogleButton>
      <GithubButton>
        <AiFillGithub size="20" color="#fff" />
        <span>Log in with Github</span>
      </GithubButton>
      <FacebookButton>
        <FaFacebookSquare size="20" color="#fff" />
        <span>Log in with Facebook</span>
      </FacebookButton>
      <LoginBox>
        <LoginForm onSubmit={handleSubmit}>
          <span>Email</span>
          <LoginInput
            type="text"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div>
            <span>Password</span>
            <span>Forgot password?</span>
          </div>
          <LoginInput
            type="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Log in</button>
        </LoginForm>
      </LoginBox>
      <span>
        Don’t have an account? <span>Sign up</span>
      </span>
      <span>
        Are you an employer? <span>Sign up on Talent</span>
      </span>
    </LoginSection>
  );
};

export default Login;
