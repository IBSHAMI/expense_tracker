import React, {
  useState
} from "react";

import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

// filter based on year 
const filterByYear = (expense, selectedYear) => {
  if (selectedYear === expense.date.getFullYear().toString()) {
    console.log("same year")
    return expense
  }
};

const ExpensesList = (props) => {
  const expenses = props.expenses;
  console.log(expenses);

  const [selectedYear, setSelectedYear] = useState("2022");

  const selectYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const dataPresent = expenses.filter(expense => filterByYear(expense, selectedYear)).length

  return ( 
    <div>
    <Card className = "expenses" >
      <ExpenseFilter onSelectYear = {selectYearHandler} selectedYear = {selectedYear}/> 
      {dataPresent === 0 ? <p>No data found for this year</p> : 
      expenses.filter(expense => filterByYear(expense, selectedYear)).map(expense => 
      ( <ExpenseItem key = {expense.id} expenses = {expense}/>) )} 
    </Card>
    </div>
  );
};

export default ExpensesList;