import {
    GET_FEED_REQUESTING,
    GET_FEED_SUCCESSFUL,
    GET_FEED_ERROR,
    CURRENT_PHOTO,
    NEXT_PHOTO, PREVIOUS_PHOTO, CLOSE_MODAL
} from "../constants/feed_constants";
import { ADD_PHOTO } from "../constants/feed_constants";

const initialState = {
    photos: [],

    get_feed_api : {
        requesting: false,
        successful: false,
        error: {}
    },

    modal: {
        show: false,
        current_photo: null,
        next_photo: null,
        previous_photo: null,
    }
};

const reducer = function feedReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FEED_REQUESTING:
            return {
                ...state,
                photos: [],

                get_feed_api : {
                    get_feed_requesting: true,
                    get_feed_successful: false,
                    get_feed_error: {},
                }
            };

        case GET_FEED_SUCCESSFUL:
            return {
                ...state,
                photos: action.photos,

                get_feed_api : {
                    requesting: false,
                    successful: true,
                    error: {},
                }

            };

        case GET_FEED_ERROR:
            return {
                ...state,
                photos: [],

                get_feed_api: {
                    requesting: false,
                    successful: false,
                    error: action.error,
                }
            };

        case ADD_PHOTO:
            return {
                ...state,
                photos: [action.uploaded_photo, ...state.photos]
            };

        case CURRENT_PHOTO: {
            let next_photo = null;
            let previous_photo = null;
            state.photos.map((photo, index) => {
                if (photo.id === action.photo.id) {
                    if (index !== state.photos.length) {
                        next_photo = state.photos[index+1];
                    }
                    if (index !== 0) {
                        previous_photo = state.photos[index-1];
                    }
                }
            });
            return {
                ...state,
                modal: {
                    ...state.modal,
                    show: true,
                    current_photo: action.photo,
                    next_photo: next_photo,
                    previous_photo: previous_photo,
                }
            };
        }

        case NEXT_PHOTO: {
            let current_photo = null;
            let next_photo = null;
            state.photos.map((photo, index) => {
               if (photo.id === action.photo.id) {
                   if (index !== state.photos.length) {
                       current_photo = state.photos[index+1];
                   }
                   if (index + 2 <= state.photos.length) {
                       next_photo = state.photos[index+2];
                   }
               }
            });

            return {
                ...state,
                modal : {
                    ...state.modal,
                    current_photo: current_photo,
                    next_photo: next_photo,
                    previous_photo: action.photo,
                }
            }
        }

        case PREVIOUS_PHOTO: {
            let current_photo = null;
            let previous_photo = null;
            state.photos.map((photo, index) => {
                if (photo.id === action.photo.id) {
                    if (index !== 0) {
                        current_photo = state.photos[index-1];
                    }
                    if (index - 2 >= 0) {
                        previous_photo = state.photos[index-2];
                    }
                }
            });

            return {
                ...state,
                modal : {
                    ...state.modal,
                    current_photo: current_photo,
                    next_photo: action.photo,
                    previous_photo: previous_photo
                }
            }
        }

        case CLOSE_MODAL: {
            return {
                ...state,
                modal : {
                    ...state.modal,
                    show: false,
                    current_photo: null,
                    next_photo: null,
                    previous_photo: null,
                }
            }
        }

        default:
            return state;
    }
};

export default reducer;