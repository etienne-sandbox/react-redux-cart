import { createReducer } from "@reduxjs/toolkit";
import {
  addProductToCart,
  decrementQuantity,
  incrementQuantity,
  removeCartItem,
  removeProduct,
} from "./actions";

const initialState = {
  products: [
    { name: "Pommes", id: "pomme-id", price: 2 },
    { name: "Poires", id: "poires-id", price: 2.5 },
    { name: "Kiwi", id: "kiwi-id", price: 4 },
  ],
  cart: [
    { productId: "pomme-id", quantity: 15 },
    { productId: "kiwi-id", quantity: 1 },
  ],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addProductToCart, (state, action) => {
      const cartItem = state.cart.find(
        (item) => item.productId === action.payload
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ productId: action.payload, quantity: 1 });
      }
    })
    .addCase(incrementQuantity, (state, action) => {
      state.cart[action.payload].quantity++;
    })
    .addCase(decrementQuantity, (state, action) => {
      state.cart[action.payload].quantity--;
      if (state.cart[action.payload].quantity === 0) {
        state.cart.splice(action.payload, 1);
      }
    })
    .addCase(removeCartItem, (state, action) => {
      state.cart.splice(action.payload, 1);
    })
    .addCase(removeProduct, (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p.id !== productId);
      state.cart = state.cart.filter((item) => item.productId !== productId);
    });
});
