import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { MdDashboard } from 'react-icons/md';
// import { MdManageAccounts } from 'react-icons/md';
import { FaChartBar } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';
import { AiOutlineDown } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineInventory } from 'react-icons/md';
import { MdSwitchAccount } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdAdminPanelSettings } from 'react-icons/md';
import { MdLibraryAddCheck } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

import AllUser from './AllUser';
import useAdmin from '../../hooks/useAdmin';



const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [librarySubMenuOpen, setLibrarySubMenuOpen] = useState(false);
    const [adminSubMenuOpen, setAdminSubMenuOpen] = useState(false);
    const [crmSubMenuOpen, setCrmSubMenuOpen] = useState(false);
    const [HrmSubMenuOpen, setHrmSubMenuOpen] = useState(false);

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
                        <div>
                            <div className={`bg-info  h-full p-5 rounded-md duration-300 text-ternary  relative ${open ? "w-69" : "w-20"}`}>
                                <BsArrowRightShort className={`bg-white text-info  absolute -right-3 top-9 border border-info cursor-pointer text-3xl rounded-full ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} />

                                <div className={`flex items-center mt-14 ml-2 rounded-md bg-gray-300 py-2 px-4 ${!open ? "px-2.5" : "px-4"} `}>
                                    <BsSearch className={`text-gray-500 lext-lg float-left block cursor-pointer mr-2 ${!open && "mr-0"} `} />
                                    <input type='text' placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"} `} ></input>
                                </div>
                                <ul className='pt-2'>


                                    {/* ***************************** Dashboard menu CMR Start *********************************** */}
                                    <li onClick={() => setCrmSubMenuOpen(!crmSubMenuOpen)} className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                                        <div className='mr-4 w-full hover:bg-gray-50'>
                                            <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><MdAdminPanelSettings /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>CRM</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill /></span>
                                        </div>
                                    </li>
                                    {
                                        crmSubMenuOpen && <ul>

                                            <li className='text-gray-300 ml-8 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600    rounded-md mt-2  '><Link to='/dashboard/leadsEntry' className='w-full hover:bg-gray-300 '><MdKeyboardArrowRight />Leads Entry </Link></li>

                                            <li className='text-gray-300 ml-8 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600    rounded-md mt-2  '><Link to='/dashboard/followUp' className='w-full hover:bg-gray-300 '><MdKeyboardArrowRight />Follow Up </Link></li>

                                            <li className='text-gray-300 ml-8 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600    rounded-md mt-2  '><Link to='/dashboard/proposal' className='w-full hover:bg-gray-300 '><MdKeyboardArrowRight />Proposal</Link></li>
                                        </ul>
                                    }

                                    {/* ***********************Leads Entry ******************** */}


                                    {/* ***************************** Dashboard menu CMR End *********************************** */}
                                    {/* ***************************** Dashboard menu Accounts Start *********************************** */}
                                    <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                                        <div className='mr-4 w-full hover:bg-gray-50'>
                                            <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><MdSwitchAccount /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Accounts</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill /></span>
                                        </div>
                                    </li>

                                    {/* ***************************** Dashboard menu Accouts End *********************************** */}
                                    {/* ***************************** Dashboard menu Inventory Start *********************************** */}
                                    <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-800 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                                        <div className='mr-4 w-full hover:bg-gray-50'>
                                            <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><MdOutlineInventory /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Inventory</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill /></span>
                                        </div>
                                    </li>

                                    {/* ***************************** Dashboard menu Inventory End *********************************** */}
                                    {/* ***************************** Dashboard menu Sales Start *********************************** */}
                                    <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                                        <div className='mr-4'>
                                            <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><FaChartBar /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Sales</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill /></span>
                                        </div>
                                    </li>

                                    {/* ***************************** Dashboard menu Sales End *********************************** */}
                                    {/* ***************************** Dashboard menu HRM Start *********************************** */}
                                    <li onClick={() => setHrmSubMenuOpen(!HrmSubMenuOpen)} className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                                        <div className='mr-4'>
                                            <span className={`text-xl  hover:text-gray-900 block  ${!open ? "text-xl" : "ml-2"} `}><FaUsers /></span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>HRM</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill /></span>
                                        </div>
                                    </li>
                                    {
                                        HrmSubMenuOpen && (
                                            <ul>
                                                <li className='text-gray-300 ml-8 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600    rounded-md mt-2  '><Link to='/dashboard/profile' className='w-full hover:bg-gray-300 '><MdKeyboardArrowRight />Profile Entry</Link></li>
                                            </ul>
                                        )
                                    }

                                    {/* ***************************** Dashboard menu HRM End *********************************** */}


                                    {/* ***************************** Dashboard menu Setting ******************************************** */}
                                    <li onClick={() => setSubMenuOpen(!subMenuOpen)} className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                                        <div className='mr-4 w-full hover:bg-gray-50'>
                                            <span className={`text-xl  hover:text-gray-900 block  ${!open ? "text-xl" : "ml-2"} `}><FiSettings /></span>
                                            <span className={`text-base font-medium  flex-1  ${!open && "hidden"} `}>Setting</span>
                                            <span className={`text-base font-medium flex-1 ${!open && "hidden"} ${!subMenuOpen && "rotate-50"} `}><RiArrowDownSFill /></span>
                                        </div>
                                    </li>
                                    {/* ***************************** Dashboard SubMenu Library *************************************** */}

                                    {
                                        subMenuOpen && (
                                            <ul className='mt-2'>
                                                <li onClick={() => setLibrarySubMenuOpen(!librarySubMenuOpen)} className={`text-gray-300 text-sm ml-5 flex items-start   hover:bg-gray-50 hover:text-gray-400 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                                                    <div className='mr-4 w-full hover:bg-gray-50'>
                                                        <span className={`text-xl  hover:text-gray-900 block  ${!open ? "text-xl" : "ml-2"} `}><MdLibraryAddCheck /></span>
                                                        <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Library</span>
                                                        <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill /></span>
                                                    </div>
                                                </li>

                                                {/* ************************ Dashboard SubMenu Library all start ************************ */}

                                                {
                                                    librarySubMenuOpen && (
                                                        <ul>
                                                            <li className='text-gray-300 ml-14 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600    rounded-md mt-2  '><Link to='/dashboard/gender' className='w-full hover:bg-gray-300 '><MdKeyboardArrowRight />Gender </Link></li>

                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/religion'><MdKeyboardArrowRight />Religion</Link></li>

                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/maritalStatus'> <MdKeyboardArrowRight />Marital Status</Link></li>

                                                            <li className='text-gray-300  ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/bloodgroup'><MdKeyboardArrowRight />Blood Group</Link></li>

                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/location'><MdKeyboardArrowRight />Location</Link></li>

                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/division'><MdKeyboardArrowRight />Division</Link></li>
                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/district'><MdKeyboardArrowRight />District</Link></li>
                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/department'><MdKeyboardArrowRight />Department</Link></li>
                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/designation'><MdKeyboardArrowRight />Designation</Link></li>
                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/businessType'><MdKeyboardArrowRight />Business Type</Link></li>
                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/opportunity'><MdKeyboardArrowRight />Opportunity</Link></li>
                                                            <li className='text-gray-300 ml-14  text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2  '><Link className='w-full hover:bg-gray-300 ' to='/dashboard/followUpType'><MdKeyboardArrowRight />Follow Up Type</Link></li>
                                                        </ul>
                                                    )
                                                }

                                                {/* ***************** Dashboard Setting + SubMenu > Library all end *********************** */}
                                                {/* *****************Dashboard Setting + SubMenu > Admin >user start ******************** */}


                                                <li onClick={() => setAdminSubMenuOpen(!adminSubMenuOpen)} className={`text-gray-300 ml-5 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                                                    <div className='mr-4 w-full hover:bg-gray-50'>
                                                        <span className={`text-xl  hover:text-gray-900 block  ${!open ? "text-xl" : "ml-2"} `}><MdLibraryAddCheck /></span>
                                                        <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Admin</span>
                                                        <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill /></span>
                                                    </div>
                                                </li>


                                                {
                                                    adminSubMenuOpen && (

                                                        <ul>
                                                            {
                                                                admin && <li className='text-gray-300 ml-14 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2 '><Link className='w-full hover:bg-gray-50' to='/dashboard/allUser'> <AiOutlineUsergroupAdd />Role Manage</Link></li>

                                                            }

                                                            <li className='text-gray-300 ml-14 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600  rounded-md mt-2 '><Link className='w-full hover:bg-gray-50' to='/dashboard/gender'> <AiOutlineUsergroupAdd />User</Link></li>

                                                        </ul>

                                                    )
                                                }
                                                {/*  ***************Dashboard Setting + SubMenu > Admin >user end  *******************/}

                                            </ul>
                                        )
                                    }


                                </ul>


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