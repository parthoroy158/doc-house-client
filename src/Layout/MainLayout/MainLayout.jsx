import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Share/Navbar/Navbar';
import Footer from '../../Pages/Home/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    console.log(location)
    const show = location.pathname.includes('/logIn') || location.pathname.includes('/signUp')
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {show || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;