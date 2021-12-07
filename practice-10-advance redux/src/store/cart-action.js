import { cartActions } from './index';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://food-app-2315-default-rtdb.firebaseio.com/cart.json',
        { method: 'GET' }
      );
      if (!response.ok) {
        dispatch(
          cartActions.showNotification({
            status: 'error',
            message: 'Sorry to get old records',
            title: 'request failed to load old records..',
          })
        );
        return;
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const loadFetchData = await fetchData();
      dispatch(cartActions.replaceCart(loadFetchData));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: 'error',
          message: 'Sorry to get old records',
          title: 'request failed to load old records..',
        })
      );
    }
  };
};

export const sendRequestData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: 'pending',
        message: 'Please wait..',
        title: 'sending data..',
      })
    );

    const fetchAPI = async () => {
      const response = await fetch(
        'https://food-app-2315-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items || [],
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        dispatch(
          cartActions.showNotification({
            status: 'error',
            message: 'Sorry we are fail to load..',
            title: 'request failed..',
          })
        );
      }
    };

    try {
      await fetchAPI();
      dispatch(
        cartActions.showNotification({
          status: 'success',
          message: 'successfully..',
          title: 'data updated..',
        })
      );
    } catch (error) {
      console.log('error', error);
      dispatch(
        cartActions.showNotification({
          status: 'error',
          message: 'Sorry we are fail to load..',
          title: 'request failed..',
        })
      );
    }
  };
};
