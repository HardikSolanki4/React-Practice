import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartInitialItems = {
  cart: {
    totalItem: 0,
    totalAmount: 0,
    price: 5,
  },
  showCart: false,
};

const cartItemReducer = createSlice({
  name: 'cart',
  initialState: cartInitialItems,
  reducers: {
    itemAdd(state) {
      state.cart.totalItem += 1;
      state.cart.totalAmount = state.cart.totalItem * state.cart.price;
    },
    itemRemove(state) {
      if(state.cart.totalItem > 0) {
        state.cart.totalItem -= 1
      } else {
        state.cart.totalItem = 0;
        state.showCart = false;
      }
      state.cart.totalAmount = state.cart.totalAmount - state.cart.price;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const store = configureStore({
  reducer: cartItemReducer.reducer,
});

export const { itemAdd, itemRemove, toggleCart } = cartItemReducer.actions;
export default store;
