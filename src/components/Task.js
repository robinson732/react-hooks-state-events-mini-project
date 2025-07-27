import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleDelete() {
    onDeleteTask(text); // Pass the task identifier (text) back to App
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
