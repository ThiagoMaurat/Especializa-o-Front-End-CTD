import { createContext, useReducer, useContext } from "react";

const FormContext = createContext();

export function useFormContext() {
  const formData = useContext(FormContext);

  if (!formData) {
    throw new Error(
      "Para consumir o estado do provider FormContextProvider é necessário ser um componente filho dele."
    );
  }

  return formData;
}

const initialState = {
  coach: {
    name: "Algum outro nome",
    lastName: "",
    email: "",
  },
  pokemon: {
    name: "",
    type: "",
    element: "",
    height: 0,
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
    default:
      return state;
  }
}

export function FormContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
