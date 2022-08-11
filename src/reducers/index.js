import { configureStore } from '@reduxjs/toolkit';
import createReducer from './combineReducers';
import { loadState } from './loadState';

const store = configureStore({
	reducer: createReducer(),
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware();
	},
}, loadState());

store.asyncReducers = {};

// export const injectReducer = (key, reducer) => {
// 	if (store.asyncReducers[key]) {
// 		return false;
// 	}
// 	store.asyncReducers[key] = reducer;
// 	store.replaceReducer(createReducer(store.asyncReducers));
// 	return store;
// };

export default store;
