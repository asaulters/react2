import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
// import App from "../../App";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    if(isEditing === false) {
        return
    }

    const saveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        console.log("Editing!")
        setIsEditing(true);
        console.log("Editing!")
    }



    return (
        <div className="new-expense">
            {!isEditing && (<button type='submit' onClick={startEditingHandler}>Add Expense Item</button>)}
            {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>)}
        </div>
    )
};

export default NewExpense;