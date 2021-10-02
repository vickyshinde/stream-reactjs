import { useReducer, useEffect } from "react";

import SubmitButton from "./SubmitButton";
import UserInput from "./UserInput";

import { loginReducer } from './../reducer/loginReducer';

const initialState = {
  email: "",
  pass: "",
  enabledSubmit: false,
  isEmailValid: false,
  isPassValid: false,
  isShow: false,
};

const HookuseReducer = () => {

  const [loginState, dispatch] = useReducer(loginReducer, initialState);

  // useEffect(() => {
  //   dispatch({
  //     type: "enabledSubmit",
  //     enabledSubmit: (loginState.email, loginState.pass),
  //   });
  // }, [loginState.email, loginState.pass]);

  const onEmailChange = (event) => {
    let validEmail = new RegExp(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
    ).test(loginState.email);

    // email is typing
    if (loginState.email) {
      dispatch({ type: "isEmailValid", isEmailValid: true });
      dispatch({ type: "enabledSubmit", enabledSubmit: false });
    }

    // check email format
    if (validEmail) {
      dispatch({ type: "isEmailValid", isEmailValid: false });
      dispatch({
        type: "enabledSubmit",
        enabledSubmit: (loginState.email && loginState.pass),
      });
    } else {
      console.log("invalid");
    }

    dispatch({ type: "email", email: event.target.value });
  };

  const onPasswordChange = (event) => {
    // pass is typing
    if (loginState.pass.length <= 8) {
      dispatch({ type: "isPassValid", isPassValid: true });
      dispatch({ type: "enabledSubmit", enabledSubmit: false });

    } else {
      dispatch({ type: "isPassValid", isPassValid: false });
      dispatch({
        type: "enabledSubmit",
        enabledSubmit: loginState.email && loginState.pass,
      });
    }
    dispatch({ type: "pass", pass: event.target.value });
  };

  const onSubmitClick = () => {
    console.log("email :" + loginState.email);
    console.log("password : " + loginState.pass);

    dispatch({ type: "isShow", isShow: true });

    // dispatch({ type: "email", email: '' });
    // dispatch({ type: "pass", pass: '' });
    alert("login Success");

  };

  return (
    <>
      <UserInput
        label="Email address"
        id="email"
        type="email"
        clsName="form-control"
        placeholder="Enter email"
        errorMsg={"Please enter valid email id"}
        isValid={loginState.isEmailValid}
        onChange={onEmailChange}
        val={loginState.email}
      />
      <UserInput
        label="Password"
        id="password"
        type="password"
        clsName="form-control"
        placeholder="Enter password"
        errorMsg={"Please enter min 8 character password"}
        isValid={loginState.isPassValid}
        onChange={onPasswordChange}
        val={loginState.pass}
      />
      <SubmitButton
        disabled={!loginState.enabledSubmit}
        title="Submit"
        clsName="btn btn-primary"
        onClick={onSubmitClick}
      />

      {loginState.isShow && (
        <>
          <code>Email - {loginState.email}</code>
          <code>password - {loginState.pass}</code>
        </>
      )}
    </>
  );
};

export default HookuseReducer;
