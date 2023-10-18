import './expenseDate.css'

export default function ExpenseDate({item}) {
    const month = item.toLocaleString('en-US', { month: 'long' });
    const day = item.toLocaleString('en-US', { day: '2-digit' });
    const year = item.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}