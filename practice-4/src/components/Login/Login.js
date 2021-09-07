import React, { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const inputReducer = (state, action) => {
  console.log(action.type);
  if (action.inputType === 'EMAIL') {
    return {
      inputType: {
        ...state.inputType,
        email: action.value,
        isEmailValid: action.value.includes('@'),
      },
      isValid: state.inputType.isEmailValid && state.inputType.isPasswordValid,
    };
  }
  if (action.inputType === 'PASSWORD') {
    return {
      inputType: {
        ...state.inputType,
        password: action.value,
        isPasswordValid: action.value.length > 6,
      },
      isValid: state.inputType.isEmailValid && state.inputType.isPasswordValid,
    };
  }
  if (action.inputType === 'INPUT_BLUR') {

    return {
      // inputType: {
      //   ...state.inputType,
      //   email: state.inputType.email,
      //   password: state.inputType.password,
      // },
      ...state,
      isValid: state.inputType.isEmailValid && state.inputType.isPasswordValid,
    };
  }
  return {
    inputType: {
      email: '',
      password: '',
    },
    isValid: null,
  };
};

const Login = (props) => {
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    inputType: {
      email: '',
      isEmailValid: null,
      password: '',
      isPasswordValid: null,
    },
    isValid: null,
  });
console.log(inputState);
  const emailChangeHandler = (event) => {
    inputDispatch({ inputType: 'EMAIL', value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    inputDispatch({ inputType: 'PASSWORD', value: event.target.value });
  };

  const validateEmailHandler = () => {
    inputDispatch({ inputType: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    inputDispatch({ inputType: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(inputState.inputType.email, inputState.inputType.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            inputState.inputType.isEmailValid === false? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={inputState.inputType.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            inputState.inputType.isPasswordValid  === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={inputState.inputType.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type='submit'
            className={classes.btn}
            disabled={!inputState.isValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
