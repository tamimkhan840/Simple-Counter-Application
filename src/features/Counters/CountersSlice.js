import { createSlice } from "@reduxjs/toolkit";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
  {
    id: 3,
    value: 0,
  },
];

const countersSlice = createSlice({
  name: "counters",
  initialState: initialCounters,
  reducers: {
    increment: (state, action) => {
      const countersIndex = state.findIndex((c) => c.id === action.payload);
      state[countersIndex].value++;
    },
    decrement: (state, action) => {
      const countersIndex = state.findIndex((c) => c.id === action.payload);
      if (state[countersIndex].value > 0) {
          state[countersIndex].value--;

      }
    },
  },
});

export default countersSlice.reducer;


export const { increment, decrement } = countersSlice.actions;
