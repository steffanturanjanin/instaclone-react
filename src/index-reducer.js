import { combineReducers} from "redux";
import { reducer as form } from "redux-form";
import authReducer from './services/auth-service/reducer';
import signupReducer from './containers/signup/reducer';
import loginReducer from './containers/login/reducer';

const IndexReducer = combineReducers({
    authReducer,
    signupReducer,
    loginReducer,
    form,
});

export default IndexReducer;