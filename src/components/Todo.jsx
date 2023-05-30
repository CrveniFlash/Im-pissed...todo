
import React from 'react';
import { useState } from 'react';

export default function Todo({ todoText, completed, todos }) {
    const [complete, setComplete] = useState(false)

    const handleComplete = () => {
        setComplete(!complete)
    }

    console.log(todos)


    return (
        <div className='flex'>
            <div onClick={handleComplete} className={`flex text-lg items-center ${complete ? "line-through text-white/50" : ""}`}>
                <input type="checkbox" checked={complete} className="checkbox " />
                <p className='mb-[1px]'> {todoText} </p>
            </div>
        </div>
    )
}