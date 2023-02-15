import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//  Initial States
const initialState = {
  users: [],
  status: 'idle',
  error: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${url}/users`);
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(name, email, userId) {
        // omit prepare logic
      }
    }
  },

  // extraReducers to listen fetch users additional actions
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const { userAdded } = userSlice.actions;

export default userSlice.reducer;
