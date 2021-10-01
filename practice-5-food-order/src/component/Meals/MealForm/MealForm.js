import React from 'react';
import Input from '../../UI/Input';
import style from './MealForm.module.css';

function MealForm(props) {
  return (
    <form className={style.form}>
      <Input
        label='Amount'
        input={{
          type: 'number',
          id: 'amount',
          min: '1',
          max: '5',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealForm;
