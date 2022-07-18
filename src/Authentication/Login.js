import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { authentication } from "../firebase";
import Logo from "../Assets/Images/Img.png";
import Icon from "../Assets/Images/Icon.png";
import "../Assets/Styles/Login.css";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Login with firebase
  const signIn = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user, "open");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setErrorEmail("Please provide valid email");
        setErrorPassword("Please provide valid password");
      });
  };

  // Google authentication with firebase
  const signInWithFirebase = (e) => {
    e.preventDefault();
    var google_pro = new GoogleAuthProvider();
    signInWithPopup(authentication, google_pro)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row no-gutter">
          <div className="col-md-7  d-md-flex  ">
            <img src={Logo} className="img p-5" alt="Logo" />
          </div>

          <div className="col-md-5  mt-5">
            <div className="login d-flex align-items-center ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-9 mx-auto">
                    <img src={Icon} className="icon" alt="icon" />
                    <h3>Login in Your account</h3>
                    <p>Welcome back! Please enter your details</p>
                    <form>
                      <div className="form-group mb-3 ">
                        <input
                          id="inputEmail"
                          type="email"
                          name="email"
                          ref={emailRef}
                          placeholder="Email address"
                          required=""
                          className="form-control  border-0 shadow-sm px-4 col-6"
                        />
                      </div>
                      {errorEmail && (
                        <h3
                          style={{
                            color: "red",
                            fontSize: 15,
                            textAlign: "center",
                          }}
                        >
                          {errorEmail}
                        </h3>
                      )}
                      <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          name="password"
                          ref={passwordRef}
                          placeholder="Password"
                          required=""
                          className="form-control   border-0 shadow-sm px-4 text-primary"
                        />
                      </div>
                      {errorPassword && (
                        <h3
                          style={{
                            color: "red",
                            fontSize: 15,
                            textAlign: "center",
                          }}
                        >
                          {errorPassword}
                        </h3>
                      )}
                      <div className="custom-control custom-checkbox mb-3 mt-4">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="customCheck1"
                          className="custom-control-label"
                        >
                          Remember password
                        </label>
                      </div>

                      <button
                        type="submit"
                        onClick={signIn}
                        className="btn btn-danger btn-block text-uppercase mb-2  shadow-sm col-12"
                      >
                        Sign in
                      </button>
                      <button
                        onClick={signInWithFirebase}
                        type="submit"
                        className="btn btn-light btn-block text-uppercase mb-2  shadow-sm col-12"
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/google-logo.png"
                          alt="smg"
                          className="google_icon"
                        />
                        Sign in with Google
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
