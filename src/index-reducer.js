import { combineReducers} from "redux";
import { reducer as form } from "redux-form";
import authReducer from './services/auth-service/reducer';
import signupReducer from './containers/signup/reducer';
import loginReducer from './containers/login/reducer';
import uploadPhotoReducer from './containers/home/reducers/upload_photo_reducer';
import feedReducer from './containers/home/reducers/feed_reducer';
import photoReducer from './containers/home/reducers/photo_reducer';

const IndexReducer = combineReducers({
    authReducer,
    signupReducer,
    loginReducer,
    uploadPhotoReducer,
    feedReducer,
    photoReducer,
    form,
});

export default IndexReducer;