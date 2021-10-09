import { Fragment } from 'react';
import mealImg from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meal</h1>
        <HeaderCartButton onClick={props.showModal} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt='banner' />
      </div>
    </Fragment>
  );
};

export default Header;
