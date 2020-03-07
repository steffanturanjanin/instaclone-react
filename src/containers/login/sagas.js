import { take, fork, cancel, call, put, cancelled, takeLatest } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import { handleApiErrors } from "../../lib/api-errors";
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR} from "./constants";
import { setUserAction, unsetUserAction } from "../../services/auth-service/actions";
import { USER_SET, USER_UNSET} from "../../services/auth-service/constants";
import { Redirect } from 'react-router-dom';

const loginUrl = 'http://localhost:8000/api/auth/login';
const browserHistory = createBrowserHistory();

function loginApi (email, password) {
    return fetch(loginUrl, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
        body: JSON.stringify({ email, password }),
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .then(json => json)
        .catch((error) => { throw error })
}

function* logout() {
    yield put(unsetUserAction());
    localStorage.removeItem('token');
    browserHistory.push('/')
    /*push to /login*/
}

function* loginFlow (email, password) {
    let token;
    try {
        token = yield call(loginApi, email, password);
        yield put(setUserAction(token));
        yield put({type: LOGIN_SUCCESS});

        localStorage.setItem('token', JSON.stringify(token));
        //browserHistory.push('/');
    } catch (error) {
        yield put({type: LOGIN_ERROR, error});
    } finally {
        if (yield cancelled()) {
            browserHistory.push('/');
            /*push to /login*/
        }
    }
    return token;
}

function* loginWatcher () {
    while (true) {
        const { email, password } = yield take(LOGIN_REQUESTING);
        const task = yield fork(loginFlow, email, password);
        const action = yield take([USER_UNSET, LOGIN_ERROR]);
        if (action.type === USER_UNSET) {
            yield cancel(task);
        }
        yield call(logout);
    }

}

export default loginWatcher;
