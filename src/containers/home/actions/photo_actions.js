import { SET_PHOTO, GET_PHOTO_INFO_API_REQUESTING } from "../constants/photo_constants";

export const setPhoto = (photo) => ({
    type: SET_PHOTO,
    photo: photo,
});

export const getPhotoInfoRequestAction = (photo_id, user_id) => ({
    type: GET_PHOTO_INFO_API_REQUESTING,
    photo_id: photo_id,
    user_id: user_id,
});