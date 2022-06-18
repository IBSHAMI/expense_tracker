import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseItemDate from "./ExpenseItemDate";

const ExpenseItem = (props) => {
  console.log(props)
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.expenses.date} />
      <div className="expense-item__description">
        <h2>{props.expenses.title}</h2>
        <div className="expense-item__price">${props.expenses.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
