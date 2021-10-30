import React, { useState } from "react";
import { auth } from "../../firebase";
import { useHistory, Link } from "react-router-dom";
import "./Signin.css";
import logo from "../../images/logo.svg";

function Signin() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = () => {
    history.push("/Signup");
  };

  const signin = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/Home");
      })
      .catch((e) => {
        if (
          e.message ===
          "This password is invalid or the user does not have a password."
        ) {
          alert("Please check your credentials again");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been delete."
        ) {
          alert("Please check your credentials again");
        } else {
          alert(e.message);
        }
      });
  };
  return (
    <div className="main">
      <div className="logo_part">
        <div>
          <img className="login__logo" src={logo} />
        </div>
        <div className="heading">
          Facebook helps you connect and share
        </div>
        <div className="heading">
          with people.
        </div>
      </div>
      <div className="login">
        <div className="login__container">
          <h3>Log in to Facebook</h3>
          <form>
            <center>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address"
                required
              />
            </center>

            <center>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </center>
            <center>
              <button onClick={signin} className="login__login">
                Sign In
              </button>
            </center>

            <center className="forgotten">
              <Link className="forgot">Forgotten password?</Link>
            </center>
            <div className="breaker"></div>
            <center>
              <button className="create-new-acc" onClick={Signup} type="submit">
                Create New Account
              </button>
            </center>
          </form>
        </div>
        <div className="text-under-create">
          <div style={{ fontWeight: "600", marginRight: "5px" }}>
            Create a Page{" "}
          </div>
          <div style={{ marginRight: "5px" }}>for</div>
          <div style={{ fontWeight: "600", marginRight: "5px" }}>a</div>
          <div>celebrity, brand or business</div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
