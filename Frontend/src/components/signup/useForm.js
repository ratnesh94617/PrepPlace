import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    linkedInId: "",
    githubId: "",
    year: "",
    branch: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(JSON.stringify(values));
    console.log(values);
    fetch("http://localhost:8000/Register", {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        cpassword: values.cpassword,
        linkedInId: values.linkedInId,
        githubId: values.githubId,
        year: values.year,
        branch: values.branch,
      }),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
