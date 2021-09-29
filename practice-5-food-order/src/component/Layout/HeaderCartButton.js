import { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span></span>
    </Fragment>
  );
};

export default HeaderCartButton;
