import {LOGOUT_REQUESTING, USER_SET, USER_UNSET} from "./constants";

export function setUserAction (token) {
    return {
        type: USER_SET,
        token,
    }
}

export function unsetUserAction () {
    return {
        type: USER_UNSET
    }
}

export const logoutRequestAction = () => {
    return {
        type: LOGOUT_REQUESTING
    }
};
