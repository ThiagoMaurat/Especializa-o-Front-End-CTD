import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "types";
import { AppDispatch, RootState } from "state/store";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    isLoading: false,
    list: [] as ICharacter[],
    favorites: [] as ICharacter[],
  },
  reducers: {
    setCharacters: (state, action) => {
      state.list = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<ICharacter>) {
      const index = state.favorites.findIndex((c) => c.id == action.payload.id);

      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export function fetchCharacters() {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    dispatch(setCharacters(data.results));
    dispatch(setIsLoading(false));
  };
}

export const listSelector = (state: RootState) => state.characters.list;

export const { setCharacters, setIsLoading, toggleFavorite } =
  charactersSlice.actions;
export default charactersSlice.reducer;
