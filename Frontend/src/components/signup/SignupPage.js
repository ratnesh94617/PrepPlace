// This page contains all the components of sign up page
import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./form.css";
import logo from "../../images/logo.jpeg";
import pic from "../../images/2.png";

const SignupPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className="form-container">
      <span className="close-btn">x</span>

      <div className="form-content-left">
        <img src={logo} alt="Logo" className="form-img" />
        <img src={pic} alt="" className="form-img-2" />
      </div>
      {!isSubmitted ? ( <FormSignup submitForm={submitForm} />) : (<FormSuccess />)} 
    </div>
    </>
   
  );
};

export default SignupPage;
