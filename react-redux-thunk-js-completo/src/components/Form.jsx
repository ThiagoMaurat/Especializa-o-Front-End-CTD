import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../state/todos/todosSlice";

export function Form() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    const title = inputRef.current.value;
    inputRef.current.value = "";

    dispatch(createTodo(title));
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} placeholder="Type your task title" />
    </form>
  );
}
