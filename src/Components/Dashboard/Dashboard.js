import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { MdDashboard } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { signOut } from 'firebase/auth';

// import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, ProSidebarProvider, MenuContext } from 'react-pro-sidebar';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);

    // const { collapseSidebar } = useProSidebar();

    if (loading) {
        return <Loading />
    }
    const handleSignOut = () => {
        console.log("hello", user);
        signOut(auth)
    }

    return (
        <div className='' >
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='font-bold text-3xl mt-8 ml-4'>Dashboard</h1>
                    <Outlet></Outlet>

                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side w-60">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto rounded-r-xl   bg-gray-200 text-base-content">
                        <li className='my-5'><NavLink to='/dashboard'> <MdDashboard /> Dashboard</NavLink></li>
                        <li className='text-primary font-bold'><NavLink to='/dashboard/messenger'><BsMessenger /> Messenger</NavLink></li>
                        <li className='text-primary font-bold'><NavLink to='/dashboard/calendar'><BsFillCalendarMinusFill /> Calendar </NavLink></li>
                        {/* ----------------Setting page start --------------------------------    */}
                        <div class="dropdown">                   
                            <p tabindex="0" className="text-primary font-bold ml-3 flex  items-center gap-4"> <FiSettings /> Settings<AiOutlineDown /></p>
                           

                            <ul tabindex="0" className="dropdown-content menu p-2 gap-2 rounded-lg w-60 shadow bg-gray-200  ">
                                <li className='text-primary  font-bold ml-8 '><NavLink to='/dashboard/settings'>
                                <MdKeyboardArrowRight/>Setting </NavLink></li>
                                <li className='text-primary ml-8 font-bold '><NavLink to='/dashboard/gender'>
                                 <MdKeyboardArrowRight/>Gender </NavLink></li>
                                <li className='text-primary ml-8 font-bold '><NavLink to='/dashboard/religion'>
                                   <MdKeyboardArrowRight/>Religion</NavLink></li>
                            </ul>
                        </div>

                        {/* ----------------Setting page start --------------------------------    */}

                        <li className='text-primary font-bold'><Link to='/dashboard'>
                            <span className='flex items-center mr-8' onClick={handleSignOut} ><FaSignOutAlt className='mr-2' /> Logout</span>
                        </Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

//     );
// };

export default Dashboard;