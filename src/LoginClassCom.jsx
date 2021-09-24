import React from "react";
import SubmitButton from "./SubmitButton";
import UserInputClassCom from "./UserInputClassCom";

class LoginClassCom extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      canSubmit: false,
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onEmailChange(email) {
    console.log(email);
    this.setState({
      email: email,
      canSubmit: email && this.state.pass
    });
  }

  // state change call back
  onPasswordChange(pass) {
    console.log(pass);
    this.setState({
      pass: pass,
    }, () => {
      this.setState({
        canSubmit: pass && this.state.email,
      });
    });
  }

  onSubmitClick() {

      console.log("email :" + this.state.email);
      console.log("password : " + this.state.pass);

  }

  render() {
    return (
      <div className="loginWrap">
        <UserInputClassCom
          label="Email address"
          id="email"
          type="email"
          clsName="form-control"
          placeholder="Enter email"
          // errorMsg={isEmailValid}
          onChange={this.onEmailChange}
          val={this.state.email}
        />
        <UserInputClassCom
          label="Password"
          id="password"
          type="password"
          clsName="form-control"
          placeholder="Enter password"
          // errorMsg={isPassValid}
          onChange={this.onPasswordChange}
          val={this.state.pass}
        />
        <SubmitButton
          disabled={!this.state.canSubmit}
          title="Submit"
          clsName="btn btn-primary"
          onClick={this.onSubmitClick}
        />
      </div>
    );
  }
};

export default LoginClassCom;
