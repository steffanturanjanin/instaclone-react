import { SET_PHOTO } from "../constants/photo_constants";

export const setPhoto = (photo) => ({
    type: SET_PHOTO,
    photo: photo,
});