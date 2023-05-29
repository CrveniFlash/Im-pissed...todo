
import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Todo({todoText, completed}) {
    const [complete, setComplete] = useState(false)
    
    const handleComplete = () => {
        setComplete(!complete)
    }

    

    return (
        <div className='flex'>
            <div onClick={handleComplete} className={`flex text-lg items-center ${complete ? "line-through text-white/50" : ""}`}>
                <input type="checkbox" checked={complete} className="checkbox " />
                <p className='mb-[1px]'> {todoText} </p>
            </div>
            <div>
                <Unicons.UilTrash  />
            </div>
        </div>
    )
}