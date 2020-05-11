import {
    GET_FEED_REQUESTING,
    CURRENT_PHOTO,
    CLOSE_MODAL, NEXT_PHOTO, PREVIOUS_PHOTO
} from "../constants/feed_constants";

export const getFeedRequestAction = () => {
    return {
        type: GET_FEED_REQUESTING,
    }
};

export const currentPhoto = (photo) => {
    return {
        type: CURRENT_PHOTO,
        photo: photo
    }
};

export const nextPhoto = (photo) => {
    return {
        type: NEXT_PHOTO,
        photo: photo
    }
};

export const previousPhoto = (photo) => {
    return {
        type: PREVIOUS_PHOTO,
        photo: photo
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};
