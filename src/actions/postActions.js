import * as ActionTypes from './actionTypes';
import postApi from '../api/mockPostApi';

// ACTIONS

export function viewPost(post) {
    return {
        type: ActionTypes.VIEW_POST,
        post
    }
}

export function createPost(post) {
    console.log('calling createPost', post);
    return {
        type: ActionTypes.CREATE_POST,
        post
    }
}

export function loadPostsSuccess(posts) {
    console.log('dispatching loadPostsSuccess');
    return {
        type: ActionTypes.LOAD_POSTS_SUCCESS,
        posts
    }
}

// THUNKS

export function loadPosts() {
    console.log('loadPosts action called');
    return function(dispatch) {
        return postApi.getAllPosts().then(posts => {
            dispatch(loadPostsSuccess(posts));
        }).catch(error => {
            throw(error);
        });
    }
}