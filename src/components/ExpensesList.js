import "./ExpensesList.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
    </Card>
  );
}

export default ExpensesList;
