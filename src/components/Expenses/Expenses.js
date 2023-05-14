import React, { useState } from "react";

import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import "../UI/Card.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const expensesFilterYear = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear((prev) => {
      prev = selectedYear;
      return prev;
    });
  };

  const filteredExpense = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
      ? expense
      : "";
  });
  
  return (
    <li>
      <Card className="expenses">
        <div>
          <ExpensesFilter
            selected={filteredYear}
            onExpensesFilterYear={expensesFilterYear}
          />
        </div>
        <ExpensesList item={filteredExpense} />
      </Card>
    </li>
  );
};

export default Expenses;
