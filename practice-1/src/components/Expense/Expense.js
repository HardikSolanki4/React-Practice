import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const updateExpense = (getUpdateYear) => {
    setFilteredYear(getUpdateYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={updateExpense}
        />
        <ExpenseChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </>
  );
};

export default Expense;
