const initialState = {
  value: 0
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = blogSlice.actions;

export default blogSlice.reducer;
