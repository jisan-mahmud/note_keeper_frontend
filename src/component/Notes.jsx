import React, { useContext } from 'react';
import Note from './Note';
import { menuContext } from '../context/MenuContext';

const Notes = () => {
    const menuState = useContext(menuContext)
    console.log(menuState)

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-7/9 gap-4 p-8'>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </div>
    );
};

export default Notes;