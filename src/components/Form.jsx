import * as Unicons from '@iconscout/react-unicons';
import { useState } from 'react';


export default function Form({ userInput, todoData, setTodoData }) {

    const handleUserInput = (e) => {
        userInput(e.target.value)
    }

    const handleUserSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <form onChange={handleUserInput} className="flex items-center">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button onClick={handleUserSubmit} className="btn"> <Unicons.UilPlus /> </button>
        </form>
    )
}