import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="leftSec">
          <h1>Aadi Social.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            reprehenderit dolor saepe. Velit ducimus, dolores dicta iure ad nemo
            quo.
          </p>
          <span>Do you have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="rightSec">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to="/login">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
