import React, {useState} from 'react'
import TodoForm from './TodoForm'

export const EditTodoForm = ({editTodo, task}) => {
    const [value,setValue] =useState(task.task)

    const handleSubmit = e=>{
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' 
      value={value} placeholder='update task' 
      onChange={(e)=>setValue(e.target.value)}/>
     
      <button type='submit' className='Todo-btn'>update task</button>
      </form>
  )
}

export default TodoForm
