
import './ExpenseItem.css'
function ExpenseItem() {
    return (
      <div className="expense-item">
        <div className="expense-item__date">March 1, 2023</div>
        <div className="expense-item__description">Car Insurance</div>
        <div className="expense-item__price">$300</div>
      </div>
    );
  }
  
  export default ExpenseItem;