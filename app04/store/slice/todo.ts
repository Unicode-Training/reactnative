import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoList.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = "idle";
    });

    builder.addCase(getTodoList.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload as string;
    });
  },
});

//pending
//fulfilled
//rejected
export const getTodoList = createAsyncThunk(
  "getTodoList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos1`
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return data;
    } catch {
      return rejectWithValue("Đã có lỗi xảy ra");
    }
  }
);
