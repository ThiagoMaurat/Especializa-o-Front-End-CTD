import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import ContextoFormulario from "./context/contextoFormulario";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route
          path="/formularioEntrada"
          element={
            <ContextoFormulario>
              <Formulario />
            </ContextoFormulario>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
