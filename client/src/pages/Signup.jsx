// //modules
// import { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// // import axios from 'axios';

// //component
// import { LoginBtn } from "../components/common/Buttons";

// //react-icon
// import { FcGoogle } from "react-icons/fc";
// import { AiFillGithub, AiFillTags, AiFillTrophy } from "react-icons/ai";
// import { FaFacebookSquare } from "react-icons/fa";
// import { RiQuestionnaireFill } from "react-icons/ri";
// import { HiChevronUpDown } from "react-icons/hi2";
// import { HiOutlineExternalLink } from "react-icons/hi";

// //img
// import captlogo from "../assets/images/captlogo.png";

// const SignWrap = styled.section`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media ${({ theme }) => theme.breakpoints.tabletMax} {
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const InfoSection = styled.article`
//   display: flex;
//   color: rgb(35, 38, 41);
//   h2 {
//     font-size: 27px;
//     margin-bottom: 35px;
//   }
//   ul > li {
//     font-size: 15px;
//     line-height: 19px;
//     margin-bottom: 27px;
//     display: flex;
//     align-items: center;
//   }
//   ul > li > span {
//     margin-left: 5px;
//   }
// `;
// const InfoMsg = styled.span`
//   font-size: 13px;
//   line-height: 16px;
//   color: rgb(106, 115, 124);
//   display: flex;
//   flex-direction: column;
//   span {
//     color: rgb(0, 116, 204);
//   }
// `;

// const InfoDeskTop = styled.article`
//   min-width: 436px;
//   margin-right: 60px;
//   margin-bottom: 70px;
//   @media ${({ theme }) => theme.breakpoints.tabletMax} {
//     display: none;
//   }
// `;

// const InfoMobile = styled.article`
//   display: none;
//   width: 422px;
//   h2 {
//     font-size: 22px;
//     text-align: center;
//     line-height: 30px;
//   }
//   @media ${({ theme }) => theme.breakpoints.tabletMax} {
//     display: block;
//   }
//   @media ${({ theme }) => theme.breakpoints.mobileMax} {
//     width: 356px;
//     display: block;
//     h2 {
//       font-size: 19px;
//       line-height: 30px;
//     }
//   }
// `;

// const SignUpSection = styled.section`
//   display: flex;
//   flex-direction: column;
// `;

// //구글 로그인
// const GoogleButton = styled(LoginBtn)`
//   width: 316px;
//   border: 1px solid rgb(214, 217, 220);
//   background-color: white;
//   color: rgb(59, 64, 69);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:hover {
//     background-color: hsl(210, 8%, 97.5%);
//   }
//   &:active {
//     background-color: hsl(210, 8%, 95%);
//   }
//   span {
//     margin-left: 4px;
//   }
//   @media ${({ theme }) => theme.breakpoints.mobileMax} {
//     width: 267px;
//   }
// `;

// //깃헙 로그인
// const GithubButton = styled(LoginBtn)`
//   width: 316px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgb(35, 38, 41);
//   span {
//     color: white;
//     margin-left: 4px;
//   }
//   &:hover {
//     background-color: hsl(210, 8%, 5%);
//   }
//   &:active {
//     background-color: hsl(210, 8%, 0%);
//   }
//   @media ${({ theme }) => theme.breakpoints.mobileMax} {
//     width: 267px;
//   }
// `;

// //페이스북 로그인
// const FacebookButton = styled(LoginBtn)`
//   width: 316px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgb(56, 84, 153);
//   span {
//     color: white;
//     margin-left: 4px;
//   }
//   &:hover {
//     background-color: rgb(60, 74, 143);
//   }
//   &:active {
//     background-color: rgb(65, 70, 135);
//   }
//   @media ${({ theme }) => theme.breakpoints.mobileMax} {
//     width: 267px;
//   }
// `;

// //이메일 로그인 박스
// const SignupBox = styled.div`
//   width: 316px;
//   box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   margin-top: 10px;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   @media ${({ theme }) => theme.breakpoints.mobileMax} {
//     width: 267px;
//   }
// `;

// //이메일 로그인 폼
// const SignForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 84%;
//   margin: 24px 8%;
//   button {
//     height: 37px;
//     border-radius: 4px;
//     margin-top: 10px;
//     background-color: hsl(206, 100%, 52%);
//     color: white;
//     border: none;
//     box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.6) inset;
//   }
//   button:hover {
//     background-color: hsl(206, 100%, 40%);
//   }
//   button:focus {
//     background-color: hsl(206, 100%, 37.5%);
//   }
// `;
// const LoginTxt = styled.div`
//   margin-top: 5px;
//   margin-bottom: 5px;
//   display: flex;
//   justify-content: space-between;
//   &:last-of-type {
//     margin-top: 10px;
//   }
// `;
// const HelpMsg = styled.span`
//   font-size: 11px;
//   line-height: 15px;
//   color: rgb(106, 115, 124);
//   &:last-of-type {
//     margin-top: 23px;
//   }
// `;

