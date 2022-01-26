import React, { useState } from 'react';
import Todo from '../models/todo';

type todoObjType = {
  items: Todo[];
  addTodos: (text: string) => void;
  removeTodos: (id: string) => void;
};

export const TodosContext = React.createContext<todoObjType>({
  items: [],
  addTodos: (text: string) => {},
  removeTodos: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [TodoLists, setTodoLists] = useState<Todo[]>([]);

  const addToDoHandler = (todoText: string) => {
    setTodoLists((prevState) => {
      const newTodos = prevState.concat(new Todo(todoText));
      return newTodos;
    });
  };

  const removeToDosHandler = (todoId: string) => {
    setTodoLists((preState) => {
      return preState.filter((item) => item.id !== todoId);
    });
  };

  const TodoContextValue: todoObjType = {
    items: TodoLists,
    addTodos: addToDoHandler,
    removeTodos: removeToDosHandler,
  };
  return (
    <TodosContext.Provider value={TodoContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
