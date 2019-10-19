import { USER_SET, USER_UNSET } from "./constants";

export function setUserAction (token) {
    return {
        type: USER_SET,
        token,
    }
}

export function unserUserAction () {
    return {
        type: USER_UNSET
    }
}