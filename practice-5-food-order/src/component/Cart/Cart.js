import React from 'react';
import Modal from '../UI/Modal';
import style from './Cart.module.css';

function Cart(props) {
  const cardItems = [{ id: 1, name: 'sushi', amount: 2, price: 560 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal onClose={props.onClose}>
      <ul className={style['cart-items']}>{cardItems}</ul>
      <div className={style.total}>
        <span>Total Amount</span>
        <span>56</span>
      </div>
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
