import { LOGIN_REQUESTING } from "./constants";

const loginRequestAction = function loginRequestAction({ email, password }) {
  return {
      type: LOGIN_REQUESTING,
      email,
      password,
  }
};

export default loginRequestAction;