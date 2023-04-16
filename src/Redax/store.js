import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'react-redux';
import { contactsReducer } from './contactSlice';
// import persistStore from 'redux-persist';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReduser = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReduser,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
