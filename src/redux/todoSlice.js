import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoArray: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const existingTodo = state.todoArray.map(
        (todo) => todo.id === action.payload.id
      );
      if (existingTodo) {
        state.todoArray.push(action.payload);
      } else {
        state.todoArray = action.payload;
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
