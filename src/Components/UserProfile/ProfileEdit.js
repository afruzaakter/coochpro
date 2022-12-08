import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
const ProfileEdit = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user)
    // const [admin] = useAdmin(user);
    const [open, setOpen] = useState(true);
  
   
    return (
        <div className='flex'>
            <div>
                {/* <div className='bg-gray-200 h-screen rounded-lg pt-8 w-72 relative'>
              <MdKeyboardArrowRight className='bg-white text-primary absolute -right-3 top-9 border border-primary cursor-pointer text-3xl rounded-full'/>
            </div> */}

                <div className="bg-gray-200 h-screen p-5 rounded-md duration-300 text-ternary  relative w-69">
                    {/* <BsArrowRightShort className={`bg-white text-info  absolute -right-3 top-9 border border-info cursor-pointer text-3xl rounded-full ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} /> */}

                    <div className={`flex items-center  ml-2 rounded-md  py-2 px-4 ${!open ? "px-2.5" : "px-4"} `}>
                        <h1 className='text-4xl font-bold'>Setting</h1>
                    </div>
                    <ul className='pt-1'>

                        {/* ***************************** Dashboard menu Setting ******************************************** */}
                       


                        <li className='flex items-center justify-center font-bold gap-2 text-xl mt-5 '>User Name <IoIosArrowForward className='flex items-center justify-center' /> </li>

                        <li className='flex items-center justify-center font-bold gap-2 text-xl mt-5 '>User Name <IoIosArrowForward className='flex items-center justify-center' /> </li>

                        {/* ***************************** Dashboard SubMenu Library *************************************** */}




                        {/* ***************************** Dashboard menu Sales End *********************************** */}


                    </ul>


                </div>


            </div>


            <div >
                <div className='ml-48 text-2xl font-bold border-b border '>Accounts Setting</div>

                <div className='flex gap-96  items-center '>
                    <div>
                        <h1 className='mt-14 ml-48 text-xl font-bold'>User Name :</h1>
                        <h1 className=' ml-48'>{user.displayName}</h1>
                    </div>
                    <div>
                        <button className='btn  mt-10'>Change User Name</button>
                    </div>
                </div>

                <div className='flex gap-72  items-center '>
                    <div>
                        <h1 className='mt-14 ml-48 text-xl font-bold'>Email :</h1>
                        <h1 className=' ml-48'>{user.email}</h1>
                    </div>
                    <div>
                        <button className='btn  mt-10'>Change Email</button>
                    </div>
                </div>
                <div className='flex gap-72  items-center '>
                    <div>
                        <h1 className='mt-14 ml-48 text-xl font-bold'>Password :</h1>
                        <h1 className=' ml-48'>{user.password}</h1>
                    </div>
                    <div>
                        <button className='btn  mt-10'>Change Password</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileEdit;