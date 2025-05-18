import React from 'react';

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  return (
    <div className="summary">
      <h2>Monthly Summary: <br/>${total.toFixed(2)}</h2>
      <div>
      {Object.entries(categoryTotals).map(([cat, amt]) => (
        <p key={cat}>{cat}: ${amt.toFixed(2)}</p>
      ))}
      </div>
    </div>
  );
}

export default ExpenseSummary;


