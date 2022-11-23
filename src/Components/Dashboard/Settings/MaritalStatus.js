import React from 'react';
import { ToastContainer } from 'react-toastify';

const MaritalStatus = () => {
    const handleAddData =(e) =>{
        e.preventDefault();
        
    }
    return (
        <div className='flex justify-start ml-28 items-start mt-16 gap-14'>
        <div className="card w-96 bg-gray-200 ">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">Marital Status</h2>
                <form onSubmit={handleAddData}>
                    {/* -----------------------Male Field ------------------------------ */}
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Gender"
                            name="gender"
                            className="input input-bordered font-bold w-full max-w-xs login-container-input"

                        />

                    </div>


                    <div className="flex justify-between mt-10">
                        <input className='input input-bordered input-primary max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Edit' />
                        
                    </div>

                </form>
            </div>
        </div>



        <ToastContainer />
    </div>
    );
};

export default MaritalStatus;