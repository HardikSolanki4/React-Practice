import React, { useContext } from 'react';
import { TodosContext } from '../store/todo-context';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          removeTodos={todoCtx.removeTodos.bind(null, item.id)}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
