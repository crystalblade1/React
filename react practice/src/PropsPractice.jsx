import React, { useState } from 'react'

// Write a functional component in React that takes a title prop and displays it inside an <h1> tag. Also, include a button that toggles the visibility of the title when clicked. The button should display "Show" when the title is hidden and "Hide" when the title is visible.

// Requirements:

//     The component should receive a title prop.
//     The title should be displayed inside an <h1> tag.
//     The component should have a button to toggle the visibility of the title.
//     The button text should change based on whether the title is visible or hidden.

// Example Usage:

// jsx

// <MyComponent title="Hello, World!" />

const propsPractice = (props) => {

    const [showh1, setShowh1] = useState(false)


    const showTitle = () => {
        setShowh1(prevshowh1 => !prevshowh1)
        
    }
  return (
    <div>
        {showh1 && <h1>{props.title}</h1>}
        <button onClick={showTitle}>{showh1? "Hide":"Show"}</button>
    </div>
  )
}

export default propsPractice