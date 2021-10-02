import { useState } from "react";

import SubmitButton from "./SubmitButton";
import UserInput from "./UserInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [isEmailValid, setIsEmailValid] = useState("");
  const [isPassValid, setIsPassValid] = useState("");

  // const [isDisabled, setIsDisabled] = useState(true);


  const onEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    // console.log(event.target.value);
    setPass(event.target.value);
  };

  const onSubmitClick = () => {
    if(!email.length ) {
      console.log("Please email id");
      setIsEmailValid("Please email id");
    } else if (!pass.length) {
      setIsEmailValid('');
      console.log("Please enter password");
      setIsPassValid("Please enter password");
    } else {
      console.log("email :" + email);
      console.log("password : " + pass);
      setEmail("");
      setPass("");
    }
  };

  return (
    <>
      <UserInput
        label="Email address"
        id="email"
        type="email"
        clsName="form-control"
        placeholder="Enter email"
        errorMsg={isEmailValid}
        onChange={onEmailChange}
        val={email}
      />
      <UserInput
        label="Password"
        id="password"
        type="password"
        clsName="form-control"
        placeholder="Enter password"
        errorMsg={isPassValid}
        onChange={onPasswordChange}
        val={pass}
      />
      <SubmitButton
        disabled={false}
        title="Submit"
        clsName="btn btn-primary"
        onClick={onSubmitClick}
      />
    </>
  );
};

export default Login;
