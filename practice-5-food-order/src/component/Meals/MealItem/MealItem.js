import React from 'react';
import MealForm from '../MealForm/MealForm';
import style from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  );
};

export default MealItem;
