import React from 'react';
import ExpenseCard from './ExpenseCard';

function ExpenseList({ expenses, onDelete, onUpdate }) {
  return (
    <div className="list">
      
      {expenses.length === 0 ? <p>No expenses yet.</p> : (
        expenses.map(expense => (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
      </div>
  );
}

export default ExpenseList;
