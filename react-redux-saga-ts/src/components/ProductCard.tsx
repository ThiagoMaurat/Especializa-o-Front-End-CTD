
interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }
}

export function ProductCard(props: ProductCardProps) {
  const { product } = props;

  return (
    <div className="product-card" key={product.id}>
      <div className="header">
        <p className="title">{product.title}</p>
        <p>R$ {product.price}</p>
      </div>

      <img height={300} width={300} src={product.image} alt={product.title} />

      <p>{product.description}</p>

      <div className="actions">
        <button>Add to cart</button>
        <button>Add from cart</button>
      </div>
    </div>
  );
}
