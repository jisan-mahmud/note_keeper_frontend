import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h1>Note Keeper</h1>
            <Outlet/>
        </div>
    );
};

export default Layout;