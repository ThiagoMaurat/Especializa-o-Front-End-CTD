import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsList } from "./ProductsList";
import { Search } from "./Search";
import { isLoadingSelector, fetchAvailableProducts } from "../state/cart";

export function App() {
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailableProducts());
  }, [dispatch]);

  return (
    <main>
      <h1>Loja TOP DH</h1>
      <Search />
      <ProductsList />
    </main>
  );
}
