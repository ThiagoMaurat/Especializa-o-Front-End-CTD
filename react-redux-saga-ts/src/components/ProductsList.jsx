import { useSelector, useDispatch } from "react-redux";
import { availableProductsSelector } from "../state/cart";
import { ProductCard } from "./ProductCard";

export function ProductsList() {
  const products = useSelector(availableProductsSelector);

  return (
    <div>
      <h2>Produtos</h2>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
