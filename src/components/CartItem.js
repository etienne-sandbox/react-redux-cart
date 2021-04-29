import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeCartItem,
} from "../logic/actions";

export function CartItem({ index }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart[index]);
  const product = useSelector((state) =>
    state.products.find((p) => p.id === cartItem.productId)
  );

  const itemTotal = product.price * cartItem.quantity;

  return (
    <div className="CartItem">
      <p>
        {product.name} x{cartItem.quantity} = {itemTotal}€
      </p>
      <button
        onClick={() => {
          dispatch(decrementQuantity(index));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(incrementQuantity(index));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(removeCartItem(index));
        }}
      >
        x
      </button>
    </div>
  );
}
