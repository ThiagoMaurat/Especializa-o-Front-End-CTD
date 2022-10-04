import { useSelector, useDispatch } from "react-redux";
import {
  searchSelector,
  setSearch,
  fetchAvailableProducts,
} from "../state/cart";

export function Search() {
  const dispatch = useDispatch();
  const search = useSelector(searchSelector);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(event) => {
          dispatch(setSearch(event.target.value));
        }}
      />
      <button onClick={() => dispatch(fetchAvailableProducts())}>Search</button>
    </div>
  );
}
