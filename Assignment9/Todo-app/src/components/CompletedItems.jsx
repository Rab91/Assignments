import React from 'react'
import { useSelector } from 'react-redux'

const CompletedItems = () => {
    const completedTodos =  useSelector((state)=>state.todos.todos.filter((todo)=> todo.completed === true));
  return (
    <div>
        <h6 className='mt-2 text-success'>Completed Items: {completedTodos.length}</h6>
    </div>
  )
}

export default CompletedItems