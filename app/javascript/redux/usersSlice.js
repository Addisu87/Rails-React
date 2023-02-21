import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//  Initial States
const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${url}/users`);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const { login, logout } = usersSlice.actions;

export const selectUser = (state) => state.user.user;

export default usersSlice.reducer;
