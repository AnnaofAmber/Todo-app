import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer, themeReducer } from './filterStatusSlice';

export const store = configureStore({
  reducer: 
 {tasks: tasksReducer,
filters: filtersReducer,
theme: themeReducer}
});

