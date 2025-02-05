import React from 'react';
import Note from './Note';

const Notes = () => {
    return (
        <div className='grid grid-cols-4 w-7/9 gap-4 p-8'>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </div>
    );
};

export default Notes;