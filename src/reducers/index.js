import counterReducer from './counter';
import isLoggedinReducer from './isLoggedin';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ counterReducer, isLoggedinReducer });

export default allReducers;
