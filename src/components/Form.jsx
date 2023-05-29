import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';

export default function Form({ todoData, todos, setTodos, setTodoData }) {

    const handleUserInput = (e) => {
        setTodoData(e.target.value)
    }

    const handleUserSubmit = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, 
            {
                text: todoData,
                completed: false,
                id: 5
            }
        ])
    }

    return (
        <form onChange={handleUserInput} className="flex items-center">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button onClick={handleUserSubmit} className="btn"> <Unicons.UilPlus /> </button>
        </form>
    )
}