import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    //action: {type: "counter/increment", payload: "something"}
    increment: (state, action) => {
      state.count += action.payload;
    },

    //action: {type: "counter/decrement", payload: "something"}
    decrement: (state, action) => {
      state.count -= action.payload;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const demoMiddleware = () => {
  return (dispatch: any) => {
    dispatch({
      type: "counter/setCount",
      payload: 100,
    });
  };
};
