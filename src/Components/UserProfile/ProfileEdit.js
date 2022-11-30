import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
const ProfileEdit = () => {
    return (
        <div className='flex'>
        <div>
            <div className='bg-gray-500 pt-8 w-72 relative'>
              <MdKeyboardArrowRight className='bg-white text-primary absolute -right-3 top-9 border border-primary cursor-pointer text-3xl rounded-full'/>
            </div>
        </div>


        <div>Home</div>

    </div>
    );
};

export default ProfileEdit;