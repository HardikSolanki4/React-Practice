import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todo-context';
import classes from './NewTodo.module.css';

const NewTodo = () => {
  const todoCtx = useContext(TodosContext);

  const textInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const getTodoText = textInput.current?.value;
    if (getTodoText?.length === 0) {
      return;
    }
    if (getTodoText) {
      todoCtx.addTodos(getTodoText);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Item</label>
      <input type='text' id='text' ref={textInput} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
