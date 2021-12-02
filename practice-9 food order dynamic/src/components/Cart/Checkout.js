import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveDigit = (value) => value.length !== 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalCodeIsValid = !isFiveDigit(enteredPostalCode);
    const cityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      setFormInputValidity({
        name: nameIsValid,
        street: streetIsValid,
        postalCode: postalCodeIsValid,
        city: cityIsValid,
      });
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputValidity.name ? classes.invalid : ''
        }`}
      >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>Enter Valid Name</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.street ? classes.invalid : ''
        }`}
      >
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Enter Valid Street</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.postalCode ? classes.invalid : ''
        }`}
      >
        <label htmlFor='postal'>Postal Code</label>
        <input type='number' id='postal' ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && <p>Enter Valid Postal</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputValidity.city ? classes.invalid : ''
        }`}
      >
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p>Enter Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
