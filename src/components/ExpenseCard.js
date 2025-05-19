import React, { useState } from 'react';

function ExpenseCard({ expense, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({ ...expense });

  const handleSave = () => {
    onUpdate(edited);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input value={edited.title} onChange={(e) => setEdited({ ...edited, title: e.target.value })} />
          <input type="number" value={edited.amount} onChange={(e) => setEdited({ ...edited, amount: parseFloat(e.target.value) })} />
          <select value={edited.category} onChange={(e) => setEdited({ ...edited, category: e.target.value })}>
            <option>Food</option>
            <option>Transport</option>
            <option>Bills</option>
            <option>Entertainment</option>
          </select>
          <input type="date" value={edited.date} onChange={(e) => setEdited({ ...edited, date: e.target.value })} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
        <div className='expensecontainer'>
          <div className="card-header">
            
            <h4>{expense.title}</h4>
            <span className="amount">${expense.amount.toFixed(2)}</span>
          </div>
          <p>{expense.category} | {expense.date}</p>
          <div className="card-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(expense.id)}>Delete</button>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ExpenseCard;
