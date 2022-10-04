import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchCharacters } from "state/characters";
import { List } from "./pages/List";
import { Favorites } from "./pages/Favorites";
import { Header } from "./header";
import { Episodes } from "./pages/Episodes";
import { Pages } from "state/router";

export function App(): ReactElement {
  const currentPage = useAppSelector(state => state.router.currentPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <main>
      <Header />
      {
        currentPage == Pages.LIST ? (<List />) : null
      }
      {
        currentPage == Pages.FAVORITES ? (<Favorites />) : null
      }
      {
        currentPage == Pages.EPISODES ? (<Episodes />) : null
      }
    </main>
  )
}
