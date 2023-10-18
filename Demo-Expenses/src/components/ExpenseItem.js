import React from 'react';
import './ExpenseItem.css'
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js'
import Card from './Card'


function ExpenseItem({ props }) {

    return (
        <div>
                <Card className="expense-item">
                    <ExpenseDate item={props.date} />
                    <div className="expense-item__description">
                        <h2>{props.title}</h2>
                        <div className="expense-item__price">${props.amount}</div>
                    </div>
                </Card>
        </div>
    )
}

export default ExpenseItem