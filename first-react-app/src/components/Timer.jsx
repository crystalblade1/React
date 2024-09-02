import React, {useState} from "react";


function Timer(){

    const [counter, setCounter] = useState(0);

    function add(){
       
        setCounter(counter+1);
    }
    function subtract(){
    if(counter>0){
        setCounter(counter-1);
    }
    }

    return(
        <div class="body">
        <button onClick={add}>Increment</button>
        <span class="counter">{counter}</span>
        <button onClick={subtract}>Decrement</button>
        </div>
    )

}

export default Timer