
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import { IoMdHand } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import Loading from './Loading';
import { signOut } from 'firebase/auth';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    const handleSignOut = () => {
        signOut(auth)
    }

    const menuItem = <>
        {
            user && <li className='m-4 mr-60' > <NavLink className="rounded-lg " to='/dashboard'> Dashboard </NavLink> </li>

        }
    </>
    const profile = <>
        {
            user ?
                <span className='flex items-center'>

                    <img className='w-12 h-12 mr-1 rounded-full cursor-pointer' src={user.photoURL} alt="" />{user.displayName}</span> :
                <li className='m-4' > <NavLink className="rounded-lg " to='/login'> Login </NavLink> </li>
        }
    </>


    return (
        
        <div className="navbar ">
            <div className="w-full">

             {/* *************************** Mobile Device Nav-Icon************************************** */}

                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http:www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                        
                        <span className='flex items-center  ml-48'>
                        <BsSearch className='mr-10' />
                        <IoIosNotifications className='text-2xl mr-8 text-teal-700' />
                      </span>


            {/* *************************** User Profile Responsive Mobile Device************************************/}


                         <div class="dropdown dropdown-end ">
                             <label tabindex="0" class="flex justify-between items-end  m-1">{profile}</label>
                            <ul tabindex="0" class="dropdown-content menu p-2 w-52">
                                <li className='text-primary mb-2 font-bold '><NavLink to='/profile'> <FaUserCircle /> Profile</NavLink></li>
                                <li className='text-primary mb-2 font-bold '><NavLink to='/profileEdit'> <FiSettings />  Setting</NavLink></li>
                                 <li className='text-primary  font-bold '><Link to='/dashboard'>
                                     <span className='flex items-center mr-8' onClick={handleSignOut} ><FaSignOutAlt className='mr-2' /> Logout</span>
                                 </Link></li>
                             </ul>
                         </div>
                    </ul>
                </div>


              {/* *************************** Navbar Logo************************************** */}


               <p className=" text-gray-700 normal-case text-2xl">CRM</p>
                  <p className="btn btn-ghost normal-case text-xl ml-10 text-teal-700 hidden">Welcome back, Android
                     <IoMdHand className='text-yellow-500 ml-2' />  </p> 

             </div>
             <div className="navbar-center hidden lg:flex ">
                 <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 rounded-box  flex flex-row justify-center items-center ">
                     {menuItem}
                     <span className='flex items-center  ml-48'>
                         <BsSearch className='mr-10' />
                         <IoIosNotifications className='text-2xl mr-8 text-teal-700' />
                     </span>

                     {/* *************************** User Profile Desktop Device************************************** */}

                     <div class="dropdown dropdown-end ">
                         <label tabindex="0" class="flex justify-between items-end  m-1">{profile}</label>
                         <ul tabindex="0" class="dropdown-content menu p-2 w-52">
                             <li className='text-primary mb-2 font-bold ml-14'><NavLink to='/profile'> <FaUserCircle /> Profile</NavLink></li>
                             <li className='text-primary mb-2 font-bold ml-14'><NavLink to='/profileEdit'> <FiSettings />  Setting</NavLink></li>
                             <li className='text-primary ml-14 font-bold mb-2'><Link to='/dashboard'>
                                 <span className='flex items-center mr-8' onClick={handleSignOut} ><FaSignOutAlt className='mr-2' /> Logout</span>
                             </Link></li>
                         </ul>
                     </div>

                 </ul>
             </div>

             {/* ********************************* Dashboard Nav-Icon ********************************* */}
             <div className='navbar-end'>
                 <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http:www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                 </label>
             </div>
         </div>

     );
 };

 export default Navbar;















  






