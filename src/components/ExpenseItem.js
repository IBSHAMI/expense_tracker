import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseItemDate from "./ExpenseItemDate";

function ExpenseItem(props) {
  const expenseTitle = props.expenses.title;
  const expenseAmount = props.expenses.amount;
  const expenseDate = props.expenses.date;

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
