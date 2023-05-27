import React, { useState } from "react";

import "../src/index.css";

import Expenses from './components/Expenses/Expenses'
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpense = [
  {
    id: "e1",
    title: "Nisan Leaf",
    date: new Date(2019, 8, 21),
    amount: 35000,
  },
  {
    id: "e2",
    title: "Toyota Corrola",
    date: new Date(2020, 2, 10),
    amount: 18000,
  },
  { id: "e3", title: "Vauxhal", date: new Date(2022, 8, 23), amount: 19000 },
  { id: "e4", title: "VW", date: new Date(2021, 3, 13), amount: 40000 },
];

const App = () => {
  

  const [expenses, setExpenses] = useState(initialExpense);
  const addExpenseHandler = addExpense => 
  {
    setExpenses(prev => ([addExpense, ...prev]));
   }
  

  // const expense = expenses.map((item) => item);
  console.log(expenses)
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
