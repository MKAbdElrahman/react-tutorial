import './ExpenseItem.css';
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseDescription = props.description;
    const expensePrice = props.amount;


    return (
        <div className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item__description">{expenseDescription}</div>
            <div className="expense-item__price">{expensePrice}</div>
        </div>
    );
}

export default ExpenseItem;
