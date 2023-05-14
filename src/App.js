import React, { useState} from "react";
import Expenses from './components/Expenses/Expenses'
import "./components/Expenses/ExpenseItem.css";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "$94.00",
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "New TV",
    amount: "$799.00",
    date: new Date(2020, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: '$294.0',
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "$450",
    date: new Date(2021, 6, 11),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
   return setExpenses(prevExpenses => [expense, ...prevExpenses])
  }
  return (
    <div className="App">
      <h1>Here we go</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