// const SignInput = styled.input`
//   height: 25px;
//   margin-bottom: 5px;
//   border-radius: 4px;
//   font-size: 12px;
//   border: 1px solid rgb(186, 191, 196);
//   &:focus {
//     outline: none;
//     border: 1px solid rgb(0, 116, 204);
//   }
//   &.ErrorInput {
//     border-color: hsl(358, 62%, 47%);
//   }
// `;
// const Label = styled.span`
//   font-size: 15px;
//   font-weight: 600;
//   margin-bottom: 7px;
//   margin-top: 10px;
//   &:first-of-type {
//     margin-top: 4px;
//   }
// `;

// const CaptBox = styled.div`
//   background-color: rgb(241, 242, 243);
//   height: 160px;
//   border-radius: 3px;
//   border: 1px solid rgb(227, 230, 232);
//   margin: 10px 0px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Captcha = styled.div`
//   width: 140px;
//   height: 140px;
//   border-radius: 3px;
//   box-shadow: 1px 1px 3px rgba(211, 211, 211, 0.5);
//   background-color: rgb(249, 249, 249);
//   border: 1px solid rgb(211, 211, 211);
//   display: flex;
//   flex-direction: column;
// `;

// const CheckRobo = styled.div`
//   width: 100%;
//   height: 90px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   input {
//     width: 22px;
//     height: 22px;
//     margin-right: 5px;
//   }
//   span {
//     font-size: 13px;
//     font-weight: 500;
//   }
// `;

// const Captlogo = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   img {
//     width: 25px;
//     margin-right: 2px;
//   }
//   span {
//     font-size: 10px;
//     color: rgb(12, 13, 14);
//   }
// `;

// const Privacy = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   span {
//     font-size: 9px;
//     margin-top: 3px;
//     color: rgb(12, 13, 14);
//   }
// `;

// const AgreeBox = styled.div`
//   margin-bottom: 5px;
//   .dark {
//     color: rgb(12, 13, 14);
//   }
// `;

// const LoginBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 30px;
//   justify-content: center;
//   align-items: center;
//   font-size: 12px;
// `;

// // 글자 파랗게
// const LoginLink = styled(Link)`
//   text-decoration: none;
//   color: rgb(0, 116, 204);
//   margin-left: 3px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ErrorMsg = styled.span`
//   font-size: 11px;
//   color: hsl(358, 62%, 47%);
//   margin-bottom: 3px;
// `;

// const ColorTxt = styled.span`
//   color: rgb(0, 116, 204);
// `;

// const LinkIcon = styled(HiOutlineExternalLink)`
//   margin-left: 2px;
// `;

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [emailInputClass, setEmailInputClass] = useState("");
//   const [passwordInputClass, setPasswordInputClass] = useState("");
//   // 중복 닉네임 체크한다면 사용
//   // const [displayNameInputClass, setDisplayNameInputClass] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [isCaptChecked, setIsCaptChecked] = useState(false);
//   const [CaptError, setCaptError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setEmailError("The email is not a valid email address.");
//       setEmailInputClass("ErrorInput");
//       return;
//     } else {
//       setEmailError("");
//       setEmailInputClass("");
//     }

//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (password === "") {
//       setPasswordError("Password is required.");
//       setPasswordInputClass("ErrorInput");
//     } else if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//     } else if (!passwordRegex.test(password)) {
//       setPasswordError("Invalid password");
//       setPasswordInputClass("ErrorInput");
//     } else {
//       setPasswordError("");
//     }

//     if (!isCaptChecked) {
//       const captchaInput = document.querySelector('input[type="checkbox"]');
//       setCaptError("CAPTCHA response required.");
//       return;
//     }

//     if (emailError || passwordError) {
//       return;
//     }

//     const user = {
//       email: email,
//       password: password,
//       displayName: displayName,
//     };

//     // fetch 로 통신
//     // fetch("/api/users", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(user),
//     // })
//     //   .then((response) => {
//     //     if (!response.ok) {
//     //       throw new Error("Failed to create user account");
//     //     }
//     //     return response.json();
//     //   })
//     //   .then((data) => {
//     //     console.log("User account created successfully:", data);
//     //   })
//     //   .catch((error) => {
//     //     console.error(error);
//     //   });
//   };

//   // axios 로 통신
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   // 이메일 양식 검증
//   //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   //   if (!emailRegex.test(email)) {
//   //     setEmailError("The email is not a valid email address.");
//   //     setEmailInputClass("ErrorInput");
//   //     return;
//   //   } else {
//   //     setEmailError("");
//   //     setEmailInputClass("");
//   //   }

//   //   // 비밀번호 길이 검증
//   //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//   //   if (password === "") {
//   //     setPasswordError("Password is required.");
//   //     setPasswordInputClass("ErrorInput");
//   //   } else if (!passwordRegex.test(password)) {
//   //     setPasswordError("Password must be at least 8 characters long");
//   //     setPasswordInputClass("ErrorInput");
//   //   } else {
//   //     setPasswordError("");
//   //   }

