import React, { useState } from 'react'

const propsPractice = (props) => {

    const [showh1, setShowh1] = useState("")

    const showTitle = () => {
        setShowh1(props.title)
    }
  return (
    <div>
        <h1>{showh1}</h1>
        <button onClick={showTitle}>show</button>
    </div>
  )
}

export default propsPractice