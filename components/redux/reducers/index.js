import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducers from './errorReducers';
import userDisplayReducers from './userDisplayReducers';

export default combineReducers({
    auth : authReducer,
    error : errorReducers,
    displayuser : userDisplayReducers
    
});