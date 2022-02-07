import './ExpenseItem.css'

function ExpenseItem(){
    const expenseTitle = 'Expense-Title'
    return(
        <div className = "expense-item">
            <div>Date</div>
            <div className = "expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">Amount</div>
            </div>
        </div>
    )
}

//Exporting the Component
export default ExpenseItem;