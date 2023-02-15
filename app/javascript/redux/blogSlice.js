import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL
const url = 'http://localhost:3000';

//  Initial States
const initialState = {
  blogs: [],
  status: 'idle',
  error: null
};

//createAsyncThunk API generates thunks that automatically dispatch those "start/success/failure" actions.
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios.get(`${url}/blogs`);
  return response.data;
});

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
  },

  // extraReducers to listen fetch blogs additional actions
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched blogs to the array
        state.blogs = state.blogs.concat(action.payload);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Action creators are generated for each case reducer function
export const { blogAdded, blogUpdated, reactionAdded } = blogSlice.actions;

export default blogSlice.reducer;

export const selectAllBlogs = (state) => state.blogs.blogs;

export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);
