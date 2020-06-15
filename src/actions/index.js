import { getAllUsers } from './user-action';
import { getPosts, deletePost } from './post-action';

export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILURE = "USERS_FAILURE";

export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_FAILURE = "POSTS_FAILURE";

export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";

export {
    getAllUsers,
    getPosts,
    deletePost,
};