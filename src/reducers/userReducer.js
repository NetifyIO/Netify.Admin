import * as ActionTypes from '../actions/actionTypes'
import initialState from './initialState';

// never do api calls or routing transitions in reducers.

export default function userReducer(state = initialState.users, action) {
    switch(action.type) {
        case ActionTypes.LOAD_USERS_SUCCESS:
            return action.users;
        default:
            return state;
    }
}