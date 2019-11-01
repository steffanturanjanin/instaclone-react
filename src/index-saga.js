import SignupSaga from './containers/signup/sagas';
import LoginSaga from './containers/login/sagas';
import UploadPhotoSaga from './containers/home/sagas/upload_photo_sagas';
import FeedSaga from './containers/home/sagas/feed_sagas';
import { all } from 'redux-saga/effects';

export default function* IndexSaga () {
    yield all([
        FeedSaga(),
        SignupSaga(),
        LoginSaga(),
        UploadPhotoSaga(),
    ])
}