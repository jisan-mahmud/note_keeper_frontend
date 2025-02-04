import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex px-20 py-3 bg-yellow-300 justify-between'>
            <div>
                <h1 className='text-2xl'>Note Memo</h1>
            </div>
            <div className='flex gap-4 text-lg'>
                <NavLink className={'hover:text-blue-900'}>Singup</NavLink>
                <NavLink className={'hover:text-blue-900'}>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;