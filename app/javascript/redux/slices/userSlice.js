import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../axios';
import { setMessage } from './message';

//  Initial States
const initialState = {
  user: null
};

//createAsyncThunk API generates thunks that automatically dispatch those "login/logout" actions.
export const register = createAsyncThunk(
  'user/register',
  async ({ username, email, password }) => {
    try {
      const response = await client.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

const user = JSON.parse(localStorage.getItem('token'));

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    try {
      const data = await client.login(email, password);
      return { user: data };
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  await client.logout();
});

// Slice Reducer
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const { reducer } = userSlice;

export const selectUser = (state) => state.users.user;

export default usersSlice.reducer;
