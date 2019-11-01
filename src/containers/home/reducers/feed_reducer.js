import { GET_FEED_REQUESTING, GET_FEED_SUCCESSFUL, GET_FEED_ERROR } from "../constants/feed_constants";
import { ADD_PHOTO } from "../constants/feed_constants";

const initialState = {
    photos: [],

    get_feed_requesting: false,
    get_feed_successful: false,
    get_feed_error: {}
};

const reducer = function feedReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FEED_REQUESTING:
            return {
                ...state,
                photos: [],

                get_feed_requesting: true,
                get_feed_successful: false,
                get_feed_error: {},
            };

        case GET_FEED_SUCCESSFUL:
            return {
                ...state,
                photos: action.photos,

                get_feed_requesting: false,
                get_feed_successful: true,
                get_feed_error: {},

            };

        case GET_FEED_ERROR:
            return {
                ...state,
                photos: [],

                get_feed_requesting: false,
                get_feed_successful: false,
                get_feed_error: action.error,
            };

        case ADD_PHOTO:
            return {
                ...state,
                photos: [action.uploaded_photo, ...state.photos]
            };

        default:
            return state;
    }
};

export default reducer;