import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LeadsEntry = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
                console.log("leads data",data)
    }
    return (
        <div className='m-3'>
            <div className='flex items-center g-3'>
                <div className='h-4 w-4 bg-green-700  '></div>
                <h1 className='text-xl font-bold ml-1'>Registration Form</h1>
            </div>
            <div>
                <p className='text-sm'>When you have access to Support Portal you can raise and manage you cases. To complete your registration request please provide details below</p>
            </div>

            <div className='mt-5'>
                {/* -------- Leads entry form start--------------------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex'>
                        {/* ----------------------------Form Left side start ---------------  */}
                        <div>
                            <div className='flex items-center gap-2 w-3/4'>
                                {/* -----------------------leads entry email address Field -----------------------*/}
                                <div className="form-control w-full max-w-xs">
                                    <label>Email Address</label>
                                    <input
                                        type="email"

                                        className="input font-bold focus:outline-0 bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500 max-w-xs login-container-input"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "❌  Please Fillup  Input Field"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                                    </label>
                                </div>

                                <div className="form-control mt-6 w-80 max-w-xs">

                                    <input
                                        type="text"
                                        placeholder='Check for Sophos ID'
                                        className="input  focus:outline-0 bg-gray-200 border-gray-400  mt-1  w-full focus:border-blue-500 max-w-xs login-container-input"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "❌  Please Fillup  Input Field"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                                    </label>
                                </div>
                            </div>
                            {/* --------------------------- Input field First Name---------------- */}
                            <div className="form-control w-3/4 ">
                                <label>First Name</label>
                                <input
                                    type="text"

                                    className="input font-bold focus:outline-0  bg-gray-200 border-gray-400  mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-700">{errors.firstName.message}</span>}

                                </label>
                            </div>
                            {/* --------------------------- Input field Last Name---------------- */}
                            <div className="form-control w-3/4 ">
                                <label>Last Name</label>
                                <input
                                    type="text"

                                    className="input font-bold  focus:outline-0 bg-gray-200 border-gray-400 mt-2  w-full focus:border-blue-500  login-container-input"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-700">{errors.lastName.message}</span>}

                                </label>
                            </div>
                            {/* --------------------------- Input field Phone Number ---------------- */}
                            <div className="form-control w-3/4 ">
                                <label>Phone Number</label>
                                <input
                                    type="text"

                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-700">{errors.phone.message}</span>}

                                </label>
                            </div>
                            {/* --------------------------- Input field Preferred Language ---------------- */}
                            <div className="form-control w-3/4 ">
                                <label>Preferred Language</label>
                                <input
                                    type="text"
                                    placeholder='English'
                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("language", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.language?.type === 'required' && <span className="label-text-alt text-red-700">{errors.language.message}</span>}

                                </label>
                            </div>
                            {/* --------------------------- Input field License or Serial Number ---------------- */}
                            <div className="form-control w-3/4 ">
                                <label>License or Serial Number</label>
                                <input
                                    type="text"

                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("serialNumber", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.serialNumber?.type === 'required' && <span className="label-text-alt text-red-700">{errors.serialNumber.message}</span>}

                                </label>
                            </div>
                        </div>
                        {/* ----------------------------Form Left side End ---------------      */}
                        {/* ----------------------------Form Right side start---------------      */}
                        <div className='w-96'>
                            {/* -----------------------  Company Name Input field------------------ */}
                            <div className="form-control w-3/4 ">
                                <label>Company Name</label>
                                <input
                                    type="text"

                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("companyName", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.companyName?.type === 'required' && <span className="label-text-alt text-red-700">{errors.companyName.message}</span>}

                                </label>
                            </div>
                            {/* -----------------------  Company Street Address Input field------------------ */}
                            <div className="form-control w-3/4 ">
                                <label>Company Street Address</label>
                                <input
                                    type="text"

                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("streetAddress", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.streetAddress?.type === 'required' && <span className="label-text-alt text-red-700">{errors.streetAddress.message}</span>}

                                </label>
                            </div>

                            {/* -----------------------  Company Postal Code Input field------------------ */}
                            <div className="form-control w-3/4 ">
                                <label>Company Postal Code</label>
                                <input
                                    type="text"

                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("postalcode", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.postalcode?.type === 'required' && <span className="label-text-alt text-red-700">{errors.postalcode.message}</span>}

                                </label>
                            </div>
                            {/* -----------------------  Company Official Website Input field------------------ */}
                            <div className="form-control w-3/4 ">
                                <label>Official Website</label>
                                <input
                                    type="text"

                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("website", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.website?.type === 'required' && <span className="label-text-alt text-red-700">{errors.website.message}</span>}

                                </label>
                            </div>
                            {/* -----------------------  Communication Preference Input field------------------ */}
                            <div className="form-control w-3/4 ">
                                <label>Communication Preference</label>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("comPreference", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.comPreference?.type === 'required' && <span className="label-text-alt text-red-700">{errors.comPreference.message}</span>}

                                </label>
                            </div>
                            {/* ----------------------- I am  Input field------------------ */}
                            <div className="form-control w-3/4 ">
                                <label>I am...</label>
                                <input
                                    type="text"
                                    placeholder='Customer'
                                    className="input font-bold  focus:outline-0  bg-gray-200 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("customer", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.customer?.type === 'required' && <span className="label-text-alt text-red-700">{errors.customer.message}</span>}

                                </label>
                            </div>


                        </div>
                        {/* ----------------------------Form Right side end ---------------      */}



                    </div>
                    {/* ---------------------Submit Field -------------------------- */}
                    <div className='flex gap-3 justify-center items-center mt-10'>
                        <input className='btn input-bordered   max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:border-0 hover:text-white ' type="submit" value='Submit' />
                        <Link to='/dashboard' className='btn btn-outline border-gray-500 input-bordered input-primary  max-w-xs cursor-pointer font-bold uppercase  hover:text-white  '> Cancel</Link>

                    </div>
                </form>
                {/* -------- Leads entry form end--------------------- */}
                <div>

                </div>
            </div>
            {/* ------------------ Form end-------------------------- */}
        </div>
    );
};

export default LeadsEntry;