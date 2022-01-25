import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses (props) {
  return (
        <div className="expenses">
            <ExpenseItem 
                title={props.items[0].title} 
                amount={props.items[0].amount} 
                date={props.items[0].date}
            />
            <ExpenseItem 
                title={props.items[1].title} 
                amount={props.items[1].amount} 
                date={props.items[1].date}
            />
            <ExpenseItem 
                title={props.items[2].title} 
                amount={props.items[2].amount} 
                date={props.items[2].date}
            />
            <ExpenseItem 
                title={props.items[3].title} 
                amount={props.items[3].amount} 
                date={props.items[3].date}
            />


        {/* <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>       */}

        </div>

    )
}

export default Expenses;