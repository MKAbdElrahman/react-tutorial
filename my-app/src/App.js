import './App.css';
import './components/ExpenseItem'
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses = [
    { description: 'Car Insurance', amount: 300, date: new Date(2023, 4, 2) },
    { description: 'Movie Tickets', amount: 25, date: new Date(2023, 4, 28) },
    { description: 'Gas', amount: 45, date: new Date(2023, 4, 29) },
    { description: 'Phone Bill', amount: 100, date: new Date(2023, 4, 30) },
  ];

  const expenseItems = expenses.map((expense) => (
    <ExpenseItem
      key={expense.description}
      amount={expense.amount}
      date={expense.date}
      description={expense.description}
    />
  ));

  return <div>{expenseItems}</div>;
}

export default App;
