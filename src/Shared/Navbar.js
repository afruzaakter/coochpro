import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import { IoMdHand } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import Loading from './Loading';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user,  loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }

    const handleSignOut = () => {
        console.log("hello", user);
        signOut(auth)
    }

  

    const menuItem = <>


        {
            user && <li className='m-4 mr-60' > <NavLink className="rounded-lg " to='/dashboard'> Dashboard </NavLink> </li>
        }

        {
            user ? <span className='flex items-center mr-7'   onClick={handleSignOut} >
                <BsSearch className='mr-10' />
                <IoIosNotifications className='text-2xl mr-8 text-teal-700' />
                <img className='w-12 h-12 mr-1 rounded-full cursor-pointer' src={user.photoURL} alt="" />{user.displayName}</span>:
                <li className='m-4' > <NavLink className="rounded-lg " to='/login'> Login </NavLink> </li>
        }

        {/* {
            user ? <button className='btn btn-white ' onClick={handleSignOut}>Sign Out</button> :
            <li className='mr-2 text-secondary font-bold'><NavLink to="login">LOGIN</NavLink></li>
        } */}



    </>
    return (
        <div className="navbar ">
            <div className="w-full">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItem}
                    </ul>

                </div>
                <p className=" text-gray-700 normal-case text-2xl">CRM</p>
                <a className="btn btn-ghost normal-case text-xl ml-10 text-teal-700">Welcome back, Android
                    <IoMdHand className='text-yellow-500 ml-2' />  </a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                {/* <ul className="menu menu-horizontal p-0"> */}
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  flex flex-row justify-center items-center ">

                 
                  {menuItem}
                
                    
                    {/* <div className='ml-28'  onClick={handleSignOutD}>
                    <li><a>Settings</a></li>
                    <li onClick={handleSignOut} ><a>Logout</a></li>
                    </div> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

// "primary": "#570DF8",