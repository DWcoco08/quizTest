import { useState } from "react";
import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const handleLogin = () => {
    alert("me");
  };

  return (
    <div className="login-container">
      <div className="login-header">Don't have an account yet?</div>
      <div className="login-title col-4 mx-auto">IT-QuizTest</div>
      <div className="login-welcome col-4 mx-auto">Hello, Wanna Join Us?</div>
      <div className="login-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot password?</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login to IT-QuizTest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
