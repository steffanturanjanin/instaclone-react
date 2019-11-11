import { SET_PHOTO, GET_PHOTO_INFO_API_REQUESTING, GET_LIKES_API_REQUESTING, POST_COMMENT_API_REQUESTING, CLOSE_LIKES_MODAL } from "../constants/photo_constants";

export const setPhoto = (photo) => ({
    type: SET_PHOTO,
    photo: photo,
});

export const getPhotoInfoRequestAction = (photo_id, user_id, content) => ({
    type: GET_PHOTO_INFO_API_REQUESTING,
    photo_id: photo_id,
    user_id: user_id,
    content: content,
});

export const getLikesRequestAction = (photo_id) => ({
    type: GET_LIKES_API_REQUESTING,
    photo_id: photo_id
});

export const postCommentRequestAction = (photo_id, user_id, content) => ({
    type: POST_COMMENT_API_REQUESTING,
    photo_id: photo_id,
    user_id: user_id,
    content: content
});

export const closeLikesModalAction = () => ({
   type: CLOSE_LIKES_MODAL
});