import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import CompletedItems from './components/CompletedItems'
import PendingItems from './components/PendingItems'

function App() {

  return (
    <>
    <div className='row justify-content-center align-items-center mt-5 p-2'>
      <div className="border border bg-white p-2 m-2 rounded w-50">
        <h1 className='text-center title'>Todo List</h1>
        <TodoInput />
        <CompletedItems />
        <PendingItems />
      </div>
      </div>
    </>
  )
}

export default App
