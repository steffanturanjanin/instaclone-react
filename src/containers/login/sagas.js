import { take, call, put, cancelled } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import { handleApiErrors } from "../../lib/api-errors";
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR} from "./constants";
import { setUserAction } from "../../services/auth-service/actions";

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
        .catch((error) => { throw error })
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
        }
    }
    return token;
}

function* loginWatcher () {
    while (true) {
        const { email, password } = yield take(LOGIN_REQUESTING);
        yield call(loginFlow, email, password);
    }
}

export default loginWatcher;
