import {LOGOUT_ERROR, LOGOUT_REQUESTING, LOGOUT_SUCCESS, USER_SET, USER_UNSET} from "./constants";

const initialState = {
    isLoggedIn: false,
    requesting: false,
    error: null,
    user: null,
    token: null,
};

const reducer = function authReducer (state = initialState, action) {
  switch (action.type) {
      case USER_SET:
          return {
              isLoggedIn: true,
              user: action.token.user,
              token: action.token,
          };

      case USER_UNSET:
          return {
              isLoggedIn: false,
              user: null,
              token: null,
          };

      case LOGOUT_REQUESTING: {
          return {
              ...state,
              requesting: true,
              error: null,
          }
      }

      case LOGOUT_SUCCESS: {
          return {
              ...state,
              isLoggedIn: false,
              requesting: false,
              error: null,
              user: null,
              token: null
          }
      }

      case LOGOUT_ERROR: {
          return {
              ...state,
              error: action.payload.error
          }
      }

      default:
          return state;
  }
};

export default reducer;
