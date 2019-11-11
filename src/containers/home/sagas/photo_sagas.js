import { call, put, takeLatest, all } from 'redux-saga/effects'
import {
    GET_PHOTO_INFO_API_REQUESTING,
    GET_PHOTO_INFO_API_SUCCESSFUL,
    GET_PHOTO_INFO_API_ERROR,
    GET_LIKES_API_REQUESTING,
    GET_LIKES_API_SUCCESSFUL,
    GET_LIKES_API_ERROR, POST_COMMENT_API_SUCCESSFUL, POST_COMMENT_API_ERROR, POST_COMMENT_API_REQUESTING
} from "../constants/photo_constants";
import { handleApiErrors } from "../../../lib/api-errors";


function postCommentApi (photo_id, user_id, comment_content) {
    return fetch ('http://localhost:8000/api/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({photo_id, user_id, comment_content})
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function getCommentsApi (photo_id) {
    return fetch(`http://localhost:8000/api/photo/${photo_id}/comment`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error});
}

function getUserApi (user_id) {
    return fetch(`http://localhost:8000/api/user/${user_id}`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function getLikesApi (photo_id) {
    return fetch(`http://localhost:8000/api/like/${photo_id}`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function* postComment (action) {
    try {
        const response = yield call(postCommentApi, action.photo_id, action.user_id, action.content);
        yield put({type: POST_COMMENT_API_SUCCESSFUL, comment: response.data});
    } catch (error) {
        yield put({type: POST_COMMENT_API_ERROR, error: error})
    }
}

function* getPhotoInfo (action) {
    try {
        const [comments, user] = yield all([call(getCommentsApi, action.photo_id), call(getUserApi, action.user_id)]);
        yield put({type: GET_PHOTO_INFO_API_SUCCESSFUL, comments: comments.data, user: user.data});
    } catch (error) {
        yield put({type: GET_PHOTO_INFO_API_ERROR, error});
    }
}

function* getLikes (action) {
    try {
        const response = yield call(getLikesApi, action.photo_id);
        yield put({type: GET_LIKES_API_SUCCESSFUL, likes: response.data})
    } catch (error) {
        yield put({type: GET_LIKES_API_ERROR, error: error})
    }
}

function* photoWatcher () {
    yield takeLatest(GET_PHOTO_INFO_API_REQUESTING, getPhotoInfo);
    yield takeLatest(GET_LIKES_API_REQUESTING, getLikes);
    yield takeLatest(POST_COMMENT_API_REQUESTING, postComment);
}

export default photoWatcher;


