import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
const ExpensesList = ({props})=>{
    if(props.length ===0){
        return <h2 className="expenses-list__fallback">found no expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {props.map((item) => (
            <ExpenseItem key={item.id} props={item} />
        ))}
        </ul>
    )
}

export default ExpensesList;