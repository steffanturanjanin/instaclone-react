import { call, put, takeLatest, all } from 'redux-saga/effects'
import {
    GET_PHOTO_INFO_API_REQUESTING,
    GET_PHOTO_INFO_API_SUCCESSFUL,
    GET_PHOTO_INFO_API_ERROR,
    GET_LIKES_API_REQUESTING,
    GET_LIKES_API_SUCCESSFUL,
    GET_LIKES_API_ERROR,
    POST_COMMENT_API_SUCCESSFUL,
    POST_COMMENT_API_ERROR,
    POST_COMMENT_API_REQUESTING,
    POST_LIKE_API_SUCCESSFUL,
    POST_LIKE_API_ERROR,
    POST_UNLIKE_API_SUCCESSFUL,
    POST_UNLIKE_API_ERROR,
    POST_LIKE_API_REQUESTING, POST_UNLIKE_API_REQUESTING
} from "../constants/photo_constants";
import { handleApiErrors } from "../../../lib/api-errors";


function postCommentApi (photo_id, comment_content) {
    return fetch ('http://localhost:8000/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({photo_id, comment_content})
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function getCommentsApi (photo_id) {
    return fetch(`http://localhost:8000/api/photos/${photo_id}/comments`, {
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
    return fetch(`http://localhost:8000/api/users/${user_id}`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function postLikeApi (photo_id) {
    return fetch('http://localhost:8000/api/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({photo_id})
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function postUnlikeApi (photo_id) {
    return fetch('http://localhost:8000/api/likes', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({photo_id})
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function getLikesApi (photo_id) {
    return fetch(`http://localhost:8000/api/photos/${photo_id}/likes`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        }
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .catch(error => {throw error})
}

function getLikeApi (photo_id) {
    return fetch(`http://localhost:8000/api/photos/${photo_id}/likes/user`, {
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
        const response = yield call(postCommentApi, action.photo_id, action.content);
        yield put({type: POST_COMMENT_API_SUCCESSFUL, comment: response.data});
    } catch (error) {
        yield put({type: POST_COMMENT_API_ERROR, error: error})
    }
}

function* getPhotoInfo (action) {
    try {
        const [like, comments, user] = yield all([call(getLikeApi, action.photo_id), call(getCommentsApi, action.photo_id), call(getUserApi, action.user_id)]);
        yield put({type: GET_PHOTO_INFO_API_SUCCESSFUL, comments: comments.data, user: user.data, like: like.data});
    } catch (error) {
        yield put({type: GET_PHOTO_INFO_API_ERROR, error});
    }
}

function* postLike (action) {
    try {
        const response = yield call(postLikeApi, action.photo_id);
        yield put({type: POST_LIKE_API_SUCCESSFUL, like: response.data, photo_id: action.photo_id});
    } catch (error) {
        yield put({type: POST_LIKE_API_ERROR, error: error})
    }
}

function* postUnlike (action) {
    try {
        const response = yield call(postUnlikeApi, action.photo_id, action.user_id);
        yield put({type: POST_UNLIKE_API_SUCCESSFUL, like: response.data, photo_id: action.photo_id});
    } catch (error) {
        console.log(error);
        yield put({type: POST_UNLIKE_API_ERROR, error: action.error});
    }
}

function* getLikes (action) {
    try {
        const response = yield call(getLikesApi, action.photo_id);
        yield put({type: GET_LIKES_API_SUCCESSFUL, likes: response.data});
    } catch (error) {
        yield put({type: GET_LIKES_API_ERROR, error: error});
    }
}

function* photoWatcher () {
    yield takeLatest(GET_PHOTO_INFO_API_REQUESTING, getPhotoInfo);
    yield takeLatest(GET_LIKES_API_REQUESTING, getLikes);
    yield takeLatest(POST_COMMENT_API_REQUESTING, postComment);
    yield takeLatest(POST_LIKE_API_REQUESTING, postLike);
    yield takeLatest(POST_UNLIKE_API_REQUESTING, postUnlike);
}

export default photoWatcher;


