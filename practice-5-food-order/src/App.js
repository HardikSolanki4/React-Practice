import { useState } from 'react';
import Cart from './component/Cart/Cart';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header showModal={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
