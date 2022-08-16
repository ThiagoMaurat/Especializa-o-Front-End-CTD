import React from "react";

const Input = ({ name, label, value, onChange, type = "text" }) => {
  const [fieldValue, setFieldValue] = React.useState(value);
  // Aqui devemos acessar o estado global para obter os dados
  // do formulário e uma maneira de atualizá-los.

  // Além disso, usaremos um estado local para lidar com o estado da input.

  const onBlur = (event) => {
    onChange(event.target.value);

    // Aqui devemos atualizar o estado global com os dados de
    // cada entrada.
    // DICA: Podemos usar o nome de cada entrada para salvar
    // os dados no estado global usando uma notação { chave: valor }
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} onBlur={onBlur} />
    </div>
  );
};

export default Input;
