import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaUserDoctor } from "react-icons/fa6";
import useAuth from '../Hooks/useAuth';
import { div } from 'framer-motion/client';

const Navbar = () => {
    const { user, userSignOut } = useAuth()


    const handleLogOut = () => {
        userSignOut()
            .then(result => {
                console.log(result)
            })
            .catch(data => {
                console.log(data)
            })
    }

    const items = <>
        <div className='md:flex text-white items-center'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/logIn'>Appointment</NavLink></li>
            {
                user ?
                    <div className='flex items-center gap-1'>
                        <button className='btn btn-ghost hover:bg-blue-300 '>{user.displayName}
                        </button>
                        <img className='w-10 rounded-full' src={user.photoURL} alt="" />
                    </div>
                    :
                    ''
            }
        </div>
    </>
    return (
        <div className={`navbar bg-[#54a39d] fixed z-10  max-w-7xl mx-auto pl-5 pr-5 `}>
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden dark:text-white ">
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
            <div className="navbar-end gap-2">
                {
                    user ? <>
                        <Link to='/signUp'><button className="btn btn-sm md:btn-outline" onClick={handleLogOut} >LOG OUT</button></Link>

                    </> :
                        <>
                            <Link to='/signUp'><button className="btn btn-sm md:btn-outline" >SIGN UP</button></Link>
                            <Link to='/logIn'><button className="btn  btn-sm md:btn-outline" >LOG IN</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;