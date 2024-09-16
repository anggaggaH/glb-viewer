import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

import contentSlice from './slices/contentSlice';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [''],
};

const rootReducer = combineReducers({
	content: contentSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				ignoredActionPaths: [],
				ignoredPaths: [],
			},
		}).concat(thunk),
});

export default store;
export const persistor = persistStore(store);
