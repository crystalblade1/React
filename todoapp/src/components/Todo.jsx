import React from "react";

const Todo = ({ task }) => {
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <div>
        <button>edit</button>
        <button>X</button>
      </div>
    </div>
  );
};

export default Todo;
