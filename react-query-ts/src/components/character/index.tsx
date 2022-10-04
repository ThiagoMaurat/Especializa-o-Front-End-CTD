import { ReactElement } from "react";
import { ICharacter } from "types";
import { toggleFavorite } from 'state/characters'
import { useAppDispatch, useAppSelector } from 'state/hooks';

interface CharacterProps {
  character: ICharacter;
  allowFavorite?: boolean;
}

export function Character(props: CharacterProps): ReactElement {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.characters.favorites);

  const { character, allowFavorite } = props;

  const isFavorite = favorites.find(s => s.id == character.id) !== undefined;

  function onClickToggleFavorite() {
    if (!allowFavorite) return;

    dispatch(toggleFavorite(character));
  }

  return (
    <div key={character.id} className={`character ${isFavorite ? 'favorite' : null}`} onClick={onClickToggleFavorite}>
      <img src={character.image} height={100} width={100} />
      <h4>{character.name}</h4>
      <span>{character.status}</span>
    </div>
  );
}
