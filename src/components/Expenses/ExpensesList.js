import React from 'react';

import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    let expensesContent = <li className='expenses-list__fallback'>Out of range</li>;
    if (props.filteredExpenses.length > 0) {
      expensesContent = props.filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ));
    }
    return <ul className="expenses-list">{expensesContent}
    </ul>;
}

export default ExpensesList;