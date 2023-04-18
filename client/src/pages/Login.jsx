import { useState } from "react";
import styled from "styled-components";
import { LoginBtn } from "../components/common/Buttons";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

//전체 로그인 박스
const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//구글 로그인
const GoogleButton = styled(LoginBtn)``;

//깃헙 로그인
const GithubButton = styled(LoginBtn)``;

//페이스북 로그인
const FacebookButton = styled(LoginBtn)``;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginSection>
      <GoogleButton>
        <FcGoogle />
        Log in with Google
      </GoogleButton>
      <GithubButton>
        <AiFillGithub />
        Log in with Github
      </GithubButton>
      <FacebookButton>
        <FaFacebookSquare />
        Log in with Facebook
      </FacebookButton>
      <div>
        <form onSubmit={handleSubmit}>
          <span>Email</span>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div>
            <span>Password</span>
            <span>Forgot password?</span>
          </div>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
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
