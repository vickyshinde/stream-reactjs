import React from "react";
import SubmitButton from "./SubmitButton";
import UserInputClassCom from "./UserInputClassCom";

class LoginClassCom extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      emailPrint: "",
      passPrint: "",
      isShow: false,
      isEmailValid: false,
      isPassValid: false,
      canSubmit: false,
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onEmailChange(email) {
    console.log(email);
    let validEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);

    // email is typing
    if(email) {
      this.setState({
        isEmailValid: true,
        canSubmit: false,
      });
    }

    // check email format
    if (validEmail) {
      this.setState({
        isEmailValid: false,
        canSubmit: email && this.state.pass,
      });
    } else {
      console.log('invalid');
    }
    this.setState({
      email: email,
    });

  }

  // state change call back
  onPasswordChange(pass) {
    // pass is typing
    if (pass.length <= 8) {
      this.setState({
        isPassValid: true,
        canSubmit: false,
      });
    } else {
      this.setState({
          isPassValid: false,
          canSubmit: pass && this.state.email,
        }
      );
    }
    this.setState({
      pass: pass,
    });
    // console.log(pass);
  }

  onSubmitClick() {

      console.log("email :" + this.state.email);
      console.log("password : " + this.state.pass);

    this.setState({
      emailPrint: this.state.email,
      passPrint: this.state.pass,
      isShow: true,
    });

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
          errorMsg={"Please enter valid email id"}
          isValid={this.state.isEmailValid}
          onChange={this.onEmailChange}
          val={this.state.email}
        />
        <UserInputClassCom
          label="Password"
          id="password"
          type="password"
          clsName="form-control"
          placeholder="Enter password"
          errorMsg={"Please enter min 8 character password"}
          isValid={this.state.isPassValid}
          onChange={this.onPasswordChange}
          val={this.state.pass}
        />
        <SubmitButton
          disabled={!this.state.canSubmit}
          title="Submit"
          clsName="btn btn-primary mb-4"
          onClick={this.onSubmitClick}
        />
        {this.state.isShow && (
          <>
            <code>Email - {this.state.emailPrint}</code>
            <code>password - {this.state.passPrint}</code>
          </>
        )}
      </div>
    );
  }
};

export default LoginClassCom;
