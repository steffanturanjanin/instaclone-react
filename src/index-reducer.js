import { combineReducers} from "redux";
import { reducer as form } from "redux-form";
import authReducer from './services/auth-service/reducer';
import signupReducer from './containers/signup/reducer';
import loginReducer from './containers/login/reducer';
import uploadPhotoReducer from './containers/home/reducers/upload_photo_reducer';

const IndexReducer = combineReducers({
    authReducer,
    signupReducer,
    loginReducer,
    uploadPhotoReducer,
    form,
});

export default IndexReducer;