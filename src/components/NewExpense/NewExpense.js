import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseData = (getExpenseData) => {
    const getExpenseFormData = {
      ...getExpenseData,
      id: Math.random().toString(),
    };
    console.log(getExpenseFormData);
    // send data to parent
    props.onAddExpense(getExpenseFormData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
