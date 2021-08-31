import React from 'react';
import ExpenseItem from '../Expense/ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';

const Expense = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
    </Card>
  );
}

export default Expense;
