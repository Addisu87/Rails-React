import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '.slices/blogsSlice';
import usersReducer from '.slices/usersSlice';

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer
  }
});

export default store;
