import produce from "immer";

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

export function reducer(state = initialState, action) {
  if (action.type === "ADD_PRODUCT") {
    return produce(state, (draft) => {
      const cartItem = draft.cart.find(
        (item) => item.productId === action.payload
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        draft.cart.push({ productId: action.payload, quantity: 1 });
      }
    });
    // const producIsInCart = state.cart.find(
    //   (c) => c.productId === action.payload
    // );
    // if (!producIsInCart) {
    // return {
    //   ...state,
    //   cart: [...state.cart, { productId: action.payload, quantity: 1 }],
    // };
    // }
    // return {
    //   ...state,
    //   cart: state.cart.map((item) => {
    //     if (item.productId === action.payload) {
    //       return {
    //         productId: item.productId,
    //         quantity: item.quantity + 1,
    //       };
    //     }
    //     return item;
    //   }),
    // };
  }
  if (action.type === "INCREMENT_QUANTITY") {
    return produce(state, (draft) => {
      draft.cart[action.payload].quantity++;
    });
  }
  if (action.type === "DECREMENT_QUANTITY") {
    return produce(state, (draft) => {
      draft.cart[action.payload].quantity--;
      if (draft.cart[action.payload].quantity === 0) {
        draft.cart.splice(action.payload, 1);
      }
    });
  }
  if (action.type === "REMOVE_CART_ITEM") {
    return produce(state, (draft) => {
      draft.cart.splice(action.payload, 1);
    });
  }
  if (action.type === "REMOVE_PRODUCT") {
    return produce(state, (draft) => {
      const productId = action.payload;
      draft.products = draft.products.filter((p) => p.id !== productId);
      draft.cart = draft.cart.filter((item) => item.productId !== productId);
    });
  }
  return state;
}
