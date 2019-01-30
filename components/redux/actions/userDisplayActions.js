import axios from 'axios';

import { USER_DISPLAY, GET_ERRORS} from './types';

export const displayUser = () => dispatch => {
    axios.get('http://192.168.43.167/api/users/userlist')
    .then(res => dispatch({
        type : USER_DISPLAY,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    })        
    );
};