import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 1;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      return state + action.payload;
    },
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { incrementByAmount, increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
