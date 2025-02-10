import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { MenuContextProvider } from '../context/MenuContext';

const Layout = () => {
    return (
        <div>
            <MenuContextProvider>
                <Navbar/>
                <div className='pt-10' style={{ minHeight: 'calc(100vh - 100px)' }}>
                    <Outlet />
                </div>
                <Footer/>
            </MenuContextProvider>
        </div>
    );
};

export default Layout;