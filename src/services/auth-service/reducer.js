import { USER_SET, USER_UNSET } from "./constants";

const initialState = {
    id: null,
    token: null,
};

const reducer = function authReducer (state = initialState, action) {
  switch (action.type) {
      case USER_SET:
          return {
              id: action.token.userId,
              token: action.token,
          }

      case USER_UNSET:
          return {
              id: null,
              token: null,
          }

      default:
          return state;
  }
};

export default reducer;