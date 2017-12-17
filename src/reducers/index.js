import { combineReducers } from 'redux';
import users from './userReducer';
import posts from './postReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
    users,
    posts,
    session
});

export default rootReducer;

