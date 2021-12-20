import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { changePassword } from '../../api/changePassword';
import useHttps from '../../hooks/useHttps';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordValue = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const { status, sendRequest } = useHttps(changePassword);

  const formHandler = async (event) => {
    event.preventDefault();

    const enteredPassword = passwordValue.current.value;
    const respBody = {
      body: {
        idToken: authCtx.token,
        password: enteredPassword,
        returnSecureToken: false,
      },
    };
    await sendRequest(respBody);
  };

  if (status === 'completed') {
    alert('password changed')
    history.push('/welcome');
  }

  return (
    <form onSubmit={formHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordValue} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
