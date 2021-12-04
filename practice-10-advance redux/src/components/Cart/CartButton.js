import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import store, { toggleCart } from '../../store';

const CartButton = (props) => {
  const totalCartItems = useSelector(state => state.cart.totalItem);

  const cartToggleHandler = (event) => {
    event.preventDefault();
    store.dispatch(toggleCart());
  };
  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
