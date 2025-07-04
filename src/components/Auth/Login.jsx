import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postLogin } from "../../services/apiService";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // validate

    // submit APIS
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <span>Don't have an account yet?</span>
        <button>Sign up</button>
      </div>
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
        <div className="text-center">
          <button
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            &#60;&#60; Go to HomePage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
