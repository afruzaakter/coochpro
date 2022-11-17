import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../Images/notfound.png'

const NotFound = () => {
    return (
        <div className='text-center  mb-5'>
            <div className='w-full items-center justify-center flex'>
              <img className='w-96' src={notfound} alt=""/>
            </div>
            <div>
                <h>Try Search again or go to Home Page</h>
                <Link  to="/dashboard" className='btn btn-secondary ml-4'>Home Page</Link>
            </div>
        </div>
    );
};

export default NotFound;