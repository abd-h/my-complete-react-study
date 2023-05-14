import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const expensesFilterHandler = e => {
        console.log(e.target.value)
       return props.onExpensesFilterYear(e.target.value)
    }
    return (
      <div className="expenses-filter">
        <div className='expenses-filter__control'>
        <label htmlFor="filtered-year">Filter by year</label>
          <select value={props.select} onChange={expensesFilterHandler}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    );
}

export default ExpensesFilter





























// import "./ExpenseFilter.css";

// const ExpenseFilter = (props) => {
//   const [selectedYear, setSelectedYear] = useState("2020");

//   const selectedDateHandler = (e) => {
//     setSelectedYear((prev) => (prev = e.target.value));
//   }; 
//   props.onSelectedYear(selectedYear);

//   return (
//     <div className="expenses-filter">
//       <div className="expenses-filter__control">
//         <label htmlFor="year">Filter by year</label>
//         <select onChange={selectedDateHandler} value={selectedYear}>
//           <option value="2022">2022</option>
//           <option value="2021">2021</option>
//           <option value="2020">2020</option>
//           <option value="2019">2019</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ExpenseFilter;
