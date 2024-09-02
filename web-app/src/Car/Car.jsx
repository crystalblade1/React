import React, { useState } from 'react';

function Car() {

  const [car, setCar] = useState({
    name: "Ford",
    year: 2000,
    make: "Mustang",
  });


  function handleName(e){

    setCar(c=>({...c,name: e.target.value}))
  }

  function handleYear(e){

    setCar(c=>({...c,year: e.target.value}))
  }
  function handleMake(e){

    setCar(c=>({...c,make: e.target.value}))
  }
  return(
    <div class="car">
        <p>Your favorite car is {car.name} {car.year} {car.make}</p>
      
        <input type="text" onChange={handleName}/>
        <br />
        <input type="number" value={car.year} onChange={handleYear}/>
        <br />
        <input type="text" value={car.make} onChange={handleMake}/>
    </div>
  )
}

export default Car;
