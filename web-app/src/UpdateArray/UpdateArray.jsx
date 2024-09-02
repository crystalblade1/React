import { useState } from "react"

function UpdateArray(){

    const [Cars, setCars] = useState([])

    function addCars(){

        const name = document.getElementById("name").value;
        const year = document.getElementById("year").value;
        const make = document.getElementById("make").value;

        const carModel = name+" "+year+" "+make

        setCars(c=>[...c, (carModel)])
    }

    function removeCars(index){

        setCars(Cars.filter((_,i) => {i !==index}))
    }

    return(<div class="cars">
        <h2>List of cars</h2>

        <ul>
        {Cars.map((Cars,index)=> <li key={index} onClick={()=>removeCars(index)}>{Cars}</li>)}
        </ul>
        <input type="text" placeholder="name" id="name" />
        <br />
        <input type="text" placeholder="year" id="year"/>
        <br />
        <input type="text" placeholder="make" id="make"/>
        <br />
        <button onClick={addCars}>add car</button>
    </div>)
}
export default UpdateArray