import React, { useState } from 'react'

export const Fruits1 = () => {


  const [fruitSearch, setFruitSearch] = useState([])

    const fruits =[
        "Apple",
        "Apricot",
        "Banana",
        "Blueberry",
        "Cherry",
        "Cranberry",
        "Date",
        "Dragonfruit",
        "Fig",
        "Grape",
        "Grapefruit",
    ];

    function filter(e){
      setFruitSearch(fruits.filter((fruit,i) => fruit == e.target.value))
    }
  return (
    <div>
        <input type="text" placeholder='search a fruit' onChange={(e) => filter(e)}  />
        <p>{fruits}</p>
        <p>{fruitSearch}</p>
    </div>
  )
}
