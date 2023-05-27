import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
   setTitle(prev => prev = 'Updted')
  }

  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}type="button">Change Title</button>
      </Card>
   
  );
};

export default ExpenseItem;
