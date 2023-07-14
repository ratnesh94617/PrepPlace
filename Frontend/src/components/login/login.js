import React from "react";
import "./login.css";
import img1 from "../../images/2.png";
import logo from "../../images/logo.jpeg";
import LoginBasic from "../login_basic/login_basic";

export default function Login() {
    return (
        <>
            <div className="login">
                <div className="login-left-part">
                    <div className="login-bg"></div>
                    <div className="login-img">
                        <img src={img1} alt="Error" />
                    </div>
                    <div className="login-logo">
                        <img src={logo} alt="PrepBV" />
                    </div>
                </div>
                <div className="login-right-part">
                    <div className="login-text">
                        <h3>Login</h3>
                        <p className="login-user">New User?</p>
                        <p className="login-signup"><a href="./signup">Sign Up</a></p>
                        <hr className="login-hr"></hr>
                        <LoginBasic />
                    </div>
                </div>
            </div>
        </>
    );
}

