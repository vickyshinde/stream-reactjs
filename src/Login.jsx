import { useState } from "react";

import SubmitButton from "./SubmitButton";
import UserInput from "./UserInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const onEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    // console.log(event.target.value);
    setPass(event.target.value);
  };

  const onSubmitClick = () => {
    if(!email.length && !pass.length) {
      console.log('ffffff')
    } else {
      console.log("email :" + email);
      console.log("password : " + pass);
    }
  };

  return (
    <div className="loginWrap">
      <UserInput
        label="Email address"
        id="email"
        type="email"
        clsName="form-control"
        placeholder="Enter email"
        errorMsg="test"
        onChange={onEmailChange}
      />
      <UserInput
        label="Password"
        id="password"
        type="password"
        clsName="form-control"
        placeholder="Enter password"
        errorMsg=""
        onChange={onPasswordChange}
      />
      <SubmitButton
        disabled={false}
        type="submit"
        title="Submit"
        clsName="btn btn-primary"
        onClick={onSubmitClick}
      />
    </div>
  );
};

export default Login;
