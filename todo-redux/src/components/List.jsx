import { useSelector } from "react-redux";
import { todosSelector } from '../state/todos/selectors';

export function List() {
  const todos = useSelector(todosSelector)

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
                <button className="remove-button" onClick={() => {}}>
                  Remove ✘
                </button>
                <button className="mark-as-done-button" onClick={() => {}}>
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
