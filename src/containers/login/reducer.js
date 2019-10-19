import {LOGIN_ERROR, LOGIN_REQUESTING, LOGIN_SUCCESS} from "./constants";

const initialState = {
    requesting: false,
    successful:false,
    messages: [],
    errors: {},
};

const reducer = function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUESTING:
            return {
                requesting: true,
                successful: false,
                messages: [{body: 'Logging in...', time: new Date()}],
                errors: {}
            };

        case LOGIN_SUCCESS:
            return {
                requesting: false,
                successful: true,
                messages: [{body: 'Successfully logged in', time: new Date()}],
                errors: {}
            };

        case LOGIN_ERROR:
            return {
                requesting: false,
                successful: false,
                messages: [],
                errors: {authentication: action.error}
            };

        default:
            return state;
    }
};

export default reducer;