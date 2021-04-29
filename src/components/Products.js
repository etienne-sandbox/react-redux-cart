import { useSelector } from "react-redux";
import { Product } from "./Product";

export function Products() {
  const products = useSelector((state) => state.products);

  return (
    <div className="Products">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product.id} productId={product.id} />;
      })}
    </div>
  );
}
