import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const filteredYearConditional = (filteredYear) => {
    if (filteredYear == '2019'){
        console.log('2019');
        const filteredArr = props.expenses.filter(expense => expense.item.date == "2019")
        console.log(filteredArr);
    } else if (filteredYear == '2020'){
        console.log('2020');
        const filteredArr = props.expenses.filter(expense => expense.item.date == "2020")
        console.log(filteredArr);
    } else if (filteredYear == '2021'){
      console.log('2021');
      const filteredArr = props.expenses.filter(expense => expense.item.date == "2021")
      console.log(filteredArr);
  } else {
      console.log('2022')
      const filteredArr = props.expenses.filter(expense => expense.item.date == "2022")
      console.log(filteredArr);
  }
}

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;