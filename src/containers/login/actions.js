import { LOGIN_REQUESTING, LOGIN_ERROR } from "./constants";

export const loginRequestAction = function loginRequestAction({ email, password }) {
  return {
      type: LOGIN_REQUESTING,
      email,
      password,
  }
};

export const loginErrorAction = function loginErrorAction(error) {
    return {
        type: LOGIN_ERROR,
        error,
    }
};
