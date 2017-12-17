import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
    switch(action.type) {
        case ActionTypes.USER_LOGIN_SUCCESS:
        // action.username
        // action.jwt
            return {
                username: action.username,
                token: action.jwt
            };
        case ActionTypes.USER_LOGIN_FAILURE:
            return state
        default:
            return state;
    }
}