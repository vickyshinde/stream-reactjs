export const loginReducer = (loginState, payload) => {
  // return modify stats
  switch (payload.type) {
    case "email":
      return { ...loginState, email: payload.email };
      break;
    case "pass":
      return { ...loginState, pass: payload.pass };
      break;
    case "enabledSubmit":
      return { ...loginState, enabledSubmit: payload.enabledSubmit };
      break;
    case "isEmailValid":
      return { ...loginState, isEmailValid: payload.isEmailValid };
      break;
    case "isPassValid":
      return { ...loginState, isPassValid: payload.isPassValid };
      break;
    case "isShow":
      return { ...loginState, isShow: payload.isShow };
      break;
    default:
      return loginState;
  }
};
