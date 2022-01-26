import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; removeTodos: () => void }> = (
  props
) => {
  const removeTodos = (event: any) => {
    console.log(event);
  };

  return (
    <li onClick={props.removeTodos} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
