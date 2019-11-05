import { SET_PHOTO } from "../constants/photo_constants";

const initialState = {
    photo: {}
};

const reducer = function photoReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PHOTO : {
            return {
                ...state,
                photo: action.photo,
            }
        }
        default:
            return state
    }
};

export default reducer;