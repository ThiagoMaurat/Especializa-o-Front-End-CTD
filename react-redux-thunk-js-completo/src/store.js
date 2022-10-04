import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './state/todos/todosSlice'

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
})