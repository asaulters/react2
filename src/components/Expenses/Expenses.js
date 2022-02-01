import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpensesFilter from './ExpenseFilter';



const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2019');

    const filteredChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // console.log('expenses');
        // console.log(selectedYear)
    }

  return (
        <div>
       
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>

            {props.items.map(expense => 
            <ExpenseItem 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}

                />
            )}
    
            
            
        </Card>
        </div>

    )
}

export default Expenses;