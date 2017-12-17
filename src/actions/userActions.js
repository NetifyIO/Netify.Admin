import * as ActionTypes from './actionTypes';
import userApi from '../api/mockUserApi';

// TODO: Any ajax in here

export function loadUsersSuccess(users) {
    console.log('dispatching loadUsersSuccess');
    return {
        type: ActionTypes.LOAD_USERS_SUCCESS,
        users
    }
}

// THUNKS

export function loadUsers() {
    console.log('loadUsers action called');
    return function(dispatch) {
        return userApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    }
}