import { createAction } from "@reduxjs/toolkit";

export const addProductToCart = createAction("ADD_PRODUCT");

export const incrementQuantity = createAction("INCREMENT_QUANTITY");

export const decrementQuantity = createAction("DECREMENT_QUANTITY");

export const removeCartItem = createAction("REMOVE_CART_ITEM");

export const removeProduct = createAction("REMOVE_PRODUCT");
