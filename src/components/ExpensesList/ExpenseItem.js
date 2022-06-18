import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseItemDate from "./ExpenseItemDate";

const ExpenseItem = (props) => {
  const expenseAmount = props.expenses.amount;
  const expenseDate = props.expenses.date;

  const [expenseTitle, setExpenseTitle] = useState(props.expenses.title);

  const handleClick = () => {
    setExpenseTitle("updated name")
  };

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={handleClick}>Change expense</button>
    </Card>
  );
};

export default ExpenseItem;
