import { Fragment, useState } from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {
  const [showNotification, setShowNotification] = useState(true);
  const closeHandler = () => {
    setShowNotification(false);
  };
  return (
    <Fragment>
      {showNotification ? (
        <div className={classes.notificationWrapper}>
          {props.message} <button onClick={closeHandler}>Close</button>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};
export default Notification;
