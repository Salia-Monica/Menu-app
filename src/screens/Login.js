import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="form">
      <div className="col-sm-12 col-md-6 col-lg-4 col-x1-4 m-3 p-3bg-">
        <div className="form-group m-2">
          <label htmlFor="username">username</label>
          <input
            type="username"
            className="form-control"
            placeholder="enter email"
          />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 col-x1-4 m-3 p-3bg-">
          <div className="form-group m-2">
            <label htmlFor="email">email</label>
            <input
              type="email"
              className="form-control"
              placeholder="enter email"
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="form-control"
              placeholder="enter password"
            />
          </div>
          <button type="submit" className="btn btn primary m-2">
            login
          </button>
          <div>
            I don't have an account
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
