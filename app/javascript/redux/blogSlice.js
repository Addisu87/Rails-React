import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL
const url = 'http://localhost:3000';

//  Initial States
const initialState = [];

// Async Action Creators

// Slice Reducer
const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    blogAdded: (state) => {
      state.value += 1;
    },
    blogUpdated: (state, action) => {
      state.value += action.payload;
    },
    reactionAdded: (state) => {
      state.value -= 1;
    }
  }
});

// Action creators are generated for each case reducer function
export const { blogAdded, blogUpdated, reactionAdded } = blogSlice.actions;

export default blogSlice.reducer;

export const selectAllBlogs = (state) => state.blogs;

export const selectBlogById = (state, blogId) =>
  state.blogs.find((blog) => blog.id === blogId);
