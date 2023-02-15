import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL
const url = 'http://localhost:3000';

//  Initial States
const initialState = {
  blogs: [],
  status: 'idle',
  error: null
};

// Async Action Creators

// Slice Reducer
const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      prepare(title, content, userId) {
        // omit prepare logic
      }
    },

    reactionAdded(state, action) {
      const { blogId, reaction } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === blogId);
      if (existingBlog) {
        existingBlog.reactions[reaction]++;
      }
    },

    blogUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === id);
      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { blogAdded, blogUpdated, reactionAdded } = blogSlice.actions;

export default blogSlice.reducer;

export const selectAllBlogs = (state) => state.blogs;

export const selectBlogById = (state, blogId) =>
  state.blogs.find((blog) => blog.id === blogId);
