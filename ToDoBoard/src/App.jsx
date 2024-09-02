import { useState } from "react";
import ToDoBoard from "./ToDoBoard";

function App() {
  const [task, setTask] = useState([]);

  const deleteTask = (index) => {
    setTask(task.filter((_,i) => i!==index))
  }
  console.log(task);
  return (
    <>
      <ToDoBoard task={task} setTask={setTask} />
      <div>
        {task.map((task, index) => (
          <div className="inputTask">
            <li key={index}>{task}</li>
            <button onClick={()=>deleteTask(index)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
