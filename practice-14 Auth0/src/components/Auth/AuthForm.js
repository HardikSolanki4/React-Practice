import { useCallback, useContext, useRef, useState } from 'react';
import { addUsers } from '../../api/addUser';
import useHttps from '../../hooks/useHttps';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const {
    status: addUsersStatus,
    data: addUserResponse,
    sendRequest: addUsersSendRequest,
  } = useHttps(addUsers);

  const authCtx = useContext(AuthContext);

  const addUserCallback = useCallback(
    async (sendData) => {
      if (isLogin) {
        sendData.signUp = false;
        await addUsersSendRequest(sendData);
      } else {
        sendData.signUp = true;
        await addUsersSendRequest(sendData);
      }
    },
    [isLogin, addUsersSendRequest]
  );

  if (addUserResponse) {
    authCtx.login(addUserResponse.idToken);
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const authFormHandler = async (event) => {
    event.preventDefault();
    const emailInputValue = emailRef.current.value;
    const passwordInputValue = passwordRef.current.value;

    console.log('addUsersStatus', addUsersStatus);
    addUserCallback({
      body: {
        email: emailInputValue,
        password: passwordInputValue,
        returnSecureToken: true,
      },
    });
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={authFormHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
