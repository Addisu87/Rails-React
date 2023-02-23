import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//  Initial States
const initialState = {
  users: null
};

//createAsyncThunk API generates thunks that automatically dispatch those "login/logout" actions.
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${baseURL}/users`);
  return response.data;
});

// Slice Reducer
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

export const selectUser = (state) => state.users.users;

export default usersSlice.reducer;
