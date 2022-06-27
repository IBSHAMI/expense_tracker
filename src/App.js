import React, { useState } from "react";

import ExpensesList from "./components/ExpensesList/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  { id: "1", title: "Rent", amount: 950, date: new Date("2020-01-01") },
  { id: "2", title: "Coffee", amount: 2.5, date: new Date("2020-01-02") },
  { id: "3", title: "Restaurant", amount: 100, date: new Date("2020-01-03") },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseData = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    }) ;
  };

  return (
    <div>
      <NewExpense onAddData={addExpenseData} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
