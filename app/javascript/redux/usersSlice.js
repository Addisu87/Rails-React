import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//  Initial States
const initialState = {
  users: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${url}/users`);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
      state.users = action.payload;
    },
    logout: (state) => {
      state.users = null;
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
