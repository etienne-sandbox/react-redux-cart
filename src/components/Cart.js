import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export function Cart() {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  let total = 0;
  cart.forEach((cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);
    total += cartItem.quantity * product.price;
  });

  return (
    <div className="Cart">
      <h2>Cart: {total}€</h2>
      {cart.map((cartItem, index) => {
        return <CartItem key={index} index={index} />;
      })}
    </div>
  );
}
