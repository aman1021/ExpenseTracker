//import ExpenseItem from "./Components/ExpenseItem";
import React, {useState} from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from "./Components/Expenses/Expenses"

const dummyexpenses = [
  {
    id: 1,
    title: "Car Insuarance",
    amount: 450,
    date: new Date(2022, 2, 10),
  },

];

function App() {
  const [expenses, setExpenses]=useState(dummyexpenses);
  

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }
  return (

    <div>
      <NewExpense onAddExpense = {onAddExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
