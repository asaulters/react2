import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

//   const filteredYearConditional = (filteredYear) => {
//       if (filteredYear == '2019'){
//           console.log('2019');
//           const filteredArr = props.expenses.filter(expense => expense.item.date == "2019")
//           console.log(filteredArr);
//       } else if (filteredYear == '2020'){
//           console.log('2020');
//           const filteredArr = props.expenses.filter(expense => expense.item.date == "2020")
//           console.log(filteredArr);
//       } else if (filteredYear == '2021'){
//         console.log('2021');
//         const filteredArr = props.expenses.filter(expense => expense.item.date == "2021")
//         console.log(filteredArr);
//     } else {
//         console.log('2022')
//         const filteredArr = props.expenses.filter(expense => expense.item.date == "2022")
//         console.log(filteredArr);
//     }
//   }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    <ExpensesFilter filteredYearConditional={selectedYear} />
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;