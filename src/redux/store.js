import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filterStatusSlice';
import { themeReducer } from './changeThemeSlice';

// export const store = configureStore({
//   reducer: 
//  {tasks: tasksReducer,
// filters: filtersReducer,
// theme: themeReducer}
// });

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authConfig = {
  key: 'theme',
  storage,
  // whitelist: ['token'],
};

export const rootReducer = combineReducers({

tasks: tasksReducer,
filters: filtersReducer,
theme: persistReducer(authConfig, themeReducer)
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
