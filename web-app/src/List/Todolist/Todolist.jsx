import { useState } from "react";

function Todolist(){

    const [task, setTask] = useState([]);

    function add(){

        const newTask = document.getElementById("tasks").value;
        document.getElementById("tasks").value="";
        setTask(t=>[...t,newTask])
    }

    function remove(index){
        setTask(task.filter((_,i)=> i !== index)); 

    }
    function MoveUp(index){
        if(index>0){
        const updatedTasks = [...task];
        [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1], updatedTasks[index]];
        setTask(updatedTasks)
    }

    }
    function MoveDown(index){
        if(index< task.length+1){
        const updatedTasks =[...task]
        [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1], updatedTasks[index]];
        setTask(updatedTasks)
    }
    }

    return(<div class="todolist">

        <h2>To Do List</h2>
        <input type="text" id="tasks"/>
        <button onClick={add}>Add</button>
       
            {task.map((task,index)=><div class="tas" key={index}>{task}
                <button onClick={()=>remove(index)}>delete</button>
                <button onClick={()=>MoveDown(index)}>Down</button>
                <button onClick={()=>MoveUp(index)}>Up</button>
            </div>)}
            
  
        
        
    </div>)
}

export default Todolist