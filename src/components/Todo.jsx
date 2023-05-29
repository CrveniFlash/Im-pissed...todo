
import * as Unicons from '@iconscout/react-unicons';
import React from 'react';

export default function Todo({todoText}) {

    return (
        <div className='flex'>
            <div className='flex'>
                <input type="checkbox" checked="checked" className="checkbox" />
                <p> {todoText} </p>
            </div>
            <div>
                <Unicons.UilTrash  />
            </div>
        </div>
    )
}