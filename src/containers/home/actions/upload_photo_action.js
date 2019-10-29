import { UPLOAD_PHOTO_REQUESTING, UPLOAD_PHOTO_ERROR, UPLOAD_PHOTO_SUCCESS} from "../constants/upload_photo_constants";

export const uploadPhotoRequestAction = function uploadPhotoRequestAction (request) {
    return {
        type: UPLOAD_PHOTO_REQUESTING,
        request
    }
};

