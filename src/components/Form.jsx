import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Form({ todoData, todos, setTodos, setTodoData }) {

    const handleUserInput = (e) => {
        setTodoData(e.target.value)
    }

    const handleUserSubmit = (e) => {
        e.preventDefault()
        todoData && setTodos([
            ...todos,
            {
                text: todoData,
                id: uuid()
            }
        ])
        setTodoData("")
    }

    return (
        <form onChange={handleUserInput} className="flex items-center">
            <input value={todoData} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button onClick={handleUserSubmit} className="btn"> <Unicons.UilPlus /> </button>
        </form>
    )
}