import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex px-20 py-3 bg-[#FF9A8B] justify-between'>
            <div>
                <h1><Link to='/' className='text-2xl'>Note Memo</Link></h1>
            </div>
            <div className='flex gap-4 text-lg'>
                <NavLink to='/sign-up' className={'hover:text-blue-900'}>Singup</NavLink>
                <NavLink to='/login' className={'hover:text-blue-900'}>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;