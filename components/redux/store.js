import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';

import rootReducer from './reducers';

const initialstate = {};

const middleware = [thunk];

const store = createStore( rootReducer, initialstate, applyMiddleware(...middleware)
 );



export default store;