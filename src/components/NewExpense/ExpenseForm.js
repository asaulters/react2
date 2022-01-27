import React, { useState } from "react"


import NewExpense from "./NewExpense"
import './ExpenseForm.css'

const ExpenseForm= (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    let newExpenses =[{}];

    const titleChangeHandler =(e) => {
        // setEnteredTitle(e.target.value)
        setUserInput({
            ...userInput,
            enteredTitle: e.target.value
            
        })
        
    }
    const amountChangeHandler =(e) => {
        // setEnteredAmount(e.target.value)
        setUserInput({
            ...userInput,
            enteredAmount: e.target.value
            
        })
        
    }
    const dateChangeHandler =(e) => {
        // setEnteredDate(e.target.value)
        setUserInput({
            ...userInput,
            enteredDate: e.target.value
            
        })
        
    }

    const newExpenseItemHandler = (e) => {
        e.preventDefault()
        // let newTitle = setEnteredTitle;
        // let newAmount = setEnteredAmount;
        // let newDate = setEnteredDate;
        // let newExpenseItem = [{ setEnteredTitle, setEnteredAmount, setEnteredDate}];
        // let newExpenseItem = [{ newTitle, newAmount, newDate}];
        // newExpenses.push(newExpenseItem);
        newExpenses.push(userInput);
        console.log(newExpenses);

    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Expense Name</label>
                    <input type="text" name="expenseNameNew" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type='number' name="expenseAmountNew" min="0.01" step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" name="expenseDateNew" min="2022-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit' onClick={ newExpenseItemHandler} >Add Expense</button>
            </div>

        </form>
    )


}

export default ExpenseForm