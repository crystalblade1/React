import React, { useState } from "react";
import { useRef } from "react";

const ToDoBoard = ({task,setTask}) => {
const inputRef = useRef()

  const [input, setInput] = useState("");


  const add = (e) => {
    e.preventDefault()
    setTask([...task,input])
    setInput("")
    inputRef.current.focus()
  };

  return (
    <div>
      <h1>To Do Board</h1>
      <input
        type="text"
        placeholder="Type a task"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        ref={inputRef}
      />
      <button onClick={add}>Add</button>


     
    </div>
  );
};

export default ToDoBoard;
