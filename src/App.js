import React, { useState } from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'car insurance',
    amount: 255,
    date: new Date(2019, 4, 5),
  },
  {
    id: 'e2',
    title: 'Bike insurance',
    amount: 3596,
    date: new Date(2020, 1, 9),
  },
  {
    id: 'e3',
    title: 'help insurance',
    amount: 989,
    date: new Date(2021, 8, 2),
  },
  { id: 'e4', title: 'food', amount: 698, date: new Date(2018, 9, 4) },
];


const App = () => {
  const [expense, setExpense] = useState(DUMMY_DATA);
  const addExpenseHandler = (NewExpense) => {
    setExpense((prevExpense) => {
      return [NewExpense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
    </div>
  );
};

export default App;
