import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { menuContext } from '../context/MenuContext';

const Navbar = () => {

    const menuState = useContext(menuContext)
    
    const handleMenu = () => {
        menuState.setIsOpen(!menuState.isOpen)
    }

    return (
        <div className='flex px-6 sm:px-20 py-3 bg-[#FF9A8B] justify-between items-center'>
            <div className='flex gap-4 items-center text-lg sm:text-2xl'>
                <TiThMenu onClick={handleMenu} className='cursor-pointer' />
                <h1><Link to='/'>Note Memo</Link></h1>
            </div>
            <div className='flex gap-4 text-lg'>
                <NavLink to='/sign-up' className={'hover:text-blue-900'}>Singup</NavLink>
                <NavLink to='/login' className={'hover:text-blue-900'}>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;