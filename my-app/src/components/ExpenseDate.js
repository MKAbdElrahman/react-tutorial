import './ExpenseDate.css'

function ExpenseDate(props) {
    const expenseDate = props.date;

    const day = expenseDate.getDate();
    const month = expenseDate.toLocaleString('default', { month: 'long' });
    const year = expenseDate.getFullYear();
    return (
        <div className="expense-item__date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate;