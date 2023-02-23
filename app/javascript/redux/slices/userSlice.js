import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../../services/authServices';
import { setMessage } from './message';

//  Initial States
const initialState = {
  user: null
};

//createAsyncThunk API generates thunks that automatically dispatch those "login/logout" actions.
export const register = createAsyncThunk(
  'user/register',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(username, email, password);
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
      const data = await AuthService.login(email, password);
      return { user: data };
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  await AuthService.logout();
});

// Slice Reducer
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  }
});

export const { reducer } = userSlice;

export const selectUser = (state) => state.users.user;

export default userSlice.reducer;
