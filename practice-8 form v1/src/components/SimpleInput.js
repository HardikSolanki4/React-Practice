import { useReducer } from 'react';

const initialState = {
  nameText: '',
  nameIsTouched: false,
  nameIsValid: false,
  emailText: '',
  emailIsTouched: false,
  emailIsValid: false,
  formIsValid: false,
};

function reducer(state, action) {
  console.log(state);
  console.log(action);
  // switch (action.type) {
  //   case 'nameBlur':
  //     return { count: state.count + 1 };
  //   case 'nameChangeHandler':
  //     return { count: state.count + 1 };
  //   case 'emailBlur':
  //     return { count: state.count - 1 };
  //   case 'emailChangeHandler':
  //     return { count: state.count - 1 };
  //   default:
  //     throw new Error();
  // }
}

const SimpleInput = (props) => {
  const [inputState, inputDispatch] = useReducer(reducer, initialState);

  const abc = false;
  const nameInputClass = abc ? 'form-control invalid' : 'form-control';
  const emailInputClass = abc ? 'form-control invalid' : 'form-control';


  const formSubmitHandler = (event) => {};
  const enteredNameHandler = (event) => {
    dispatchEvent({ type: 'chomp', payload: name });
  };
  const enteredEmailHandler = (event) => {};

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={enteredNameHandler}
        />
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={enteredEmailHandler}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
