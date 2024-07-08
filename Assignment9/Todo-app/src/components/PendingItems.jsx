import React from 'react'
import { useSelector } from 'react-redux';

const PendingItems = () => {
    const pendingTodos =  useSelector((state)=>state.todos.todos.filter((todo)=> todo.completed === false));

  return (
    <div>
        <h6 className='mt-2 text-danger'>Pending Items: {pendingTodos.length}</h6>
    </div>
  )
}

export default PendingItems