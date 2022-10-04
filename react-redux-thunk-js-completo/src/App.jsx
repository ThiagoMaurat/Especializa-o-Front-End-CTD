import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./state/todos/todosSlice";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React + Redux + Thunk | Aula 3</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
