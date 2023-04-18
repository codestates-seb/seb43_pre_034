import { useState } from "react";
import styled from "styled-components";
import { LoginBtn } from "../components/common/Buttons";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import logo from "../assets/images/stack.png";
import { Link } from "react-router-dom";

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
    margin-bottom: 25px;
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
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//이메일 로그인 폼
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 82%;
  margin: 10px 9% 12px;
  button {
    height: 36px;
    margin-top: 8px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(10, 149, 255);
    color: white;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 1px 0px 0px inset rgba(255, 255, 255, 0.5);
  }
  button:hover {
    background: hsl(206, 100%, 40%);
  }
  button:active {
    background: hsl(209, 100%, 37.5%);
  }
`;
const LoginTxt = styled.div`
  margin-top: 13px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  label {
    font-size: 15px;
  }
`;
const LinkPwd = styled(Link)`
  font-size: 12px;
  color: rgb(0, 116, 204);
  text-decoration: none;
`;

const LoginInput = styled.input`
  margin: 5px 0px;
  height: 28px;
  border-radius: 3px;
  border: 1px solid rgb(186, 191, 196);
`;
const LinkBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span:first-child {
    margin-bottom: 15px;
  }
`;
const SignLink = styled(Link)`
  text-decoration: none;
  color: rgb(0, 116, 204);
  margin-left: 3px;
  div {
    display: flex;
  }
`;

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
          <LoginTxt>
            <label htmlFor="email">Email</label>
          </LoginTxt>
          <LoginInput
            type="text"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <LoginTxt>
            <label htmlFor="password">Password</label>
            <LinkPwd to="/users/login">Forgot password?</LinkPwd>
          </LoginTxt>
          <LoginInput
            type="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Log in</button>
        </LoginForm>
      </LoginBox>
      <LinkBox>
        <span>
          Don’t have an account? <SignLink to="/users/">Sign up</SignLink>
        </span>
        <span>
          Are you an employer?{" "}
          <SignLink to="/users/login">
            <div>
              Sign up on Talent
              <BiLinkExternal size="15" />
            </div>
          </SignLink>
        </span>
      </LinkBox>
    </LoginSection>
  );
};

export default Login;
