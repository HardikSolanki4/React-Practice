import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import style from './MealForm.module.css';

function MealForm(props) {
  const amountInputRef = useRef();

  const [isAmountValid, setIsAmountValid] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const getEnteredValue = amountInputRef.current.value;
    const enteredAmountNo = +getEnteredValue;

    if (
      getEnteredValue.trim().length === 0 ||
      enteredAmountNo > 5 ||
      enteredAmountNo < 1
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNo);
  };

  return (
    <form className={style.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
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
      {!isAmountValid && <p>Please enter valid amount (1-5)</p>}
    </form>
  );
}

export default MealForm;
