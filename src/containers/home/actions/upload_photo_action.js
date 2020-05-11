import { UPLOAD_PHOTO_REQUESTING } from "../constants/upload_photo_constants";

export const uploadPhotoRequestAction = function uploadPhotoRequestAction (request) {
    return {
        type: UPLOAD_PHOTO_REQUESTING,
        request
    }
};

