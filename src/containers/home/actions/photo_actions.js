import { SET_PHOTO, GET_PHOTO_INFO_API_REQUESTING, GET_LIKES_API_REQUESTING, CLOSE_LIKES_MODAL } from "../constants/photo_constants";

export const setPhoto = (photo) => ({
    type: SET_PHOTO,
    photo: photo,
});

export const getPhotoInfoRequestAction = (photo_id, user_id) => ({
    type: GET_PHOTO_INFO_API_REQUESTING,
    photo_id: photo_id,
    user_id: user_id,
});

export const getLikesRequestAction = (photo_id) => ({
    type: GET_LIKES_API_REQUESTING,
    photo_id: photo_id
});

export const closeLikesModalAction = () => ({
   type: CLOSE_LIKES_MODAL
});