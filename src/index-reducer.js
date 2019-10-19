import { combineReducers} from "redux";
import { reducer as form } from "redux-form";
import authReducer from './services/auth-service/reducer';
import signupReducer from './containers/signup/reducer';

const IndexReducer = combineReducers({
    authReducer,
    signupReducer,
    form,
});

export default IndexReducer;