import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillPlusSquare } from 'react-icons/ai';
import { toast } from 'react-toastify';

const ContactPerson = () => {
    const [val, setVal] = useState([]);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const[updated,setUpdated]= useState(false)
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    // const handleChange = (onChangeValue, i) => {
    //     const inputdata = [...val]
    //     inputdata[i] = onChangeValue.target.value
    //     setVal(inputdata)
    //     console.log("data", val)
    // }


    const PersonHandleDelete = (i) => {
        const deletVal = [...val];
        deletVal.splice(i, 1)
        setVal(deletVal)

    }

    return (
        <>
            <span>Contact Person Information </span>
            <button className='btn btn-primary' onClick={() => handleAdd()} >
                {/* <AiFillPlusSquare/>  */}
                +
            </button>
            {val.map((data, i) => {
                return (
                    <div className='flex gap-3'>
                        <div>
                            {/* ---------------- contact person info Full Name-------------------- */}
                            <div >
                                <input
                                    type="text"
                                    placeholder='Full Name'
                                    className="input font-bold w-48 focus:outline-0  rounded-sm border-gray-400 mt-1   focus:border-blue-500  login-container-input"
                                    {...register("fullName", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.fullName?.type === 'required' && <span className="label-text-alt text-red-700">{errors.fullName.message}</span>}

                                </label>
                            </div>
                            {/* ---------------- contact person info Designation -------------------- */}
                            <div >
                                <input
                                    type="text"
                                    placeholder='Designation'
                                    className="input font-bold w-48 focus:outline-0  rounded-sm border-gray-400 mt-1   focus:border-blue-500  login-container-input"
                                    {...register("designation", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.designation?.type === 'required' && <span className="label-text-alt text-red-700">{errors.designation.message}</span>}

                                </label>
                            </div>
                            {/* ---------------- contact person info Department -------------------- */}
                            <div >
                                <input
                                    type="text"
                                    placeholder='Department'
                                    className="input font-bold w-48 focus:outline-0  rounded-sm border-gray-400 mt-1   focus:border-blue-500  login-container-input"
                                    {...register("department", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.department?.type === 'required' && <span className="label-text-alt text-red-700">{errors.department.message}</span>}

                                </label>
                            </div>
                        </div>
                        <div>
                            {/* ---------------- contact person info Mobile Number -------------------- */}
                            <div >
                                <input
                                    type="text"
                                    placeholder='Mobile Number'
                                    className="input font-bold  focus:outline-0 w-48 rounded-sm border-gray-400 mt-1   focus:border-blue-500  login-container-input"
                                    {...register("mobileNumber", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.mobileNumber?.type === 'required' && <span className="label-text-alt text-red-700">{errors.mobileNumber.message}</span>}

                                </label>
                            </div>


                            {/* ---------------- contact person info Email -------------------- */}
                            <div >
                                <input
                                    type="text"
                                    placeholder='Email'
                                    className="input font-bold  focus:outline-0 w-48 rounded-sm border-gray-400 mt-1   focus:border-blue-500  login-container-input"
                                    {...register("companyShortName", {
                                        required: {
                                            value: true,
                                            message: "❌  Please Fillup  Input Field"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.companyShortName?.type === 'required' && <span className="label-text-alt text-red-700">{errors.companyShortName.message}</span>}

                                </label>
                            </div>
                            <div>
                                <button className=' outline-2 btn hover:btn-none btn-outline border-gray-400 ' onClick={() => PersonHandleDelete(i)}>❌</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default ContactPerson;