import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    removeTodo(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    markAsCompleted(state, action) {
      const todo = state.list.find((todo) => todo.id === action.payload);
      todo.completed = true;
    }
  }
});

export const listSelector = (state) => state.todos.list;
export const { addTodo, removeTodo, markAsCompleted } = todosSlice.actions;
export default todosSlice.reducer;