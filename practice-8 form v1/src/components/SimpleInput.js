import useInput from '../hooks/use-Input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: nameIsHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: enteredNameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailIsHasError,
    valueChangeHandler: EmailChangedHandler,
    inputBlurHandler: EmailBlurHandler,
    reset: enteredEmailReset,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;
  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredName) {
      return;
    }
    enteredNameReset();
    enteredEmailReset();
    console.log(enteredName, enteredEmail);
  };

  const nameInputClass = nameIsHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClass = emailIsHasError
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
          onChange={nameChangedHandler}
        />
        {nameIsHasError && <p className='error-text'>Enter Name</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onBlur={EmailBlurHandler}
          onChange={EmailChangedHandler}
        />
        {emailIsHasError && <p className='error-text'>Enter Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
