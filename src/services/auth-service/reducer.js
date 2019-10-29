import { USER_SET, USER_UNSET } from "./constants";

const initialState = {
    user: null,
    token: null,
};

const reducer = function authReducer (state = initialState, action) {
  switch (action.type) {
      case USER_SET:
          console.log(action.token);
          return {
              user: action.token.user,
              token: action.token,
          };

      case USER_UNSET:
          return {
              user: null,
              token: null,
          };

      default:
          return state;
  }
};

export default reducer;