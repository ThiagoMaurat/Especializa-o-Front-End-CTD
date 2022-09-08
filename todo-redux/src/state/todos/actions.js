import { ADD_TODO } from './actionTypes';

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      title
    }
  };
}