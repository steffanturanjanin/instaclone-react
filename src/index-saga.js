import SignupSaga from './containers/signup/sagas';
import LoginSaga from './containers/login/sagas';
import UploadPhotoSaga from './containers/home/sagas/upload_photo_sagas';
import FeedSaga from './containers/home/sagas/feed_sagas';
import PhotoSaga from './containers/home/sagas/photo_sagas';
import AuthSaga from './services/auth-service/saga.js';
import { all } from 'redux-saga/effects';

export default function* IndexSaga () {
    yield all([
        FeedSaga(),
        SignupSaga(),
        LoginSaga(),
        UploadPhotoSaga(),
        PhotoSaga(),
        AuthSaga()
    ])
}
