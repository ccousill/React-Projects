import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const handleTitleChange = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:e.target.value}
        // })
    }
    const handleAmountChange = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount:e.target.value}
        // })

    }
    const handleDateChange = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:e.target.value}
        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={handleTitleChange} />
                    <p>{enteredTitle}</p>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={handleAmountChange} />
                    <p>{enteredAmount}</p>

                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={handleDateChange} />
                    <p>{enteredDate}</p>
                </div>
            </div>
                <div className="new-expense__actions">
                    <button onClick={props.disableForm}>Cancel</button>
                    <button type="submit">add expense</button>
                </div>
        </form>

    )
}

export default ExpenseForm;