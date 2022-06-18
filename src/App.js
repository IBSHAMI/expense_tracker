import React, { useState } from "react";

import ExpensesList from "./components/ExpensesList/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initialExpenses = [
    { title: "Rent", amount: 950, date: new Date("2020-01-01") },
    { title: "Coffee", amount: 2.5, date: new Date("2020-01-02") },
    { title: "Restaurant", amount: 100, date: new Date("2020-01-03") },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseData = (newExpenseData) => {
    // setExpenses((prevExpenses) => {
    //   return expenses.push(newExpenseData);
    // });
    console.log(expenses);
    console.log(newExpenseData);
  };

  return (
    <div>
      <NewExpense onAddData={addExpenseData} />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
