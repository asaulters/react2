import React, { useState } from "react"


import NewExpense from "./NewExpense"
import './ExpenseForm.css'

const ExpenseForm= (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })


    const titleChangeHandler =(e) => {
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return{ ...prevState, enteredTitle:e.target.value}
        // })  =>>>  use if state update depends on prevState!!!
    }
    const amountChangeHandler =(e) => {
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
            
        // })
        
    }
    const dateChangeHandler =(e) => {
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
            
        // })
        
        
    }



    const submitHandler = (e) => {
        e.preventDefault();
        let expenseData = [{ 
            title:enteredTitle, 
            amount: enteredAmount, 
            date: new Date(enteredDate)}];

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Expense Name</label>
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type='number' 
                    value={enteredAmount} 
                    min="0.01" step='0.01' 
                    onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" 
                    value={enteredDate}
                    min="2022-01-01" max="2024-12-31" 
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit' >Add Expense</button>
            </div>

        </form>
    )


}

export default ExpenseForm