import React from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css'

const Expenses = (props) => { 
    console.log(props)
    return (
      <Card className="expenses">
        {props.expenses.map((item) => (
          <ExpenseItem key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Card>
    );
}

export default Expenses;