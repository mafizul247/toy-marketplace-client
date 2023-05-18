import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Shared/Navber';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navber />
            <div className='min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;