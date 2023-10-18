import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [formVisibility, setFormVisibility] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        };
        props.getTheData(expenseData);
        setFormVisibility(false);
    };
    const handleDisableForm = () =>{
        setFormVisibility(false);
    }

    const handleShowForm = () =>{
        setFormVisibility(true);
    }
    let showFormButton = <div className="new-expense__actions show-form">
        <button onClick={handleShowForm}>add expense</button>
    </div>
    let formFields = ''

    if (formVisibility) {
        formFields = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} disableForm={handleDisableForm}/>
        showFormButton='';
    }

    return <div className='new-expense'>
        {formFields}
        {showFormButton}
    </div>
}

export default NewExpense;