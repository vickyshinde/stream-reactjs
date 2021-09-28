import { useState } from "react";

import SubmitButton from "./SubmitButton";
import UserInput from "./UserInput";

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [allEntry, setAllEntry] = useState([]);



  const onEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    // console.log(event.target.value);
    setPass(event.target.value);
  };

  const onSubmitClick = () => {

    if (email && pass) {
      const newEntry = { email: email, pass: pass };

      console.log(newEntry);

      setAllEntry([...allEntry, newEntry]);

      console.log(allEntry);
      setEmail('');
      setPass('');
    }

    // console.log("email :" + email);
    // console.log("password : " + pass);
  };

  /* const onSubmitClick = () => {
    if(!email.length ) {
      console.log('email');
      setIsEmailValid("Please email id");
    } else if (!pass.length) {
      setIsEmailValid('');
      console.log('pass');
      setIsPassValid("Please enter password");
    } else {
      console.log("email :" + email);
      console.log("password : " + pass);
    }
  }; */

  return (
    <>
      <UserInput
        label="Email address"
        id="email"
        type="email"
        clsName="form-control"
        placeholder="Enter email"
        errorMsg=""
        onChange={onEmailChange}
        val={email}
      />
      <UserInput
        label="Password"
        id="password"
        type="password"
        clsName="form-control"
        placeholder="Enter password"
        errorMsg=""
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
