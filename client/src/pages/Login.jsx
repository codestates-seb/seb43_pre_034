import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <section>
        <div>
            <button>Log in with Google</button>
            <button>Log in with Github</button>
            <button>Log in with Facebook</button>
            <div>
                <form onSubmit={handleSubmit}>
                <label>Email</label>
                <Input
                    type="text"
                    placeholder=""
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    hasError={emailError !== ""}
                />
                {emailError && <span>{emailError}</span>}
                <div>
                    <label>Password</label>  
                    <span>Forgot password?</span>
                </div>
                    <Input
                        type="password"
                        placeholder=""
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        hasError={passwordError !== ""}
                    />
                    {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
                    <button type="submit">Log in</button>
                    </form>
                    <span>Don’t have an account? <span>Sign up</span></span>
                    <span>Are you an employer? <span>Sign up on Talent</span></span>
                </div>
            </div>
        </section>
    </>
  );
};

export default Login;