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
// import { Link } from "react-router-dom";

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

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailInputClass, setEmailInputClass] = useState("");
  const [passwordInputClass, setPasswordInputClass] = useState("");

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
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="text"
            placeholder=""
            value={email}
            className={emailInputClass}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <span>{emailError}</span>}
          <div>
            <label htmlFor="password">Password</label>
            {/* <Link to="/users/login">Forgot password?</Link> */}
          </div>
          <input
            type="password"
            placeholder=""
            value={password}
            className={passwordInputClass}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && <span>{passwordError}</span>}
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
