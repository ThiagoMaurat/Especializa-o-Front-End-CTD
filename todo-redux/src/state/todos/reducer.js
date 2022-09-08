import { ADD_TODO } from './actionTypes';

const INITIAL_STATE = {
  todos: []
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            completed: false
          }
        ]
      };
    default:
      return state;
  };
}