import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { MdDashboard } from 'react-icons/md';
// import { MdManageAccounts } from 'react-icons/md';
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdAdminPanelSettings } from 'react-icons/md';
import { MdLibraryAddCheck } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

// import AllUser from './AllUser';
import useAdmin from '../../hooks/useAdmin';



const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [LibrarySubMenuOpen, setLibrarySubMenuOpen] = useState(false);

    if (loading) {
        return <Loading />
    }


    return (
        <div className='' >
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='font-bold text-3xl mt-8 ml-4'>Dashboard</h1>
                    <Outlet></Outlet>


                </div>


                <div className="drawer-side ">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto rounded-r-xl   bg-gray-200 text-base-content">
                        {/* <li className='my-5 mb-2'><NavLink to='/dashboard'> <MdDashboard /> Dashboard</NavLink></li> */}

                        {/* {
                            admin && <li className='text-primary mb-2 font-bold'><NavLink to='/dashboard/allUser'> <AiOutlineUsergroupAdd /> All Users</NavLink></li>

                        }                        */}
                        

                        {/* { admin && <li className='text-primary font-bold mb-2'><NavLink to='/dashboard/calendar'><BsFillCalendarMinusFill /> Calendar </NavLink></li>} */}




                        {/* <div className='flex'> */}
                        <div>
                            <div className={`bg-info h-screen p-5 rounded-md duration-300 text-ternary  relative ${open ? "w-72" : "w-20"}`}>
                                <BsArrowRightShort className={`bg-white text-info  absolute -right-3 top-9 border border-info cursor-pointer text-3xl rounded-full ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} />

                                <div className={`flex items-center mt-14 ml-2 rounded-md bg-gray-300 py-2 px-4 ${!open ? "px-2.5" : "px-4"} `}>
                                    <BsSearch className={`text-gray-500 lext-lg float-left block cursor-pointer mr-2 ${!open && "mr-0"} `} />
                                    <input type='text' placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"} `} ></input>
                                </div>
                                <ul className='pt-2'>

                                    {/* ***************************** Dashboard menu Setting ******************************************** */}
                                    <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                                        <div className='mr-4'>
                                            <span className={`text-xl  hover:text-gray-900 block  ${!open ? "text-xl" : "ml-2"} `}><FiSettings /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Setting</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} ${!subMenuOpen && "rotate-50"} `}><MdKeyboardArrowRight onClick={() => setSubMenuOpen(!subMenuOpen)} /></span>
                                        </div>
                                    </li>
                                    {/* ***************************** Dashboard SubMenu Library *************************************** */}

                                    {
                                        subMenuOpen && (
                                            <ul className='mt-2'>
                                                <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                                                    <div className='mr-4'>
                                                        <span className={`text-xl  hover:text-gray-900 block  ${!open ? "text-xl" : "ml-2"} `}><MdLibraryAddCheck /></span>
                                                        <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Library</span>
                                                        <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><MdKeyboardArrowRight onClick={() => setLibrarySubMenuOpen(!LibrarySubMenuOpen)} /></span>
                                                    </div>
                                                </li>

                                                {/* ************************ Dashboard SubMenu Library all *************************** */}

                                                {
                                                    LibrarySubMenuOpen && (
                                                        <ul>
                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400    rounded-md mt-2  '><Link to='/dashboard/gender'>
                                                                <MdKeyboardArrowRight />Gender </Link></li>

                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/religion'>
                                                                <MdKeyboardArrowRight />Religion</Link></li>

                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/maritalStatus'>
                                                                <MdKeyboardArrowRight />Marital Status</Link></li>

                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/bloodgroup'>
                                                                <MdKeyboardArrowRight />Blood Group</Link></li>

                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/location'>
                                                                <MdKeyboardArrowRight />Location</Link></li>

                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/division'>
                                                                <MdKeyboardArrowRight />Division</Link></li>
                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/district'>
                                                                <MdKeyboardArrowRight />District</Link></li>
                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/department'>
                                                                <MdKeyboardArrowRight />Department</Link></li>
                                                            <li className='text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400  rounded-md mt-2  '><Link to='/dashboard/designation'>
                                                                <MdKeyboardArrowRight />Designation</Link></li>
                                                        </ul>
                                                    )
                                                }
                                            </ul>
                                        )
                                    }

                                    {/* ***************************** Dashboard menu Admin ******************************************** */}
                                    <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                                        <div className='mr-4'>
                                            <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><MdAdminPanelSettings /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Admin</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><MdKeyboardArrowRight onClick={() => setSubMenuOpen(!subMenuOpen)} /></span>
                                        </div>
                                    </li>



                                </ul>

                                {/* <ul className='pt-2'>

                                    <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                                        <div className='mr-4'>
                                            <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><FiSettings /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Setting</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><MdKeyboardArrowRight onClick={() => setSubMenuOpen(!subMenuOpen)} /></span>
                                        </div>
                                    </li>

                                    {
                                        subMenuOpen && (
                                            <ul>

                                                <li className='text-primary ml-8 font-bold '><NavLink to='/dashboard/gender'>
                                                    <MdKeyboardArrowRight />Gender </NavLink></li>
                                            </ul>
                                        )


                                    }



                                </ul> */}
                            </div>



                        </div>




                        {/* </div> */}




                    </ul>

                </div>


            </div>

        </div>
    );
};

//     );
// };

export default Dashboard;