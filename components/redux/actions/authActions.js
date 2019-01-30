import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../utils/setAuthToken';
import { SET_CURRENT_USER, GET_CURRENT_USER, GET_ERRORS, USER_LOADING } from './types';

// Register new user
export const registerUser = (userData) => dispatch => {
    axios.post('/api/users/register', userData)
    .then(res =>  navigation.navigate('login'))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    })        
    );
};

// Login - get user token
export const loginUser = (userData) => dispatch => {
    axios.post("/api/users/login", userData)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        AsyncStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        //console.log(token);
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  // Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };
  // Get current user
  export const getCurrentUser = () => dispatch => {
    dispatch(setUserLoading());
    axios
      .get("/api/user/currentuser")
      .then(res =>
        dispatch({
          type: GET_CURRENT_USER,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  // User loading
  export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
  };

  // Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  AsyncStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
 
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};