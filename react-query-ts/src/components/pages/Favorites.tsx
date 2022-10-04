import { ReactElement } from "react";
import { useAppSelector } from "state/hooks";
import { Character } from "components/character";

export function Favorites(): ReactElement {
  const favorites = useAppSelector(state => state.characters.favorites);

  return (
    <>
      <h1>FAVORITES</h1>
      <div id="favorites">
        {
          favorites.map(favorite => (
            <Character key={favorite.id} character={favorite} />
          ))
        }
      </div>
    </>
  )
}