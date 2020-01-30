import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';

import data from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, data);
const store = createStore(persistedReducer, applyMiddleware(logger)); // logger would be disabled in production build to prevent performance issues

if (store !== undefined) {
  persistStore(store);
}

export default store;
