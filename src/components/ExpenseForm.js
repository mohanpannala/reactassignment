import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      alert('All fields are required.');
      return;
    }
    const expense = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    onAddExpense(expense);
    setTitle('');
    setAmount('');
    setCategory('Food');
    setDate('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Entertainment</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
