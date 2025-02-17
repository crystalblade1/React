import React, { useState } from 'react'

const AddInputField = () => {

    const [newInput, setNewInput] = useState([])

    const addNewInput = () =>{
            setNewInput([...newInput,""])
    }

    const removeInput = (i) => {
        let newArrayInput = newInput.filter((_,index) => index !== i);
        setNewInput(newArrayInput);
    }

    const handleChange = (e,index) => {

        const newArrayInput = [...newInput];
        newArrayInput[index] = e.target.value;
        setNewInput(newArrayInput);
    }

    const handleSubmit = () => {
        console.log(newInput);
    }

  return (
    <div>
        <input type="text" placeholder='type something' />
        <button className='button' onClick={addNewInput}>Add Field</button>
        <button className='button' id='submit-button' onClick={() => handleSubmit()}>Submit</button>

        {
            newInput.map((value,index) => (

            <div className='newInput' key={index}>
                <input type="text" placeholder='type something'onChange={(e) => handleChange(e,index)} />
                <button className='button' id='remove-button' onClick={() => removeInput(index)} >Remove</button>
            </div>

            ))
        }



    </div>
  )
}

export default AddInputField