import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendRequestData } from './store';

let initLoad = false;

function App() {
  const isShowCart = useSelector((state) => state.showCart);
  const isNotification = useSelector((state) => state.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // const sendData = async () => {
    //   dispatch(
    //     showNotification({
    //       status: 'pending',
    //       message: 'Please wait..',
    //       title: 'sending data..',
    //     })
    //   );
    //   const response = await fetch(
    //     'https://food-app-2315-default-rtdb.firebaseio.com/cart.json',
    //     {
    //       method: 'PUT',
    //       body: JSON.stringify(cart),
    //     }
    //   );

    //   if (!response.ok) {
    //     dispatch(
    //       showNotification({
    //         status: 'error',
    //         message: 'Sorry we are fail to load..',
    //         title: 'request failed..',
    //       })
    //     );
    //     return;
    //   }
    //   dispatch(
    //     showNotification({
    //       status: 'success',
    //       message: 'successfully..',
    //       title: 'data updated..',
    //     })
    //   );
    // };

    if (!initLoad) {
      initLoad = true;
      return;
    }
    dispatch(sendRequestData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {isNotification && (
        <Notification
          status={isNotification.status}
          message={isNotification.message}
          title={isNotification.title}
        />
      )}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
