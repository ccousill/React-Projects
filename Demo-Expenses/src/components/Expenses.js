import React, { useState } from 'react';
import ExpensesFilter from './ExpenseFilter.js';
import './Expenses.css'
import Card from './Card.js'
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';
export default function Expenses({ props }) {
    const [filteredYear, setFilteredYear] = useState('2020');
    // let filterInfoText = '2019, 2021, and 2022'
    // if(filteredYear ==='2019'){
    //     filterInfoText = '2020,2021, and 2022'
    // }else if(filteredYear === '2020'){
    //     filterInfoText= '2019,2021, and 2022'
    // }else if(filteredYear === '2021'){
    //     filterInfoText = '2019,2020, and 2022'
    // }else {
    //     filterInfoText = '2019,2020, and 2021'
    // }

    const filterYearChanger = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    const filteredExpenses = props.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterYearChanger} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList props={filteredExpenses}/>
            </Card>
        </div>

    )


}