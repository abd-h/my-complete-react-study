import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   Multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("$");
  const [enteredDate, setEnteredDate] = useState("");
  const [addNewExpense, setAddExpnese] = useState(true);
  // Single state

  //  const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  //  });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevSate) => {
    //   return {...prevSate, title: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {...prevState, amount: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevSate) => {
    //   return { ...prevSate, date: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    console.log(event.target.value);
    event.preventDefault();

    // const expenseData = {
    //   title: enteredTitle,
    //   amount: "$" + enteredAmount,
    //   date: new Date(enteredDate),
    // };
    // props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
  };

  const cancelButton = () => {
    setAddExpnese(true);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const nextButton = () => {
    setAddExpnese(true);
    const expenseData = {
      title: enteredTitle,
      amount: '$' + enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const addNewExpenses = () => {
    setAddExpnese(false);
  };

  console.log(addNewExpense);

  return (
    <form onSubmit={submitHandler}>
      {addNewExpense === false ? (
        <div className="new-expense_controls">
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
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <button onClick={cancelButton}>Cancel</button>
          <button onClick={nextButton} type="submit">
            Add Expense
          </button>
        </div>
      ) : (
        <button onClick={addNewExpenses}>Add New Expense</button>
      )}
    </form>
  );
};

export default ExpenseForm;
