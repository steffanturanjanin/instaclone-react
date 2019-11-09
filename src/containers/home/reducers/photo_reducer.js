import { SET_PHOTO, GET_PHOTO_INFO_API_REQUESTING, GET_PHOTO_INFO_API_SUCCESSFUL, GET_PHOTO_INFO_API_ERROR } from "../constants/photo_constants";

const initialState = {
    photo: {},
    comments: [],
    user: {},

    get_photo_info_api : {
        requesting: false,
        successful: false,
        messages: [],
        error: {}
    },

};

const reducer = function photoReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PHOTO : {
            return {
                ...state,
                photo: action.photo,
            }
        }

        case GET_PHOTO_INFO_API_REQUESTING : {
            return {
                ...state,
                comments: [],
                get_photo_info_api: {
                    requesting: true,
                    successful: false,
                    messages: [],
                    error: {}
                }
            }
        }

        case GET_PHOTO_INFO_API_SUCCESSFUL: {
            return {
                ...state,
                comments: action.comments,
                user: action.user,
                get_photo_info_api: {
                    requesting: false,
                    successful: true,
                    messages: action.messages,
                    error: {}
                },
            }
        }

        case GET_PHOTO_INFO_API_ERROR: {
            return {
                ...state,
                get_photo_info_api: {
                    requesting: false,
                    successful: false,
                    messages: [],
                    error: action.error
                }
            }
        }

        default:
            return state
    }
};

export default reducer;