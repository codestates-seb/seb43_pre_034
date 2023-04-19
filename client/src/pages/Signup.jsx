import { useState } from "react";
import styled from "styled-components";
import { LoginBtn } from "../components/common/Buttons";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
// import { RiQuestionnaireFill } from "react-icons/ri";
// import { HiChevronUpDown } from "react-icons/hi2";
// import { AiFillTags } from "react-icons/ai";
// import { AiFillTrophy } from "react-icons/ai";
import { Link } from "react-router-dom";

//구글 로그인
const GoogleButton = styled(LoginBtn)`
  width: 316px;
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
  width: 316px;
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
  width: 316px;
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
const SignupBox = styled.div`
  width: 316px;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 10px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    width: 267px;
  }
`;

//이메일 로그인 폼
const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 84%;
  margin: 24px 8%;
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
const SignTxt = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  &:last-of-type {
    margin-top: 10px;
  }
`;
const FindPwd = styled.span`
  font-size: 11px;
  line-height: 15px;
`;

const SignInput = styled.input`
  height: 25px;
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
  margin-bottom: 7px;
  margin-top: 10px;
  &:first-of-type {
    margin-top: 4px;
  }
`;
const Signbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailInputClass, setEmailInputClass] = useState("");
  const [passwordInputClass, setPasswordInputClass] = useState("");
  // const [displayNameInputClass, setDisplayNameInputClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 양식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("The email is not a valid email address.");
      setEmailInputClass("ErrorInput");
      return;
    } else {
      setEmailError("");
      setEmailInputClass("");
    }

    // 비밀번호 길이 검증
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password === "") {
      setPasswordError("Password is required.");
      setPasswordInputClass("ErrorInput");
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long");
      setPasswordInputClass("ErrorInput");
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <article>
        <div>
          <h2>Join the Stack Overflow community</h2>
          <span>Get unstuck — ask a question</span>
          <span>Unlock new privileges like voting and commenting</span>
          <span>
            Save your favorite questions, answers, watch tags, and more
          </span>
          <span>Earn reputation and badges</span>
          <span>
            Collaborate and share knowledge with a private group for FREE.
          </span>
          <span>Get Stack Overflow for Teams free for up to 50 users.</span>
        </div>
      </article>
      <article>
        <GoogleButton>
          <FcGoogle size="20" />
          <span>Sign up with Google</span>
        </GoogleButton>
        <GithubButton>
          <AiFillGithub size="20" color="#fff" />
          <span>Sign up with Github</span>
        </GithubButton>
        <FacebookButton>
          <FaFacebookSquare size="20" color="#fff" />
          <span>Sign up with Facebook</span>
        </FacebookButton>
      </article>
      <SignupBox>
        <SignForm onSubmit={handleSubmit}>
          <Label>Display name</Label>
          <SignInput
            type="text"
            placeholder=""
            value={displayName}
            // className={displayNameInputClass}
            onChange={(event) => setDisplayName(event.target.value)}
          />
          <Label>Email</Label>
          <SignInput
            type="text"
            placeholder=""
            value={email}
            className={emailInputClass}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
          <Label>Password</Label>
          <SignInput
            type="password"
            placeholder=""
            value={password}
            className={passwordInputClass}
            onChange={(event) => setPassword(event.target.value)}
          />
          <FindPwd>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </FindPwd>
          {passwordError && <ErrorMsg>{passwordError}</ErrorMsg>}
          <button type="submit">Sign up</button>
        </SignForm>
      </SignupBox>
      <Signbox>
        <SignTxt>
          Don’t have an account? <SignLink to="/users/signup">Sign up</SignLink>
        </SignTxt>
      </Signbox>
    </>
  );
};

export default Signup;
