import { GetPosts, DeletePost } from '../services/post-service';
import { POSTS_SUCCESS, POSTS_FAILURE, DELETE_POST_SUCCESS } from './index';

export const getPosts = () =>
    async dispatch => {
        await GetPosts()
        .then(response => {
            dispatch({
                type: POSTS_SUCCESS,
                payload: response
            });                
        })
        .catch(error => {        
            dispatch({
                type: POSTS_FAILURE,
                payload: error
            });
        })
    }

export const deletePost = (postId) =>
    dispatch => {
        //await DeletePost(postId)
        //.then(response => {
            dispatch({
                type: DELETE_POST_SUCCESS,
                payload: postId
            });                
        //})
    }

const getUserPost = ({userId}) => {}
