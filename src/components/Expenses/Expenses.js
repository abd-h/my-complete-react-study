import React, { useState } from "react";

import Card from "../UI/Card";


import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const selectectedYear = (year) => {
    setFilteredYear((prev) => (prev = year));
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear() === parseInt(filteredYear);
  });

  console.log(filteredExpenses)
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        year={filteredYear}
        onSelectedFilteredYear={selectectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses ={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
