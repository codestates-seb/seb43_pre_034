import { useState } from "react";
import styled from "styled-components";
import { LoginBtn } from "../components/common/Buttons";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import logo from "../assets/images/stack.png";
import { Link } from "react-router-dom";

//전체 로그인 박스
const LoginSection = styled.section`
  box-sizing: border-box;
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
  width: 288px;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//이메일 로그인 폼
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 84%;
  margin: 22px 8%;
  button {
    height: 37px;
    border-radius: 4px;
    margin-top: 10px;
    background-color: hsl(206, 100%, 52%);
    color: white;
    border: none;
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.4) inset;
  }
  button:hover {
    background-color: hsl(206, 100%, 40%);
  }
  button:focus {
    background-color: hsl(206, 100%, 37.5%);
  }
`;
const LoginTxt = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  &:last-of-type {
    margin-top: 10px;
  }
`;
const FindPwd = styled.span`
  color: rgb(0, 116, 204);
  font-size: 12px;
`;

const LoginInput = styled.input`
  height: 28px;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid rgb(186, 191, 196);
  &:focus {
    outline: none;
  }
  &.ErrorInput {
    border-color: hsl(358, 62%, 47%);
  }
`;
const Label = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const Signbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;
const SignTxt = styled.p`
  margin-top: 15px;
  font-size: 13px;
  color: rgb(35, 38, 41);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 글자 파랗게
const SignLink = styled(Link)`
  text-decoration: none;
  color: rgb(0, 116, 204);
  margin-left: 3px;
`;

const ErrorMsg = styled.span`
  font-size: 12px;
  color: hsl(358, 62%, 47%);
  margin-bottom: 3px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailInputClass, setEmailInputClass] = useState("");
  const [passwordInputClass, setPasswordInputClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("The email is not a valid email address.");
      setEmailInputClass("ErrorInput");
      return;
    } else {
      setEmailInputClass("");
    }

    if (password === "") {
      setPasswordError("Password is required.");
      setPasswordInputClass("ErrorInput");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      setPasswordInputClass("ErrorInput");
    } else {
      setPasswordError("");
      setPasswordInputClass("");
    }
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
            <Label>Email</Label>
          </LoginTxt>
          <LoginInput
            type="text"
            placeholder=""
            value={email}
            className={emailInputClass}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
          <LoginTxt>
            <Label>Password</Label>
            <FindPwd>Forgot password?</FindPwd>
          </LoginTxt>
          <LoginInput
            type="password"
            placeholder=""
            value={password}
            className={passwordInputClass}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <ErrorMsg>{passwordError}</ErrorMsg>}
          <button type="submit">Log in</button>
        </LoginForm>
      </LoginBox>
      <Signbox>
        <SignTxt>
          Don’t have an account? <SignLink to="/users/signup">Sign up</SignLink>
        </SignTxt>
        <SignTxt>
          Are you an employer?{" "}
          <SignLink to="/users/login">
            Sign up on Talent
            <HiOutlineExternalLink size={15} />
          </SignLink>
        </SignTxt>
      </Signbox>
    </LoginSection>
  );
};

export default Login;
