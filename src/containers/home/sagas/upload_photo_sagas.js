import { call, put, takeLatest } from 'redux-saga/effects';
import { handleApiErrors } from "../../../lib/api-errors";
import { UPLOAD_PHOTO_REQUESTING, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_ERROR } from "../constants/upload_photo_constants";
import { ADD_PHOTO } from "../constants/feed_constants";

const uploadPhotoUrl = 'http://localhost:8000/api/photo';

function uploadPhotoApi(photo, description) {

    let formData = new FormData();
    formData.append('photo', photo);
    formData.append('description', description);

    return fetch(uploadPhotoUrl, {
        method: 'POST',
        headers: {

            'X-Requested-With' : 'XMLHttpRequest',
        },
        body: formData
    })
        .then(handleApiErrors)
        .then(response => response.json())
        .then(json => json)
        .catch((error) => {throw error})
}

function* uploadPhotoFlow (action) {
    try {
        const {photo, description} = action.request;
        const response = yield call(uploadPhotoApi, photo, description);
        yield put({ type: UPLOAD_PHOTO_SUCCESS, response});
        yield put({ type: ADD_PHOTO, uploaded_photo: response.uploaded_photo})
    } catch (error) {
        yield put({ type: UPLOAD_PHOTO_ERROR, error})
    }
}

function* uploadPhotoWatcher () {
    yield takeLatest(UPLOAD_PHOTO_REQUESTING, uploadPhotoFlow);
}

export default uploadPhotoWatcher;
