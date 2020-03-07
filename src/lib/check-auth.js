import { setUserAction } from "../services/auth-service/actions";

export function checkAuthorization ({dispatch}) {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
        const token = JSON.parse(storedToken);

        const createdDate = new Date(token.created);
        const created = Math.round(createdDate.getTime() / 1000);
        const ttl = 1209600;
        const expiry = created + ttl;

        if (created > expiry) {
            return false;
        }

        dispatch(setUserAction(token));
        return true;
    }
    return false;
}

export function checkIndexAuthorization({ dispatch }) {
    return (nextState, replace, next) => {
        if (checkAuthorization(dispatch)) {
            replace('home');

            return next();
        }

        replace('/');

        return next();
    }
}

export function checkProtectedRouteAuthorization({ dispatch, getState}) {

    return (nextState, replace, next) => {
        const user = getState().authReducer;

        if (user && user.token) {
            return next();
        }

        if (checkAuthorization(dispatch)) {
            return next();
        }

        replace('/');
        return next();
    }
}
