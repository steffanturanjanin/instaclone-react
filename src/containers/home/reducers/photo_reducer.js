import {
    SET_PHOTO,
    GET_PHOTO_INFO_API_REQUESTING,
    GET_PHOTO_INFO_API_SUCCESSFUL,
    GET_PHOTO_INFO_API_ERROR,
    CLOSE_LIKES_MODAL,
    GET_LIKES_API_REQUESTING,
    GET_LIKES_API_SUCCESSFUL,
    GET_LIKES_API_ERROR,
    POST_COMMENT_API_REQUESTING,
    POST_COMMENT_API_SUCCESSFUL,
    POST_COMMENT_API_ERROR,
    POST_LIKE_API_REQUESTING,
    POST_LIKE_API_SUCCESSFUL,
    POST_LIKE_API_ERROR,
    POST_UNLIKE_API_REQUESTING, POST_UNLIKE_API_SUCCESSFUL, POST_UNLIKE_API_ERROR,
} from "../constants/photo_constants";

const initialState = {
    photo: {},
    comments: [],
    user: {},
    like: false,

    get_photo_info_api : {
        requesting: false,
        successful: false,
        messages: [],
        error: {}
    },

    get_likes_api: {
        requesting: false,
        successful: false,
        messages: [],
        error: {}
    },

    post_comment_api: {
        requesting: false,
        successful: false,
        messages: [],
        error: {}
    },

    post_like_api: {
        requesting: false,
        successful: false,
        messages: [],
        error: {}
    },

    post_unlike_api: {
        requesting: false,
        successful: false,
        messages: [],
        error: {}
    },

    likes_modal: {
        show: false,
        likes: [],
    }

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
                like: action.like !== false,
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

        case CLOSE_LIKES_MODAL: {
            return {
                ...state,
                likes_modal: {
                    ...state.likes_modal,
                    show: false,
                }
            }
        }

        case GET_LIKES_API_REQUESTING: {
            return {
                ...state,
                get_likes_api: {
                    requesting: true,
                    successful: false,
                    messages: [],
                    error: {}
                },
                likes_modal: {
                    ...state.likes_modal,
                    show: true
                }
            }
        }

        case GET_LIKES_API_SUCCESSFUL: {
            return {
                ...state,
                get_likes_api: {
                    requesting: false,
                    successful: true,
                    messages: [],
                    error: {}
                },
                likes_modal: {
                    ...state.likes_modal,
                    likes: action.likes
                }
            }
        }

        case GET_LIKES_API_ERROR: {
            return {
                ...state,
                get_likes_api: {
                    requesting: false,
                    successful: false,
                    messages: [],
                    error: action.error
                }
            }
        }

        case POST_COMMENT_API_REQUESTING: {
            return {
                ...state,
                post_comment_api: {
                    requesting: true,
                    successful: false,
                    messages: [],
                    error: {}
                }
            }
        }

        case POST_COMMENT_API_SUCCESSFUL: {
            let photo = state.photo;
            photo.comments++;
            return {
                ...state,
                comments: [...state.comments, action.comment],
                photo: photo,
                post_comment_api: {
                    requesting: false,
                    successful: true,
                    messages: [],
                    error: {}
                }
            }
        }

        case POST_COMMENT_API_ERROR: {
            return {
                ...state,
                post_comment_api: {
                    requesting: false,
                    successful: false,
                    messages: [],
                    error: action.error
                }
            }
        }

        case POST_LIKE_API_REQUESTING: {
            return {
                ...state,
                like: true,
                post_like_api: {
                    requesting: true,
                    successful: false,
                    messages: [],
                    error: {}
                }
            }
        }

        case POST_LIKE_API_SUCCESSFUL: {
            let photo = state.photo;
            photo.likes++;
            return {
                ...state,
                like: true,
                photo: photo,
                post_like_api: {
                    requesting: false,
                    successful: true,
                    messages: [],
                    error: {}
                },
                likes_modal: {
                    ...state.likes_modal,
                    likes: [...state.likes_modal.likes, action.like]
                }
            }
        }

        case POST_LIKE_API_ERROR: {
            return {
                ...state,
                like: false,
                post_like_api: {
                    requesting: false,
                    successful: false,
                    messages: [],
                    error: action.error
                }
            }
        }

        case POST_UNLIKE_API_REQUESTING: {
            return {
                ...state,
                like: false,
                post_unlike_api: {
                    requesting: false,
                    successful: false,
                    messages: [],
                    error: {}
                }
            }
        }

        case POST_UNLIKE_API_SUCCESSFUL: {
            let photo = state.photo;
            photo.likes--;
            return {
                ...state,
                like: false,
                photo: photo,
                post_unlike_api: {
                    requesting: false,
                    successful: true,
                    messages: [],
                    error: {}
                },
                likes_modal: {
                    ...state.likes_modal,
                    likes: state.likes_modal.likes.filter(like => like !== action.like)
                }
            }
        }

        case POST_UNLIKE_API_ERROR: {
            return {
                ...state,
                like: false,
                post_unlike_api: {
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
