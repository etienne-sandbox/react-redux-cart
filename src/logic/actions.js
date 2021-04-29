export const addProductToCart = (productId) => ({
  type: "ADD_PRODUCT",
  payload: productId,
});

export const incrementQuantity = (cartIndex) => ({
  type: "INCREMENT_QUANTITY",
  payload: cartIndex,
});

export const decrementQuantity = (cartIndex) => ({
  type: "DECREMENT_QUANTITY",
  payload: cartIndex,
});

export const removeCartItem = (cartIndex) => ({
  type: "REMOVE_CART_ITEM",
  payload: cartIndex,
});

export const removeProduct = (producId) => ({
  type: "REMOVE_PRODUCT",
  payload: producId,
});
