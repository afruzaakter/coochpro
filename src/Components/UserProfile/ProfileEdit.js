import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
// import { MdManageAccounts } from 'react-icons/md';
import { FaChartBar } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';
import { AiOutlineDown } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FcSalesPerformance } from 'react-icons/fc';
import { MdOutlineInventory } from 'react-icons/md';
import { MdSwitchAccount } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdAdminPanelSettings } from 'react-icons/md';
import { MdLibraryAddCheck } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const ProfileEdit = () => {
    const [user, loading] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    // const [librarySubMenuOpen, setLibrarySubMenuOpen] = useState(false);
    // const [adminSubMenuOpen, setAdminSubMenuOpen] = useState(false);
    const [cmrSubMenuOpen, setCmrSubMenuOpen] = useState(false);
    return (
        <div className='flex'>
            <div>
                {/* <div className='bg-gray-200 h-screen rounded-lg pt-8 w-72 relative'>
              <MdKeyboardArrowRight className='bg-white text-primary absolute -right-3 top-9 border border-primary cursor-pointer text-3xl rounded-full'/>
            </div> */}

                <div className="bg-info h-screen p-5 rounded-md duration-300 text-ternary  relative w-69">
                    <BsArrowRightShort className={`bg-white text-info  absolute -right-3 top-9 border border-info cursor-pointer text-3xl rounded-full ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} />

                    {/* <div className={`flex items-center mt-14 ml-2 rounded-md bg-gray-300 py-2 px-4 ${!open ? "px-2.5" : "px-4"} `}>
                        <BsSearch className={`text-gray-500 lext-lg float-left block cursor-pointer mr-2 ${!open && "mr-0"} `} />
                        <input type='text' placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"} `} ></input>
                    </div> */}
                    <ul className='pt-2'>

                        {/* ***************************** Dashboard menu Setting ******************************************** */}
                        <li onClick={() => setSubMenuOpen(!subMenuOpen)} className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-400 border-b   rounded-md mt-2 ${!open && "mr-0"} `}>
                            <div className='mr-4 w-full hover:bg-gray-50'>
                                <span className={`text-xl  hover:text-gray-900 block  ${!open ? "text-xl" : "ml-2"} `}><FiSettings /></span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Setting</span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} ${!subMenuOpen && "rotate-50"} `}><RiArrowDownSFill /></span>
                            </div>
                        </li>
                        {/* ***************************** Dashboard SubMenu Library *************************************** */}



                        {/* ***************************** Dashboard menu CMR Start *********************************** */}
                        <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                            <div className='mr-4 w-full hover:bg-gray-50'>
                                <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><MdAdminPanelSettings /></span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>CRM</span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill onClick={() => setCmrSubMenuOpen(!cmrSubMenuOpen)} /></span>
                            </div>
                        </li>

                        {/* ***************************** Dashboard menu CMR End *********************************** */}
                        {/* ***************************** Dashboard menu Accounts Start *********************************** */}
                        <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                            <div className='mr-4 w-full hover:bg-gray-50'>
                                <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><MdSwitchAccount /></span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Accounts</span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill onClick={() => setCmrSubMenuOpen(!cmrSubMenuOpen)} /></span>
                            </div>
                        </li>

                        {/* ***************************** Dashboard menu Accouts End *********************************** */}
                        {/* ***************************** Dashboard menu Inventory Start *********************************** */}
                        <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                            <div className='mr-4 w-full hover:bg-gray-50'>
                                <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><MdOutlineInventory /></span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Inventory</span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill onClick={() => setCmrSubMenuOpen(!cmrSubMenuOpen)} /></span>
                            </div>
                        </li>

                        {/* ***************************** Dashboard menu Inventory End *********************************** */}
                        {/* ***************************** Dashboard menu Sales Start *********************************** */}
                        <li className={`text-gray-300 text-sm  flex items-start   hover:bg-gray-50 hover:text-gray-600 border-b   rounded-md mt-4 ${!open && "mr-0"} `}>
                            <div className='mr-4'>
                                <span className={`text-xl  hover:text-gray-700 block  ${!open ? "text-xl" : "ml-2"} `}><FaChartBar className='text-gray-300' /></span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}>Sales</span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"} `}><RiArrowDownSFill onClick={() => setCmrSubMenuOpen(!cmrSubMenuOpen)} /></span>
                            </div>
                        </li>

                        {/* ***************************** Dashboard menu Sales End *********************************** */}


                    </ul>


                </div>
            </div>


            <div>Home</div>

        </div>
    );
};

export default ProfileEdit;