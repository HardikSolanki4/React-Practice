import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isNameTouch, setIsNameTouch] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isEmailTouch, setIsEmailTouch] = useState(false);

  // check email valid
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isEnteredEmailValid = enteredEmail.match(mailformat);
  const emailInputIsInvalid = !isEnteredEmailValid && isEmailTouch;

  // check name input
  const isEnteredNameValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !isEnteredNameValid && isNameTouch;

  let formIsValid = false;
  if (isEnteredNameValid && isEnteredEmailValid) {
    formIsValid = true;
  }
  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setIsEmailTouch(true);
  };

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setIsNameTouch(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsNameTouch(true);
    setIsEmailTouch(true);
    if (!isEnteredNameValid && !isEnteredEmailValid) {
      return;
    }
    setEnteredName('');
    setEnteredEmail('');
    setIsNameTouch(false);
    setIsEmailTouch(false);
    console.log(enteredName, enteredEmail);
  };

  const nameInputClass = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClass = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={enteredNameHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Enter Name</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={enteredEmailHandler}
        />
        {emailInputIsInvalid && <p className='error-text'>Enter Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
