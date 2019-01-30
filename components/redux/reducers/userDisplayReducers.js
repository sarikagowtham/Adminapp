import { DISPLAY_USER } from '../actions/types';



const initialstate = {
    isAuthenticated : false,
    user : {},
    loading : false
};

export default function(state = initialstate, action){
    switch(action.type){
        case DISPLAY_USER:
            return{
                ...state,
                user : action.payload
            };
            default :
                return state;
            }
        }