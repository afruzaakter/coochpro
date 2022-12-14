import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const LeadEntryEdit = () => {
    // const [updated, setUpdated] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const {id} = useParams()
    const [leads, setLeads] = useState([]);

      // ---------------Contact person info start ------------------
      const [value, setValue] = useState([]);
      const handleAdd = () => {
          const abc = [...value, []]
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
 

    useEffect(() => {
        const url = `http://localhost:5000/leads/${id}`
        //   console.log("purchase id",url);
        fetch(url)
            .then(res => res.json())
            .then(data => setLeads(data))
    }, [])


    console.log("leads data", leads)

    const onSubmit = (data) =>{

       
        const url = `http://localhost:5000/leads/${id}`;

        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Users Update Successfully !!!');
                reset();
            })
        navigate('/dashboard/leadsEntry')

    }
    

    return (
        <div>
           <div className="card  bg-base-100 shadow-xl  ">
            <div className="card-body">
            <h2 className=" text-xl font-bold">Leads Entry</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className=''>
                        {/* ----------------------------Form Left side start ---------------  */}
                        <div className='border-bottom border-b-2 rounded-lg border-gray-600 shadow-lg bg-slate-200 mb-3 p-3 px-10 '>

                            <div className='flex gap-8'>
                                {/* --------------------------- Input field Company Name---------------- */}
                                <div className="form-control ">
                                    <label>Company Name</label>
                                    <input
                                        type="text"

                                        className="input font-bold w-96  focus:outline-0 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
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

                                        className="input font-bold  focus:outline-0 w-96 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
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
                                    <select {...register("business")} className="input font-bold w-96 focus:outline-0 rounded-sm  border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ">
                                        {
                                            businessed.map((business) => <option>{business.business}</option>)
                                        }


                                    </select>

                                </div>
                            </div>
                            <div className='flex gap-8'>
                                {/* --------------------------- Input field Location ---------------- */}
                                <div className="form-control  ">
                                    <label>Location</label>
                                    <select {...register("location")} className="input font-bold w-96  focus:outline-0 rounded-sm  border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ">
                                        {
                                            locations.map((location) => <option>{location.location}</option>)
                                        }


                                    </select>

                                </div>


                                {/* -----------------------  Company Official Website Input field------------------ */}
                                <div className="form-control  ">
                                    <label>Company Website</label>
                                    <input
                                        type="text"

                                        className="input font-bold w-96 focus:outline-0  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
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

                                    className="input font-bold  focus:outline-0 w-96  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
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

                                        className="input font-bold  focus:outline-0 rounded-sm w-96 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
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

                                        className="input font-bold  focus:outline-0 rounded-sm w-96 border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
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

                                        className="input font-bold w-96 focus:outline-0  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
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
                        <div className='borde border-b-2 rounded-lg border-gray-600 shadow-lg bg-slate-200 mb-3 p-3 px-10 '>
                            <>
                                <span>Contact Person Information </span>
                                <button className='btn btn-primary' onClick={() => handleAdd()} >
                                    
                                    +
                                </button>
                                {value.map((data, i) => {
                                    return (
                                        <div>
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
                                                <select {...register("designation")} className="input w   w-52 font-bold  focus:outline-0 rounded-sm  border-gray-400  w-full focus:border-blue-500  login-container-input ">
                                                    {
                                                        designations.map((designation) => <option>{designation.designation}</option>)
                                                    }


                                                </select>

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
                    <div className='flex gap-3 justify-center items-center mt-6'>
                        <input className='btn input-bordered   max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:border-0 hover:text-white ' type="submit" value='Update' />
                        <Link to='/dashboard/leadsEntry' className='btn btn-outline border-gray-500 input-bordered input-primary  max-w-xs cursor-pointer font-bold uppercase  hover:text-white  '> Back</Link>

                    </div>
                </form>
            </div>          
        </div>
        </div>
    );
};

export default LeadEntryEdit;