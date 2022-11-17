import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const handleSignOut = () => {
        console.log("hello", user);
    }

    const menuItem = <>
        <li className='m-4'> <NavLink className="rounded-lg " to='/home'> Home </NavLink> </li>
        <li className='m-4' > <NavLink className="rounded-lg " to='/dashboard'> Dashboard </NavLink> </li>

        {
            user ?<p  className=' m-8' onClick={handleSignOut} >
                    {user.displayName}</p> :
            <li className='m-4' > <NavLink className="rounded-lg " to='/login'> Login </NavLink> </li>
        }
    </>
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}

                    </ul>

                </div>
                <a className="btn btn-ghost normal-case text-xl">CoochPro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;