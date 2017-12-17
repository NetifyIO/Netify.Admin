import * as ActionsTypes from './actionTypes';
import sessionApi from '../api/mockSessionApi';

// ACTIONS

export function userLoggedIn(username, jwt) {
    return {
        type: ActionsTypes.USER_LOGIN_SUCCESS,
        username,
        jwt
    }
}

export function userLoginFailed(username) {
    return {
        type: ActionsTypes.USER_LOGIN_FAILURE,
        username
    }
}

// THUNKS

export function logInUser(username, password) {
    console.log('logInUser thunk invoked', username, password);
    return function(dispatch) {
        return sessionApi.getJwtToken(username, password).then(jwt => {
            window.localStorage.setItem('identity', jwt);
            dispatch(userLoggedIn(username, jwt)) 
        }).catch(error => {
            dispatch(userLoginFailed(username));
            throw(error);
        });
    }
}