import { GET_FEED_REQUESTING, GET_FEED_SUCCESSFUL, GET_FEED_ERROR } from "../constants/feed_constants";

export const getFeedRequestAction = () => {
    return {
        type: GET_FEED_REQUESTING,
    }
};