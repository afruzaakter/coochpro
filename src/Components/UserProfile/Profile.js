import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    return (
       <div className='ml-10 mt-5'>
         <div class=" bg-base-100  lg:flex justify-center items-center gap-16">
           <div> 
           <h1 className='text-2xl  font-bold ml-3'>My Profile</h1>
            {/* <figure><img className='w-44 h-44' src={user.photoURL} alt="user photo" alt="userProfile" /></figure> */}
            </div>
            <div class="card w-96 bg-gray-200 shadow-xl">
                <div class="card-body">
                    <h2>Name:</h2>
                    <h2>{user.displayName}</h2>
                    <h2>Email Address:</h2>
                    <h2>{user.email}</h2>
                    
                    <div class="card-actions justify-start">
                        <button class="btn"> <Link to="/profileEdit">Edit profile</Link> </button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Profile;