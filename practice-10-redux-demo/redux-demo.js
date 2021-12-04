const redux = require('redux');

const reduxReducer = (state = { counter: 10 }, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
      };
      break;
    case 'decrement':
      return {
        counter: state.counter - 1,
      };
      break;
    default:
      return {
        counter: state.counter,
      };
      break;
  }
};

const reduxStore = redux.createStore(reduxReducer);

const reduxScriber = () => {
  const latestState = reduxStore.getState();
  console.log(latestState);
};

reduxStore.subscribe(reduxScriber);
reduxStore.dispatch({ type: 'increment' });
reduxStore.dispatch({ type: 'increment' });
reduxStore.dispatch({ type: 'increment' });
reduxStore.dispatch({ type: 'decrement' });
reduxStore.dispatch({ type: 'decrement' });
reduxStore.dispatch({ type: 'abc' });
