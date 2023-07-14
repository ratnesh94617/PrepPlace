export default function validateInfo(values) {
  let errors = {};
  //Checking Conditions for username
  if (!values.name.trim()) {
    errors.name = "Username required";
  }
  //Checking conditions for email
  if (!values.email) {
    errors.email = "Email required";
  }
  else if (!/^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@banasthali.in$/i.test(values.email)) {
    //else if (^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@banasthali.in$) {
    errors.email = "Email address in invalid";
  }

  if(!values.year)
  {
    errors.year = "Year required";
  }
  if(!values.branch)
  {
    errors.branch = "Branch required";
  }

  if (!values.linkedInId) {
    errors.linkedInId = "URL required";
  }

  if (!values.githubId) {
    errors.githubId = "URL required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be 6 characters or more!";
  }

  if (!values.cpassword) {
    errors.cpassword = "Password is required";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "Passwords do not match";
  }

  return errors;
}
