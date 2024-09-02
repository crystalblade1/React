import { useState, useEffect } from "react";
import crossIcon from "./images/icon-cross.svg";
import lightIcon from "./images/icon-sun.svg";
import darkIcon from "./images/icon-moon.svg";
import lightbg from "./images/bg-desktop-light.jpg"
import darkbg from "./images/bg-desktop-dark.jpg"

function Todoapp() {

  const [task, setTask] = useState([
    {text:"Jog around the park 3x",checked: false},
    {text:"10 minutes meditation",checked: false},
    {text:"Read for 1 hour",checked: false},
    {text:"Pick up groceries",checked: false},
    {text:"Complete a todo app on Frontend Mentor",checked: false}
  ]);
  const [mode, setMode] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(task)
  const [countItems, setCountItems] = useState(task.length)

  function checked(index) {

    const updatedTasks = task.map((task,i)=>{

      const delTask = <span style={{color:"rgb(87, 87, 87)"}}><del>{task.text}</del></span>;
        
        if(i === index){

            return {...task,text: task.checked ? task.text:delTask , checked: !task.checked};
        }
        return task;
  });
  setTask(updatedTasks);
  setFilteredTasks(updatedTasks);
  }

  function filterTaskActive(){

    setFilteredTasks(task.filter((task)=>    
       !task.checked
    ))
    setCountItems(filteredTasks.length)
  }

  function filterTaskAll(){
    setFilteredTasks(task);
    setCountItems(filteredTasks.length)
  }

  function filterTaskCompleted(){
    setFilteredTasks(task.filter((task)=>    
      task.checked
   ))
   setCountItems(filteredTasks.length)
  }

  const taskStyle = {
    backgroundColor: mode ? "white" : "hsl(235, 24%, 19%)",
    color: mode ? "black" : "white",
  };

  function toggleMode() { 
    setMode(!mode);
    const toggleColor = mode ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)";
    const toggleapp = mode ? "hsl(235, 24%, 19%)" : "white";
    const toggleBg = mode ? `url(${darkbg})` : `url(${lightbg})`;

    document.body.style.backgroundColor = toggleColor;
    document.querySelector(".inputTask").style.backgroundColor = toggleapp;
    document.querySelector(".filter").style.backgroundColor = toggleapp;
    document.getElementById("input").style.backgroundColor = toggleapp;
    document.body.style.backgroundImage = toggleBg;
  }

  function createTask(e) {
    if (e.key === "Enter") {
      newTask();

    }
  }

  function newTask() {
    const tasks = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (tasks.length > 0) {
      const newTasks = [...task, { text: tasks, checked: false }];
      setTask(newTasks);
      setFilteredTasks(newTasks);
      setCountItems(newTasks.filter(task => !task.checked).length);
    }
  }

  function removeTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
    setFilteredTasks(updatedTasks); 
  }

  return (
    <div className="todoapp">
      <div className="title">
        <h1>TO DO</h1>
        <img
          src={mode ? darkIcon : lightIcon}
          alt="img"
          id="lightIcon"
          onClick={toggleMode}
        />
      </div>

      <div className="inputTask">
        <input
          type="text"
          role="radio-button"
          id="input"
          onKeyDown={createTask}
          placeholder="Create a new todo..."
        />
      </div>

      <div className="newTasks">
        {filteredTasks.map((task, index) => (
          <div className="newTask" key={index} style={taskStyle}>
            <input
              type="radio"
              id={`radio-${index}`}
              checked={task.checked}
              onClick={() => checked(index)}
            />
            <label htmlFor={`radio-${index}`}></label>
            <li>{task.text}</li>
            <img
              src={crossIcon}
              alt="close"
              onClick={() => removeTask(index)}
            />
          </div>
        ))}
        <div className="filter">
          <p>{countItems} items left</p>
          <p onClick={filterTaskAll}>All</p>
          <p onClick={filterTaskActive}>Active</p>
          <p onClick={filterTaskCompleted}>Completed</p>
          <p>Clear Completed</p>
        </div>
      </div>
    </div>
  );
}

export default Todoapp;
