import React, { useState } from "react";

import "../Expenses/ExpenseFilter.css";
const ExpenseFilter = (props) => {
    const [year, setYear] = useState('')
    const selectedYearHandler = (e => {
        
        props.onSelectedFilteredYear(e.target.value);
    })
 
    console.log(props.value)
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.year} onChange={selectedYearHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
