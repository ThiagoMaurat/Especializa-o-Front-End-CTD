import { ReactElement } from "react";
import { useAppSelector } from "state/hooks"
import { Character } from 'components/character'

export function List(): ReactElement {
  const list = useAppSelector(state => state.characters.list);

  return (
    <>
      <h1>CHARACTERS</h1>
      <div id="list">
        {
          list.map(character => (
            <Character key={character.id} character={character} allowFavorite />
          ))
        }
      </div>
    </>
  )
}