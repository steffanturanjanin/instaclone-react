import { SIGNUP_REQUESTING } from "./constants";

const signupRequestAction = function signupRequestAction ({ username, email, password, password_confirmation }) {
  return {
      type: SIGNUP_REQUESTING,
      username,
      email,
      password,
      password_confirmation
  }
};

export default signupRequestAction;