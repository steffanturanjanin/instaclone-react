import { call, put, takeLatest } from 'redux-saga/effects';
import {handleApiErrors} from "../../lib/api-errors";
import {LOGOUT_ERROR, LOGOUT_REQUESTING, LOGOUT_SUCCESS} from "./constants";
import {unsetUserAction} from "./actions";
import { createBrowserHistory } from 'history';

const logoutUrl = 'http://localhost:8000/api/auth/logout';
const browserHistory = createBrowserHistory();

function logoutApi() {
    return fetch(logoutUrl, {
        method: 'POST',
        headers: {
            'X-Requested-With' : 'XMLHttpRequest',
        }
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch((error) => { throw error })
}

function* logout() {
    try {
        console.log('logging out');
        const response = yield call(logoutApi);
        console.log(response);
        yield put({ type: LOGOUT_SUCCESS })
    } catch (error) {
        console.log(error);
    }
}

function* removeToken() {
    // yield put(unsetUserAction());
    localStorage.removeItem('token');
    browserHistory.push('/')
}

function* authWatcher() {
    yield takeLatest(LOGOUT_REQUESTING, logout);
    yield takeLatest(LOGOUT_SUCCESS, removeToken);
}

export default authWatcher;
