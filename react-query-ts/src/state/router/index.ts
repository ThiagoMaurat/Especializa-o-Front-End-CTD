import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "state/store";

export enum Pages {
  LIST = "list",
  FAVORITES = "favorites",
  EPISODES = "episodes",
}

const slice = createSlice({
  name: "router",
  initialState: {
    currentPage: Pages.LIST,
  },
  reducers: {
    setCurrentPage(state, action: PayloadAction<Pages>) {
      state.currentPage = action.payload;
    },
  },
});

export const currentPageSelector = (state: RootState) =>
  state.router.currentPage;

export const { setCurrentPage } = slice.actions;
export default slice.reducer;
