import classes from './Card';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
