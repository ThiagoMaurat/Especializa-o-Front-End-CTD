import { ReactElement, useState } from "react";

interface IPokemon {
  id: number;
  nome: string;
  kilos?: number;
  pokemon: boolean;
  categoria: string;
}
export function App(): ReactElement {
  const pokemons: IPokemon[] = [
    {
      id: 1,
      nome: "bulbasaur",
      kilos: 6.9,
      pokemon: true,
      categoria: "semente",
    },
    {
      id: 2,
      nome: "charmander",
      kilos: 8.5,
      pokemon: true,
      categoria: "lagarto",
    },
    {
      id: 3,
      nome: "charizard",
      kilos: 95.5,
      pokemon: true,
      categoria: "chama",
    },
    {
      id: 4,
      nome: "ash",
      pokemon: false,
      categoria: "treinador",
    },
  ];

  return (
    <>
      {pokemons.map((data: IPokemon, index: number) => {
        return (
          <ul key={index}>
            {data.id && <li>{data.id}</li>}
            {data.categoria && <li>{data.categoria}</li>}
            {data.kilos && <li>{data.kilos}</li>}
            {data.nome && <li>{data.nome}</li>}
            {data.pokemon && <li>{data.pokemon}</li>}
          </ul>
        );
      })}
    </>
  );
}

export default App;
