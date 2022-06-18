import React, { useState } from "react";

import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenses = props.expenses;

  const [selectedYear, setSelectedYear] = useState("2022");

  const selectYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onSelectYear={selectYearHandler}
          selectedYear={selectedYear}
        />
        <ExpenseItem expenses={expenses[0]} />
        <ExpenseItem expenses={expenses[1]} />
        <ExpenseItem expenses={expenses[2]} />
      </Card>
    </div>
  );
};

export default ExpensesList;
