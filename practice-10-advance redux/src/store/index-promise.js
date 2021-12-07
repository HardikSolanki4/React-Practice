import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartInitialItems = {
  cart: {
    items: [],
    totalQuantity: 0,
  },
  showCart: false,
  notification: null,
};

const cartItemReducer = createSlice({
  name: 'cart',
  initialState: cartInitialItems,
  reducers: {
    itemAdd(state, action) {
      const newItem = action.payload;
      state.cart.totalQuantity++;
      const existingItem = state.cart.items.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cart.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      // state.cart.totalItem += 1;
      // state.cart.totalAmount = state.cart.totalItem * state.cart.price;
    },
    itemRemove(state, action) {
      const id = action.payload;
      state.cart.totalQuantity--;
      const existingItem = state.cart.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cart.items = state.cart.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      // if (state.cart.totalItem > 0) {
      //   state.cart.totalItem -= 1;
      // } else {
      //   state.cart.totalItem = 0;
      //   state.showCart = false;
      // }
      // state.cart.totalAmount = state.cart.totalAmount - state.cart.price;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const sendRequestData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        message: 'Please wait..',
        title: 'sending data..',
      })
    );

    const fetchAPI = () => {
      return new Promise((resolve, reject) => {
        fetch('https://food-app-2315-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart),
        })
          .then((response) => {
            if (!response.ok) {
              dispatch(
                showNotification({
                  status: 'error',
                  message: 'Sorry we are fail to load..',
                  title: 'request failed..',
                })
              );
              resolve();
            }
          })
          .catch((error) => {
            console.log('error');
            reject(error);
          });
      });
    };

    try {
      const getFetch = await fetchAPI();
      if (getFetch) {
        dispatch(
          showNotification({
            status: 'success',
            message: 'successfully..',
            title: 'data updated..',
          })
        );
      }
    } catch (error) {
      console.log('error', error);
      dispatch(
        showNotification({
          status: 'error',
          message: 'Sorry we are fail to load..',
          title: 'request failed..',
        })
      );
    }
  };
};

const store = configureStore({
  reducer: cartItemReducer.reducer,
});
export const { itemAdd, itemRemove, toggleCart, showNotification } =
  cartItemReducer.actions;
export const cartReducer = cartItemReducer.actions;
export default store;
