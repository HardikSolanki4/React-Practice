import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (getExpenseData) => {
    const getExpenseFormData = {
      ...getExpenseData,
      id: Math.random().toString(),
    };
    // send data to parent
    props.onAddExpense(getExpenseFormData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button type='button' onClick={startEditingHandler}>
          Add Expense
        </button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
