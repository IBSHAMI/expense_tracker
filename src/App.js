import ExpensesList from "./components/ExpensesList/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Rent", amount: 950, date: new Date("2020-01-01") },
    { title: "Coffee", amount: 2.5, date: new Date("2020-01-02") },
    { title: "Restaurant", amount: 100, date: new Date("2020-01-03") },
  ];

  return (
    <div>
      <NewExpense />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
