import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div style={{ minHeight: 'calc(100vh - 100px)' }}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;