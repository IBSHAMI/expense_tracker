import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveNewExpenseData = (expenseData) => {
    props.onAddData(expenseData);
  };

  // return a form to add a new expense
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveNewExpenseData} />
    </div>
  );
};

export default NewExpense;
