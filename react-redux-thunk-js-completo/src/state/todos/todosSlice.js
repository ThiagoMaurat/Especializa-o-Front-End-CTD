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
    setTodos(state, action) {
      state.list = action.payload;
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

export default todosSlice.reducer;

export const listSelector = (state) => state.todos.list;

export const { addTodo, removeTodo, markAsCompleted, setTodos } = todosSlice.actions;

export function fetchTodos() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/todos');
    const data = await response.json();

    dispatch(setTodos(data));
  }
}

export function deleteTodo(todoId) {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/todos/${todoId}`, { method: 'DELETE' });

    dispatch(removeTodo(todoId));
  }
}

export function completeTask(todo) {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/todos/${todo.id}`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({ ...todo, completed: true })
      }
    );

    dispatch(markAsCompleted(todo.id));
  }
}

export function createTodo(title) {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/todos`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ title, completed: false })
      }
    );

    const createdTodo = await response.json();

    dispatch(addTodo(createdTodo));
  }
}