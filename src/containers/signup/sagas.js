import { call, put, takeLatest } from 'redux-saga/effects';
import { handleApiErrors } from "../../lib/api-errors";
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';
import { LOGIN_REQUESTING} from "../login/constants";
import history from '../../lib/history';

import { loginRequestAction } from "../login/actions";

const signupUrl = 'http://localhost:8000/api/auth/signup';

function signupApi(username, email, password, password_confirmation) {
    return fetch(signupUrl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'X-Requested-With' : 'XMLHttpRequest',
        },
        body: JSON.stringify({ username, email, password, password_confirmation }),
    })

        .then(handleApiErrors)
        .then(response => response.json())
        .then(json => json)
        .catch((error) =>  {throw error} )
}

function* signupFlow (action) {
    try {
        const { username, email, password, password_confirmation } = action;
        const response = yield call(signupApi, username, email, password, password_confirmation);
        yield put({ type: SIGNUP_SUCCESS, response});
        yield put(loginRequestAction({email, password}));
        //history.push('/');
    } catch (error) {
        console.log(error);
        yield put({ type: SIGNUP_ERROR, error});
    }
}


function* signupWatcher () {

    yield takeLatest(SIGNUP_REQUESTING, signupFlow);
}

export default signupWatcher;

