//modules
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//oauth
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import axios from "axios";

//component
import { LoginBtn } from "../components/common/Buttons";

//react-icon
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

//imgs
import logo from "../assets/images/stack.png";

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
  &:hover {
    background-color: hsl(210, 8%, 97.5%);
  }
  &:active {
    background-color: hsl(210, 8%, 95%);
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//구글 oauth
const GoogleLoginButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_ID;
  return (
    <GoogleButton>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </GoogleButton>
  );
};

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
  &:hover {
    background-color: hsl(210, 8%, 5%);
  }
  &:active {
    background-color: hsl(210, 8%, 0%);
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

const loginRequestHandler = () => {
  const CLIENT_ID = process.env.REACT_APP_GITHUB_ID;
  return window.location.assign(
    `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`,
  );
};
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
  &:hover {
    background-color: rgb(60, 74, 143);
  }
  &:active {
    background-color: rgb(65, 70, 135);
  }
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

const Facebook_Id = process.env.REACT_APP_FACEBOOK;

const handleFacebook = (response) => {
  // response 객체에는 페이스북 로그인 후의 정보가 들어있음
  console.log(response);
};

//이메일 로그인 박스
const LoginBox = styled.div`
  width: 288px;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.2);
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
  padding: 0 5px;
  font-size: 13px;
  border: 1px solid rgb(186, 191, 196);
  &:focus {
    outline: none;
    border: 1px solid rgb(0, 116, 204);
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

    return axios
      .post(
        `http://ec2-54-180-87-180.ap-northeast-2.compute.amazonaws.com:8080/users/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        },
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("에러", error);
        alert(error.message);
      });
  };

  //서버와 통신 -- 예시 코드
  //   axios.post('url', {
  //     email: email,
  //     password: password
  //   }, {
  //     withCredentials: true,
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     }
  //   })
  //   .then((response) => {
  //     if (response.status === 200) {
  //       localStorage.setItem('accessToken', response.data.token);
  //       navigate('/');
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('에러', error);
  //     alert(error.message);
  //   });
  // };

  return (
    <LoginSection>
      <img src={logo} className="logo" alt="로고" />
      <GoogleButton>
        <FcGoogle size="20" />
        <span>Log in with Google</span>
      </GoogleButton>
      <GithubButton onClick={loginRequestHandler}>
        <AiFillGithub size="20" color="#fff" />
        <span>Log in with Github</span>
      </GithubButton>
      <FacebookLogin
        appId={Facebook_Id}
        autoLoad={false}
        fields="name,first_name,last_name,email"
        callback={handleFacebook}
        disableMobileRedirect={true}
        render={(renderProps) => (
          <FacebookButton>
            <FaFacebookSquare size="20" color="#fff" />
            <span>Log in with Facebook</span>
          </FacebookButton>
        )}
      />
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
          <SignLink to="/users/signup">
            Sign up on Talent
            <HiOutlineExternalLink size={15} />
          </SignLink>
        </SignTxt>
      </Signbox>
    </LoginSection>
  );
};

export default Login;
