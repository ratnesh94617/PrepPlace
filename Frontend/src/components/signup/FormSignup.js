//This will contain the form required for sign up
import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import "./form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <span className="form-input-login">
          Already have an account ? Login <a href="./login">here</a>
        </span>
        <hr />
        <br />
        <h1>Create your new account!</h1>
        <div className="form-inputs">
          <label className="form-label">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Year:</label>
          <input
            id="year"
            type= "number"
            name="year"
            className="form-input"
            placeholder="Enter your current year"
            value={values.year}
            onChange={handleChange}
          />
          {errors.year && <p>{errors.year}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Branch:</label>
          <input
            id="branch"
            type="text"
            name="branch"
            className="form-input"
            placeholder="Enter your branch"
            value={values.branch}
            onChange={handleChange}
          />
          {errors.branch && <p>{errors.branch}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">LinkedIn profile link:</label>
          <input
            id="linkedInId"
            type="url"
            name="linkedInId"
            className="form-input"
            placeholder="Enter your linkedin"
            value={values.linkedInId}
            onChange={handleChange}
          />
          {errors.linkedInId && <p>{errors.linkedInId}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Github profile link:</label>
          <input
            id="githubId"
            type="url"
            name="githubId"
            className="form-input"
            placeholder="Enter your github"
            value={values.githubId}
            onChange={handleChange}
          />
          {errors.githubId && <p>{errors.githubId}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm your password:</label>
          <input
            id="cpassword"
            type="password"
            name="cpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={values.cpassword}
            onChange={handleChange}
          />
          {errors.cpassword && <p>{errors.cpassword}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
