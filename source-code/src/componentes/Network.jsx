import Character from "./Character";
import { getCharacters } from "../repositories/characters";
import { useQuery } from "react-query";
import { useState } from "react";

const Network = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, isError, data } = useQuery(
    ["characters", currentPage],
    () => getCharacters(currentPage)
  );

  if (isLoading) return <div>Carregando personagens...</div>;

  if (isError)
    return (
      <div>
        Ops, não podemos carregar os personagens agora. Tente por favor de novo
        mais tarde.
      </div>
    );

  return (
    <div>
      {data?.results?.length
        ? data.results.map((personagem) => (
            <Character
              key={personagem.id}
              imagem={personagem.image}
              nome={personagem.name}
              especie={personagem.species}
            />
          ))
        : null}

      <div>
        {currentPage !== 1 ? (
          <button
            className="floating-button-left"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous page
          </button>
        ) : null}

        <button
          className="floating-button-right"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default Network;
