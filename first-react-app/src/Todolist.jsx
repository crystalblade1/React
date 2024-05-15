import React, {useState} from "react";

function Todolist(){

    const [dolist, setDolist] = useState([]);
    const [handlelist, setHandlelist] = useState("");

    function addtask(){

        if(handlelist.trim()==""){
            alert("Please enter an item first")
            return;
        }
        setDolist(d =>[...d, handlelist]);
        setHandlelist("");
    }

    function handletask(event){
        setHandlelist(event.target.value);
    }

    function resetAll(){
        setDolist([]);
    }

    function deleteItem(index){
        setDolist(d => d.filter((_,i) => i !== index));
    }

    function moveUp(index){
        const updatedlist = [...dolist];
        const temp = updatedlist[index]; 
        updatedlist[index] = updatedlist[index - 1]; 
        updatedlist[index - 1] = temp;
        setDolist(updatedlist);
    }

    function moveDown(index){
        const updatedlist = [...dolist];
        const temp = updatedlist[index]; 
        updatedlist[index] = updatedlist[index + 1]; 
        updatedlist[index + 1] = temp;
        setDolist(updatedlist);
    }

    return <div className="main-app">
        <h1 id ="title">To-Do-List</h1>
        <div>
            <input type="text" id ="addItem" value={handlelist} placeholder="Enter a task..." onChange={handletask}/>
            <button id ="addButton" onClick={addtask}>Add</button>
            <button id ="resetButton" onClick={resetAll}>Reset All</button>
        </div>

            <ul>
                {
                    dolist.map((item,index) =>
                    <div className="item-border">
                <li id = "items" key ={index}>
                {item}
                </li>
                    <div className="border-buttons">
                        <button id="deleteButton" onClick={() => deleteItem(index)}>Delete</button>
                        <button id="moveUpButton" onClick={() => moveUp(index)}>Up</button>
                        <button id="moveDownButton" onClick={() => moveDown(index)}>Down</button>
                    </div>
                </div>
                )
                }
            </ul>
    </div>
}

export default Todolist