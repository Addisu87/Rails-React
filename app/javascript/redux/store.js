import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './slices/blogsSlice';
import userReducer from './slices/userSlice';
import messageReducer from './slices/message';

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    message: messageReducer,
    user: userReducer
  }
});

export default store;
