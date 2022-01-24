function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-us', {month:'long'} );
    const year = props.date.getFullYear('4-digit');
    const day = props.date.toLocaleString('en-us', {day:'2-digit'} );

    <div>
    <div>{month}</div>
    <div>{year}</div>
    <div>{day}</div>
</div>
}

export default ExpenseDate;
// 