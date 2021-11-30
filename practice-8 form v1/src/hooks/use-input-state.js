import { useState } from 'react';

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = enteredValue.trim() !== '';
  const hasError = !valueIsValid && isTouch;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouch(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouch(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
