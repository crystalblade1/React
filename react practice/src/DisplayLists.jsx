import React, { useState } from 'react'


// Implement a React component that displays a list of items passed in as a prop. The component should allow users to filter the list based on a search input.

// Requirements:

//     Props: The component should accept a prop named items, which is an array of strings.
//     Search Input: Include an input field where users can type to filter the list.
//     Filtered List: Display only the items that include the search term.
//     Case-Insensitive: The search should be case-insensitive.

// Example Usage:

// jsx

// const items = ["Apple", "Banana", "Cherry", "Date"];

// <MyListComponent items={items} />

// Expected Behavior:

//     Typing "a" in the search input should show "Apple", "Banana", and "Date".
//     Typing "Ch" should show "Cherry".

const DisplayLists = ({items}) => {

  const [searchItem, setSearchItem] = useState("")

  const handleChange = (e) => {

    setSearchItem(e.target.value);
  }

  const filteredItems = items.filter((item) =>
    
    item.toLowerCase().includes(searchItem.toLowerCase())
  );


  return (
    <div>
        <h1>Search List</h1>

        <input type="text" placeholder='Search something' onChange={(e) => handleChange(e)} />
        <div>{filteredItems.map((item,index) => (
          <div key={item}>{item}</div>
        ))}</div>
    </div>
  )
}

export default DisplayLists