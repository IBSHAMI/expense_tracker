import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  let title, amount, date;

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleInputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountInputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateInputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // change entered date to a date object
    userInput.date = new Date(userInput.date);

    const newExpenseData = userInput;
    props.onSaveData(newExpenseData);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleInputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountInputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-01-01"
            value={date}
            onChange={dateInputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
