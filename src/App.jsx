import { useState } from 'react'
import AddTodo from './components/TodoList'
import './App.css'

function App() {
  return (
    <div className='flex justify-center items-center'>
      <div>
        <AddTodo />
      </div>
    </div>
  )
}

export default App