//   //   // 입력된 정보를 서버로 전송
//   //   if (!emailError && !passwordError) {
//   //     try {
//   //       const response = await axios.post("/signup", {
//   //         email,
//   //         password,
//   //         displayName,
//   //       });
//   //       console.log(response);
//   //       // 회원가입 성공 처리
//   //     } catch (error) {
//   //       console.error(error);
//   //       // 회원가입 실패 처리
//   //     }
//   //   }
//   // };

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   const handleCaptchaChange = (e) => {
//     setIsCaptChecked(e.target.checked);
//   };

//   return (
//     <SignWrap>
//       <InfoSection>
//         <InfoDeskTop>
//           <h2>Join the Stack Overflow community</h2>
//           <ul>
//             <li>
//               <RiQuestionnaireFill size={26} color="#0a95ff" />
//               <span>Get unstuck — ask a question</span>
//             </li>
//             <li>
//               <HiChevronUpDown size={26} color="#0a95ff" />
//               <span>Unlock new privileges like voting and commenting</span>
//             </li>
//             <li>
//               <AiFillTags size={26} color="#0a95ff" />
//               <span>
//                 Save your favorite questions, answers, watch tags, and more
//               </span>
//             </li>
//             <li>
//               <AiFillTrophy size={26} color="#0a95ff" />
//               <span>Earn reputation and badges</span>
//             </li>
//           </ul>
//           <InfoMsg>
//             Collaborate and share knowledge with a private group for FREE.
//             <span>Get Stack Overflow for Teams free for up to 50 users.</span>
//           </InfoMsg>
//         </InfoDeskTop>
//         <InfoMobile>
//           <h2>
//             Create your Stack Overflow account. It’s free and only takes a
//             minute.
//           </h2>
//         </InfoMobile>
//       </InfoSection>
//       <SignUpSection>
//         <article>
//           <GoogleButton>
//             <FcGoogle size="20" />
//             <span>Sign up with Google</span>
//           </GoogleButton>
//           <GithubButton>
//             <AiFillGithub size="20" color="#fff" />
//             <span>Sign up with Github</span>
//           </GithubButton>
//           <FacebookButton>
//             <FaFacebookSquare size="20" color="#fff" />
//             <span>Sign up with Facebook</span>
//           </FacebookButton>
//         </article>
//         <SignupBox>
//           <SignForm onSubmit={handleSubmit}>
//             <Label>Display name</Label>
//             <SignInput
//               type="text"
//               placeholder=""
//               value={displayName}
//               // className={displayNameInputClass}
//               onChange={(event) => setDisplayName(event.target.value)}
//             />
//             <Label>Email</Label>
//             <SignInput
//               type="text"
//               placeholder=""
//               value={email}
//               className={emailInputClass}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//             {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
//             <Label>Password</Label>
//             <SignInput
//               type="password"
//               placeholder=""
//               value={password}
//               className={passwordInputClass}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//             {passwordError ? (
//               <ErrorMsg>{passwordError}</ErrorMsg>
//             ) : (
//               <HelpMsg>
//                 Passwords must contain at least eight characters, including at
//                 least 1 letter and 1 number.
//               </HelpMsg>
//             )}
//             <CaptBox>
//               <Captcha>
//                 <CheckRobo>
//                   <input
//                     type="checkbox"
//                     checked={isCaptChecked}
//                     onChange={handleCaptchaChange}
//                   />
//                   <span>I`m not a robot</span>
//                 </CheckRobo>
//                 <Captlogo>
//                   <img src={captlogo} alt="캡챠로고" />
//                   <span>reCAPTCHA</span>
//                 </Captlogo>
//                 <Privacy>
//                   <span>Privacy - Terms</span>
//                 </Privacy>
//               </Captcha>
//               {CaptError && <ErrorMsg>{CaptError}</ErrorMsg>}
//             </CaptBox>
//             <AgreeBox>
//               <HelpMsg className="dark">
//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={handleCheckboxChange}
//                 />
//                 Opt-in to receive occasional product updates, user research
//                 invitations, company announcements, and digests.
//               </HelpMsg>
//             </AgreeBox>
//             <button type="submit">Sign up</button>
//             <HelpMsg>
//               By clicking “Sign up”, you agree to our{" "}
//               <ColorTxt>terms of service, privacy policy</ColorTxt> and{" "}
//               <ColorTxt>cookie policy</ColorTxt>
//             </HelpMsg>
//           </SignForm>
//         </SignupBox>
//         <LoginBox>
//           <LoginTxt>
//             Already have an account?
//             <LoginLink to="/users/login">Log in</LoginLink>
//           </LoginTxt>
//           <LoginTxt>
//             Are you an employer?
//             <LoginLink to="/users/signup">
//               Sign up on Talent
//               <LinkIcon size={15} />
//             </LoginLink>
//           </LoginTxt>
//         </LoginBox>
//       </SignUpSection>
//     </SignWrap>
//   );
// };

// export default Signup;
