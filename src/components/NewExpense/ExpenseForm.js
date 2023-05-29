import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""),
    [enteredAmount, setEnteredAmount] = useState(""),
      [enteredDate, setEnteredDate] = useState(""),
      [addExpenseItem, setAddExpenseItem] = useState(false);
  const titleChangeHandler = (e) => {
      setEnteredTitle((prev) => (prev = e.target.value));
    },
    amountChangeHandler = (e) =>
      setEnteredAmount((prev) => (prev = e.target.value)),
    dateChangeHandler = (e) =>
      setEnteredDate((prev) => prev = e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: + parseInt(enteredAmount),
      date: new Date(enteredDate),
    };
    console.log(expenseData.enteredAmount)
    props.onSaveExpense(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      setAddExpenseItem(true);
  };
    
    const cancel = (e) => {
        setAddExpenseItem(true);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    const addNewExpense = () => {
        setAddExpenseItem(false)
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {!addExpenseItem && (
          <div>
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                min="2019-01-01"
                max="2023-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>

            <div className="new-expense__actions">
              <button onClick={cancel}>Cancel</button>
              <button onClick={submitHandler} type="submit">
                Add Expense
              </button>
            </div>
          </div>
        )}
        <div className="new-expense__control">
          {addExpenseItem && (
            <button onClick={addNewExpense} type="submit">
              Add New Expense
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
