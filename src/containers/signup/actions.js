import {SIGNUP_ERROR, SIGNUP_REQUESTING} from "./constants";

export const signupRequestAction = function signupRequestAction ({ username, email, password, password_confirmation }) {
  return {
      type: SIGNUP_REQUESTING,
      username,
      email,
      password,
      password_confirmation
  }
};

export const signupErrorAction = function signupErrorAction(error) {
    return {
        type: SIGNUP_ERROR,
        error
    }
};
