import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";

const Navbar = () => {

    const items = <>
        <div className='md:flex text-white'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/appointment'>Appointment</NavLink></li>
            <li><a>Submenu 2</a></li>
        </div>
    </>
    return (
        <div className="navbar bg-black-500/10 fixed z-1 max-w-7xl mx-auto pl-5 pr-5 ">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#54a39d] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {items}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white"><FaUserDoctor />Doctor House</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn md:btn-outline" >Log In</a>
            </div>
        </div>
    );
};

export default Navbar;