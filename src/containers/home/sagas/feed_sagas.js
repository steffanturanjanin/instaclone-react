import { call, put, takeLatest } from 'redux-saga/effects';
import { handleApiErrors } from "../../../lib/api-errors";
import { GET_FEED_REQUESTING, GET_FEED_SUCCESSFUL, GET_FEED_ERROR } from "../constants/feed_constants";

const getFeedUrl = 'http://localhost:8000/api/photo';

function getFeedApi() {
    return fetch(getFeedUrl, {
        method: 'GET',
        headers: {
            'X-Requested-With' : 'XMLHttpRequest',
        }
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch((error) => { throw error })
}

function* getFeed() {
    try {
        const response = yield call(getFeedApi);
        yield put({ type: GET_FEED_SUCCESSFUL, photos: response.data });
    } catch (error) {
        console.log(error);
    }
}

function* feedWatcher() {
    yield takeLatest(GET_FEED_REQUESTING, getFeed);
}

export default feedWatcher;
