import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './blogsSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer
  }
});

export default store;
