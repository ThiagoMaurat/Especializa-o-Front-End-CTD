import { useSelector, useDispatch } from "react-redux";
import {
  listSelector,
  completeTask,
  deleteTodo,
} from "../state/todos/todosSlice";

export function List() {
  const dispatch = useDispatch();
  const todos = useSelector(listSelector);

  return (
    <div id="list">
      <ul>
        {todos.map((todo) => {
          return (
            <li key={`${todo.title}-${todo.id}`}>
              <h1>
                {todo.title} {todo.completed && "✅"}
              </h1>
              <div>
                <button
                  className="remove-button"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Remove ✘
                </button>
                <button
                  className="mark-as-done-button"
                  onClick={() => dispatch(completeTask(todo))}
                >
                  Done ✔
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
