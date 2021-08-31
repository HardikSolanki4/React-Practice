import React from 'react';
import Expense from './components/Expense/Expense';

const App = () => {
  const expense = [
    {
      title: 'car insurance',
      amount: 255,
      date: new Date(2020, 4, 5),
    },
    {
      title: 'Bike insurance',
      amount: 3596,
      date: new Date(2020, 1, 9),
    },
    {
      title: 'help insurance',
      amount: 989,
      date: new Date(2020, 8, 2),
    },
    {
      title: 'food',
      amount: 698,
      date: new Date(2020, 9, 4),
    },
  ];
  return (
    <div>
     <Expense items={expense} />
    </div>
  );
}

export default App;
