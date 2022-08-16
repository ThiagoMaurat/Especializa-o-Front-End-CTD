// Aqui devemos criar nosso contexto e nosso provider.

import { createContext } from "react";

const MainContext = createContext();

import React from "react";

export default function contextoFormulario() {
  const [dadosFormulario, setDadosFormulario] = React.useState({
    nome: "",
    sobrenome: "",
    email: "",
    nomePokemon: "",
  });

  return (
    <MainContext.Provider
      value={{ dadosFormulario, setDadosFormulario }}
    ></MainContext.Provider>
  );
}
