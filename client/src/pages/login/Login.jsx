import React, { useContext } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="leftSec">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            reprehenderit dolor saepe. Velit ducimus, dolores dicta iure ad nemo
            quo.
          </p>
          <span>Don't you have any account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="rightSec">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/">
              <button onClick={handleLogin}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
