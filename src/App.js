//import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses"

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insuarance",
      amount: 450,
      date: new Date(2022, 2, 10),
    },
    {
      id: 2,
      title: "Groceries",
      amount: 6000,
      date: new Date(2022, 2, 11),
    },
    {
      id: 3,
      title: "car cleaning",
      amount: 4500,
      date: new Date(2022, 2, 8),
    },
    {
      id: 4,
      title: "Books",
      amount: 1000,
      date: new Date(2022, 2, 6),
    },
  ];
  return (

    <div>
      <h1>Lets make our project.</h1>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
