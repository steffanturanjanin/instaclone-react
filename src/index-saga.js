import SignupSaga from './containers/signup/sagas';
import LoginSaga from './containers/login/sagas';
import { all } from 'redux-saga/effects';

export default function* IndexSaga () {
    yield all([
        SignupSaga(),
        LoginSaga(),
    ])
}