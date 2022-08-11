import { combineReducers } from '@reduxjs/toolkit';
import user from './store/authSlice';

const createReducer = asyncReducers =>
	combineReducers({
		user,
        ...asyncReducers
	});

export default createReducer;
