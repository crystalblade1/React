import React, {useState} from 'react'

const TodoForm = () => {

  const [value,setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type ="text" 
    className='todo-input' 
    placeholder='Write your task'
    value ={value}
    onChange={(e) => setValue(e.target.value)}/>

<button type='submit' className='todo-btn'>Enter</button>
</form>
  )
}

export default TodoForm