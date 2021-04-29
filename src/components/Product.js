import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProduct } from "../logic/actions";

export function Product({ productId }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => {
    return state.products.find((p) => p.id === productId);
  });

  return (
    <div className="Product">
      <h3>
        {product.name} -{" "}
        <span className="Product--price">{product.price} €</span>{" "}
      </h3>
      <button
        onClick={() => {
          dispatch(addProductToCart(productId));
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(removeProduct(productId));
        }}
      >
        x
      </button>
    </div>
  );
}
