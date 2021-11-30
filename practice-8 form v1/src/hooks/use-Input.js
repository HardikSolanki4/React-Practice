import { useReducer } from 'react';

const initialInputValue = {
  value: '',
  isTouch: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT_CHANGE') {
    return { value: action.value, isTouch: state.isTouch };
  }
  if (action.type === 'INPUT_BLUR') {
    return { isTouch: true };
  }
  if (action.type === 'INPUT_RESET') {
    return { value: '', isTouch: false };
  }
  return initialInputValue;

  // switch (action.type) {
  //   case 'INPUT_CHANGE':
  //     return { value: action.value, isTouch: state.isTouch };
  //   case 'INPUT_BLUR':
  //     return { isTouch: true };
  //   case 'INPUT_RESET':
  //     return { value: '', isTouch: false };
  //   default:
  //     return initialInputValue;
  // }
};

const useInput = (validateValue) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputValue
  );

  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouch, setIsTouch] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;

  const valueChangeHandler = (event) => {
    dispatchInputState({ type: 'INPUT_CHANGE', value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispatchInputState({ type: 'INPUT_BLUR', isTouch: true });
    // setIsTouch(true);
  };

  const reset = () => {
    dispatchInputState({ type: 'INPUT_RESET' });
    // setEnteredValue('');
    // setIsTouch(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
