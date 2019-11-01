import { UPLOAD_PHOTO_REQUESTING, UPLOAD_PHOTO_SUCCESS, UPLOAD_PHOTO_ERROR } from "../constants/upload_photo_constants";

const initialState = {
    uploaded_photo: null,
    requesting: false,
    successful: false,
    messages: [],
    errors: {},
};

const reducer = function uploadPhotoReducer( state = initialState, action) {
    switch (action.type) {
        case UPLOAD_PHOTO_REQUESTING : {
            return {
                uploaded_photo: null,
                requesting: true,
                successful: false,
                messages: [{body: 'Requesting upload...', time: new Date()}],
                errors: {}
            }
        }

        case UPLOAD_PHOTO_SUCCESS: {
            return {
                uploaded_photo: action.uploaded_photo,
                requesting: false,
                successful: true,
                messages: [{body: 'Photo successfully uploaded', time: new Date()}],
                errors: {}
            }
        }

        case UPLOAD_PHOTO_ERROR: {
            return {
                uploaded_photo: null,
                requesting: false,
                successful: false,
                messages: [],
                errors: action.error,
            }
        }

        default: return state;
    }
};

export default reducer;