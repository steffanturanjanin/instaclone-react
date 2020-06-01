import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./constants";

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: {}
};

const reducer = function signupReducer (state = initialState, action) {
  switch (action.type) {
      case SIGNUP_REQUESTING:
          return {
              requesting: true,
              successful: false,
              messages: [{ body: 'Signing in...', time: new Date()}],
              errors: {},
          };

      case SIGNUP_SUCCESS:
          return {
              requesting: false,
              successful: true,
              messages: [{
                  body: `Successfully created account for ${action.response.email}`,
                  time: new Date(),
              }],
              errors: {}
          };

      case SIGNUP_ERROR:

          console.log(action.error);
          return {
              requesting: false,
              successful: false,
              messages: [],
              errors: action.error,
          };

      default:
          return state;
  }
};

export default reducer;
