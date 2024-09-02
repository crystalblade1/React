import { useState } from "react";


function List(){

    const [food, setFood] = useState(["apple","banana","lemon"]);

    function add(){

        const newFood = document.getElementById("food").value;
        document.getElementById("food").value="";
        setFood(f=>[...f,newFood])
    }

    function remove(index){
        setFood(food.filter((_,i)=> i !== index)); //it filters the food array and returns a new array with only elements that is not clicked.
                                                   //Then the new array becomes the new state

    }

    return(<div class="food">

        <ul>
            {food.map((food,index)=><li key={index} onClick={()=> remove(index)}>{food}</li>)}
        </ul>
        <input type="text" id="food"/>
        <button onClick={add}>Add</button>
    </div>)
}

export default List