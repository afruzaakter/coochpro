import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import 'animate.css';

const LeadsEntry = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
    // const [count, setCount] = useState(0)
    // ---------------Contact person info start ------------------
    const [value, setValue] = useState([]);
    const handleAdd = () => {
        const abc = [...value, []]
        // setCount(count+1)
        setValue(abc)
    }
    const PersonHandleDelete = (i) => {
        const deletValue = [...value];
        deletValue.splice(i, 1)
        setValue(deletValue)

    }
    // ---------------Contact person info end ------------------

    // ---------------------type of business  get method -----------------
    const [businessed, setBusinessed] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/business')
            .then(res => res.json())
            .then(data => setBusinessed(data));

    }, []);
    // ---------------------Location get method -----------------
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/location')
            .then(res => res.json())
            .then(data => setLocations(data));

    }, []);
    // ---------------------Designation get method -----------------
    const [designations, setDesignations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/designation')
            .then(res => res.json())
            .then(data => setDesignations(data));

    }, []);
    // ---------------------Designation get method -----------------
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/department')
            .then(res => res.json())
            .then(data => setDepartments(data));

    }, []);

    //  -------------- All form submit button --------------
    const onSubmit = async (data) => {
        const url = 'http://localhost:5000/leads'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Data added successfully!!!')
                setUpdated(!updated)
                // console.log("contact person", data)
                reset()
            })

    }

    // ---------------------get method -----------------
    const [leads, setLeads] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/leads')
            .then(res => res.json())
            .then(data => setLeads(data));

    }, [updated]);
    console.log("leads data", leads)

    // ---------------------Delete method-----------
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/leads/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = leads.filter(lead => lead._id !== id)
                    setLeads(remaining);
                })

        }
    }
    return (
        <div className='m-3'>
            <div className='flex items-center g-3 ml-10'>
                <div className='h-5 w-5 bg-green-700  '></div>
                <h1 className='text-3xl font-bold ml-1'>Leads Entry </h1>
            </div>
            <div className='mt-5 '>
                {/* -------- Leads entry form start--------------------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>
                        {/* ----------------------------Form Left side start ---------------  */}
                        <div className='border-bottom border-b-2 rounded-lg border-gray-600 shadow-lg bg-slate-200 mb-3 p-3 px-10 '>

                            <div className='flex gap-8'>
                                {/* --------------------------- Input field Company Name---------------- */}
                                <div className="form-control">
                                    <label>Company Name</label>
                                    <input
                                        type="text"

                                        className={`input font-bold w-96  focus:outline-0 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.companyName && 'border-red-600 focus:border-red-600'}`}
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
                                {/* --------------------------- Input field Company Short Name---------------- */}
                                <div className="form-control ">
                                    <label>Company Short Name</label>
                                    <input
                                        type="text"

                                        className={`input font-bold  focus:outline-0 w-96 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500 login-container-input ${errors.companyShortName && 'border-red-600 focus:border-red-600'}`}
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
                                {/* --------------------------- Input field Type of Business ---------------- */}

                                <div className="form-control ">
                                    <label>Type of Business</label>
                                    <select {...register("business", {
                                        required: {
                                            value: true,
                                            message: "❌ Business Type is Required"
                                        }
                                    }
                                    )} className={`input  w-96 focus:outline-0 rounded-sm  border-gray-400 mt-1   focus:border-blue-500  login-container-input ${errors.business && 'focus:border-red-600 border-red-600 focus:ring-red-600'} `}>
                                        <option value='' >--Select Company Name--</option>
                                        {
                                            businessed.map((business) => <option>{business.business}</option>)
                                        }


                                    </select>
                                    <label className='label'>
                                        {errors.business?.type === 'required' && <span className="label-text-alt text-red-700">{errors.business.message}</span>}

                                    </label>
                                </div>

                            </div>
                            <div className='flex gap-8'>
                                {/* --------------------------- Input field Location ---------------- */}
                                {/* <div className="form-control  ">
                                    <label>Location</label>
                                    <select {...register("location", {
                                        required: {
                                            value: true,
                                            message: "❌ Location is Required"
                                        }
                                    }
                                    )} className={`input  w-96  focus:outline-0 rounded-sm  border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.location  && 'focus:border-red-600 border-red-600 focus:ring-red-600'}`}>

                                        <option value=' '>--Select Location--</option>
                                        {
                                            locations.map((location) => <option>{location.location}</option>)
                                        }


                                    </select>
                                    <label className='label'>
                                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-700">{errors.location.message}</span>}

                                    </label>

                                </div> */}

                                <div className="form-control ">
                                    <label>Location</label>
                                    <select {...register("location", {
                                        required: {
                                            value: true,
                                            message: "❌ Location is Required"
                                        }
                                    }
                                    )} className={`input  w-96 focus:outline-0 rounded-sm  border-gray-400 mt-1   focus:border-blue-500  login-container-input ${errors.location && 'focus:border-red-600 border-red-600 focus:ring-red-600'} `}>
                                        <option value='' >--Select Location--</option>
                                        {
                                            locations.map((location) => <option>{location.location}</option>)
                                        }


                                    </select>
                                    <label className='label'>
                                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-700">{errors.location.message}</span>}

                                    </label>
                                </div>

                                {/* -----------------------  Company Official Website Input field------------------ */}
                                <div className="form-control  ">
                                    <label>Company Website</label>
                                    <input
                                        type="text"

                                        className={`input font-bold w-96 focus:outline-0  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.website && 'border-red-600 focus:border-red-600'}`}
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

                                {/* -----------------------  Contact Number Input field------------------ */}
                                <div className="form-control ">
                                    <label>Contact Number</label>
                                    <input
                                        type="text"

                                        className={`input font-bold  focus:outline-0 w-96  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.contactNumber && 'border-red-600 focus:border-red-600'}`}
                                        {...register("contactNumber", {
                                            required: {
                                                value: true,
                                                message: "❌  Please Fillup  Input Field"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.contactNumber?.type === 'required' && <span className="label-text-alt text-red-700">{errors.contactNumber.message}</span>}

                                    </label>
                                </div>


                            </div>


                            {/* ----------------------------Form Left side End ---------------      */}
                            {/* ----------------------------Form Right side start---------------      */}


                            <div className='flex gap-8'>




                                {/* -----------------------  Address Line 1 Input field------------------ */}
                                <div className="form-control ">
                                    <label>Address Line 1</label>
                                    <input
                                        type="text"

                                        className={`input font-bold  focus:outline-0 w-96  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.address1 && 'border-red-600 focus:border-red-600'}`}
                                        {...register("address1", {
                                            required: {
                                                value: true,
                                                message: "❌  Please Fillup  Input Field"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address1?.type === 'required' && <span className="label-text-alt text-red-700">{errors.address1.message}</span>}

                                    </label>
                                </div>


                                {/* -----------------------   Address Line 2 Input field------------------ */}
                                <div className="form-control  ">
                                    <label>Address Line 2</label>
                                    <input
                                        type="text"

                                        className={`input font-bold  focus:outline-0 w-96  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.address2 && 'border-red-600 focus:border-red-600'}`}
                                        {...register("address2", {
                                            required: {
                                                value: true,
                                                message: "❌  Please Fillup  Input Field"
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address2?.type === 'required' && <span className="label-text-alt text-red-700">{errors.address2.message}</span>}

                                    </label>
                                </div>
                                {/* -----------------------  Company Postal Code Input field------------------ */}
                                <div className="form-control  ">
                                    <label>Postal Code</label>
                                    <input
                                        type="text"

                                        className={`input font-bold  focus:outline-0 w-96  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.postalcode && 'border-red-600 focus:border-red-600'}`}
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

                            </div>
                        </div>

                        {/* ----------------------- Contact Person info  Input field Start------------------ */}
                        <div className='borde border-b-2 rounded-lg border-gray-600 shadow-lg bg-slate-200 mb-5 p-3 px-10 '>
                            <span>Contact Person Information </span>
                            <button className='btn btn-primary' onClick={() => handleAdd()} >

                                +
                            </button>
                            {/* ---------------------Show contact person info start----------------------- */}
                            <div className='mb-10'>
                                {/* <h1>Contact Person {count}</h1> */}
                                <div className='flex gap-5 mt-4 border p-2 border-1 rounded-lg border-gray-400'>

                                    {/* ---------------- contact person info Full Name-------------------- */}
                                    <div className='form-control '>
                                        <label className='mb-2'>Full Name</label>
                                        <input
                                            type="text"

                                            className="input font-bold  w-60 focus:outline-0  rounded-sm border-gray-400    focus:border-blue-500  login-container-input"
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
                                    <div className='form-control '>
                                                    <label className='mb-2'>Designation</label>
                                                    <select {...register("designation", {
                                                        required: {
                                                            value: true,
                                                            message: "❌ Designation is Required"
                                                        }
                                                    }
                                                    )} className={`input w   w-52 font-bold  focus:outline-0 rounded-sm  border-gray-400  w-full focus:border-blue-500  login-container-input ${errors.designation  && 'focus:border-red-600 border-red-600 focus:ring-red-600'} `}>
                                                        <option value=''>--Select Designation--</option>
                                                        {
                                                            designations.map((designation) => <option>{designation.designation}</option>)
                                                        }


                                                    </select>
                                                    <label className='label'>
                                                        {errors.designation?.type === 'required' && <span className="label-text-alt text-red-700">{errors.designation.message}</span>}

                                                    </label>

                                                </div>
                                    {/* ---------------- contact person info Department -------------------- */}
                                    <div className='form-control '>
                                        <label className='mb-2'>Department</label>
                                        <select {...register("department")} className="input   focus:outline-0 rounded-sm font-bold  border-gray-400  w-52 focus:border-blue-500  login-container-input ">
                                            {
                                                departments.map((department) => <option>{department.department}</option>)
                                            }
                                        </select>

                                    </div>


                                    {/* ---------------- contact person info Mobile Number -------------------- */}
                                    <div className='form-control '>
                                        <label className='mb-2'>Mobile Number</label>
                                        <input
                                            type="text"

                                            className="input font-bold  focus:outline-0 w-48 rounded-sm border-gray-400    focus:border-blue-500  login-container-input"
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
                                    <div className='form-control '>
                                        <label className='mb-2'>Email</label>
                                        <input
                                            type="text"

                                            className="input font-bold  focus:outline-0 w-52 rounded-sm border-gray-400    focus:border-blue-500  login-container-input"
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
                                    {/* <div>
                                                    <button className=' mt-8 outline-2 btn hover:btn-none btn-outline border-gray-400 ' onClick={() => PersonHandleDelete(i)}>❌</button>
                                                </div> */}

                                </div>
                            </div>
                            {/* ---------------------Show contact person info end----------------------- */}
                            <>
                                {/* <span>Contact Person Information </span>
                                <button className='btn btn-primary' onClick={() => handleAdd()} >

                                    +
                                </button> */}
                                {value.map((data, i) => {
                                    return (
                                        <div>
                                            {/* <h1>Contact Person {count}</h1> */}
                                            <div className='flex gap-5 mt-4 border p-2 border-1 rounded-lg border-gray-400 mb-6'>

                                                {/* ---------------- contact person info Full Name-------------------- */}
                                                <div className='form-control  '>
                                                    <label className='mb-2'>Full Name</label>
                                                    <input
                                                        type="text"

                                                        className="input font-bold  w-60 focus:outline-0  rounded-sm border-gray-400    focus:border-blue-500  login-container-input"
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
                                                <div className='form-control '>
                                                    <label className='mb-2'>Designation</label>
                                                    <select {...register("designation", {
                                                        required: {
                                                            value: true,
                                                            message: "❌ Designation is Required"
                                                        }
                                                    }
                                                    )} className={`input w   w-52 font-bold  focus:outline-0 rounded-sm  border-gray-400  w-full focus:border-blue-500  login-container-input ${errors.designation  && 'focus:border-red-600 border-red-600 focus:ring-red-600'} `}>
                                                        <option value=''>--Select Designation--</option>
                                                        {
                                                            designations.map((designation) => <option>{designation.designation}</option>)
                                                        }


                                                    </select>
                                                    <label className='label'>
                                                        {errors.designation?.type === 'required' && <span className="label-text-alt text-red-700">{errors.designation.message}</span>}

                                                    </label>

                                                </div>
                                                {/* ---------------- contact person info Department -------------------- */}
                                                <div className='form-control '>
                                                    <label className='mb-2'>Department</label>
                                                    <select {...register("department")} className="input   focus:outline-0 rounded-sm font-bold  border-gray-400  w-52 focus:border-blue-500  login-container-input ">
                                                        {
                                                            departments.map((department) => <option>{department.department}</option>)
                                                        }
                                                    </select>

                                                </div>


                                                {/* ---------------- contact person info Mobile Number -------------------- */}
                                                <div className='form-control '>
                                                    <label className='mb-2'>Mobile Number</label>
                                                    <input
                                                        type="text"

                                                        className="input font-bold  focus:outline-0 w-48 rounded-sm border-gray-400    focus:border-blue-500  login-container-input"
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
                                                <div className='form-control '>
                                                    <label className='mb-2'>Email</label>
                                                    <input
                                                        type="text"

                                                        className="input font-bold  focus:outline-0 w-52 rounded-sm border-gray-400    focus:border-blue-500  login-container-input"
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
                                                <div>
                                                    <button className=' mt-8 outline-2 btn hover:btn-none btn-outline border-gray-400 ' onClick={() => PersonHandleDelete(i)}>❌</button>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        </div>

                        {/* ----------------------- Contact Person info  Input field End------------------ */}



                        {/* ----------------------------Form Right side end ---------------      */}



                    </div>
                    {/* ---------------------Submit Field -------------------------- */}
                    <div className='flex gap-3 justify-center items-center mt-16'>
                        <input className=' animate_animated animate__fadeInLeft btn input-bordered   max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:border-0 hover:text-white ' type="submit" value='Submit' />
                        <Link to='/dashboard' className='  btn btn-outline border-gray-500 input-bordered input-primary  max-w-xs cursor-pointer font-bold uppercase  hover:text-white  '> Cancel</Link>

                    </div>
                </form>
                {/* -------- Leads entry form end--------------------- */}
                <div>

                </div>
            </div>
            {/* ------------------ Form end-------------------------- */}

            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Company Name</th>
                            <th>Company Short Name</th>
                            <th>Full Name</th>
                            <th>Designation</th>
                            {/* <th>Department</th> */}
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            leads?.slice(0).reverse().map((lead, index) =>
                                <tr className='text-sm'>
                                    <th>{index + 1}</th>
                                    <td>{lead.companyName}</td>
                                    <td>{lead.companyShortName}</td>
                                    <td>{lead.fullName}</td>
                                    <td>{lead.designation}</td>
                                    {/* <td>{lead.department}</td> */}
                                    <td>{lead.mobileNumber}</td>
                                    <td>{lead.email}</td>
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/leadEntryEdit/${lead._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(lead._id)}><MdDelete /></button>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <ToastContainer />
            </div>
        </div>


    );
};

export default LeadsEntry;