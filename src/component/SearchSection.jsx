import React from 'react';
import { LuCalendarSearch } from "react-icons/lu";

const SearchSection = () => {
    return (
        <div className='my-8'>
            <div className='ml-1 my-2 flex items-center gap-2'>
                <LuCalendarSearch />
                <b className='text-lg'>Search</b>
            </div>
            <hr className='border'/>
            <div className='flex my-2 items-center'>
                <input className='focus:outline-0 focus:text-white px-4 py-1' placeholder='Find notes...'/>
            </div>
        </div>
    );
};

export default SearchSection;