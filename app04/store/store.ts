//Slice
// - state
// - reducer
// - action --> {type: "ten-action", payload: 'du lieu'}

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counter";
import { todoSlice } from "./slice/todo";

// - action creator --> Hàm trả về action object
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
  },
});
