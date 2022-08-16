import { createContext } from "react";
import React from "react";

const MainContext = createContext();

const initialState = {
  coach: {
    name: "",
    lastName: "",
    email: "",
  },
  pokemon: {
    name: "",
    type: "",
    element: "",
    height: "",
    age: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_COACH":
      return {
        ...state,
        coach: {
          ...state.coach,
          [action.payload.field]: action.payload.value,
        },
      };
  }
}

export function useFormContext() {
  const formData = React.useContext(MainContext);
  if (!formData) {
    throw new Error("FormData não encontrado");
  }
  return formData;
}

export default function ContextoFormulario(children) {
  const [state, dispatch] = React.useReducer(() => {}, initialState);
  return (
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
}
