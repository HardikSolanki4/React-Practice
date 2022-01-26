import { useContext } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider, { TodosContext } from './store/todo-context';

function App() {
  const todosCtx = useContext(TodosContext)
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
