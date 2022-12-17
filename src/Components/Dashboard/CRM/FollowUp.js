import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';


const FollowUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false);
     // ---------------------type of business  get method -----------------
     const [leads, setLeads] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/leads')
             .then(res => res.json())
             .then(data => setLeads(data));
 
     }, []);
     // --------------------- Follow Up  type   get method -----------------
     const [followUpTypes, setFollowUpTypess] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/followUpType')
             .then(res => res.json())
             .then(data => setFollowUpTypess(data));
 
     }, []);
     // --------------------- Opportunity  get method -----------------
     const [opportunitys, setOpportunitys] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/opportunity')
             .then(res => res.json())
             .then(data => setOpportunitys(data));
 
     }, []);
     
     // --------------------- time  get method -----------------
     const [genders, setGenders] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/gender')
             .then(res => res.json())
             .then(data => setGenders(data));
 
     }, []);
     // --------------------- followup  Delete method -----------------
     const handleDelete= ()=>{

     }
     // --------------------- followup  get method -----------------
     const [followUps, setFollowUps] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/followUp')
             .then(res => res.json())
             .then(data => setFollowUps(data));
 
     }, []);
     const onSubmit = (data) =>{
            console.log( "follow up data",data)
            const url ='http://localhost:5000/followUp'
            fetch(url, {
                method: "POST",
                body:JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(res => res.json())
            .then(data =>{
                console.log('success data', data)
                toast.success('Data added successfully !!! ');
                setUpdated(!updated)
            })

     }

    return (
        <div className='m-3'>
        <div className='flex items-center g-3'>
            <div className='h-4 w-4 bg-green-700  '></div>
            <h1 className='text-xl font-bold ml-1'>Follow Up Entry Form</h1>
        </div>
        <div className='mt-5 '>
            {/* -------- Leads entry form start--------------------- */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    {/* ----------------------------Form Left side start ---------------  */}
                    <div className='border-bottom border-b-2 rounded-lg border-gray-600 shadow-lg bg-slate-200 mb-3 p-3 px-10 '>

                        <div className='flex gap-8'>
                            {/* --------------------------- Input field Company Name---------------- */}
                            <div className="form-control ">
                                <label>Company Name</label>
                                <select {...register("companyName")} className="input font-bold w-96 focus:outline-0 rounded-sm  border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ">
                                    {
                                        leads.map((lead) => <option>{lead.companyName}</option>)
                                    }


                                </select>
                            </div>
                      
                            {/* --------------------------- Input field Follow up type Type  ---------------- */}
                            <div className="form-control ">
                                <label> Follow Up Type</label>
                                <select type='checkbox' {...register("followUp")} className="input font-bold w-96 focus:outline-0 rounded-sm  border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ">
                                    {
                                        followUpTypes.map((followUpType) => <option>{followUpType.followUpType}</option>)
                                    }


                                </select>

                            </div>
                             {/* --------------------------- Input field Opportunity ---------------- */}
                             <div className="form-control  ">
                                <label>Opportunity</label>
                              
                               <select {...register("opportunity")}  className="input font-bold w-96  focus:outline-0 rounded-sm  border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ">
                                    {
                                        opportunitys.map((opportunity) => <option > {opportunity.opportunity}</option>)
                                    }


                                </select>
                               

                            </div>

                        </div>
                        <div className='flex gap-8'>
                           


                            {/* -----------------------  Foolow up date ial Website Input field------------------ */}
                            <div className="form-control  ">
                                <label>Next Follow Up Date</label>
                                <input
                                    type="date"

                                    className="input font-bold w-96 focus:outline-0  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("date", {
                                        required: {
                                            value: true,
                                            message: "❌  Date is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.date?.type === 'required' && <span className="label-text-alt text-red-700">{errors.date.message}</span>}

                                </label>
                            </div>
                            {/* -----------------------  Foolow up time ial Website Input field------------------ */}
                            <div className="form-control  ">
                                <label>Next Follow Up Time</label>
                                <input
                                    type="time"
                                    // value='11:00'
                                    className="input font-bold w-96 focus:outline-0  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                    {...register("time", {
                                        required: {
                                            value: true,
                                            message: "❌  Time is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.time?.type === 'required' && <span className="label-text-alt text-red-700">{errors.time.message}</span>}

                                </label>
                            </div>

                             {/* --------------------------- Input field time data fatch ---------------- */}
                             {/* <div className="form-control  ">
                                <label>Time Select</label>
                                <select {...register("gender")} type='checkbox'  className="input font-bold w-96  focus:outline-0 rounded-sm  border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ">
                                    {
                                        genders.map((gender) => <option> {gender.gender}</option>)
                                    }


                                </select>

                            </div> */}
                  
                          {/* -----------------------  Contact Number Input field------------------ */}
                          <div className="form-control ">
                            <label>Description</label>
                            <textarea
                                type="text"

                                className="input font-bold  focus:outline-0 w-96  rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "❌  Please Fillup  Input Field"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-700">{errors.description.message}</span>}

                            </label>
                        </div>


                        </div>
                      

                        {/* ----------------------------Form Left side End ---------------      */}
                        
                    </div>

                  
                    {/* ----------------------------Form Right side end ---------------      */}



                </div>
                {/* ---------------------Submit Field -------------------------- */}
                <div className='flex gap-3 justify-center items-center mt-6'>
                    <input className='btn input-bordered   max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:border-0 hover:text-white ' type="submit" value='Submit' />
                    <Link to='/dashboard' className='btn btn-outline border-gray-500 input-bordered input-primary  max-w-xs cursor-pointer font-bold uppercase  hover:text-white  '> Cancel</Link>

                </div>
            </form>
            {/* -------- Leads entry form end--------------------- */}
            <div>

            </div>
        </div>
        {/* ------------------ Form end-------------------------- */}

        <div className="overflow-x-auto ">
            <h1 className='mt-10 text-2xl text-center text-info font-bold'>Follow Up List</h1>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Company Name</th>
                        <th>Follow Up Type</th>
                        {/* <th>Business Type</th>
                        <th>Location</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>Postal Code</th>
                        <th>Company Website</th>
                        <th>Contact Number</th> */}
                        <th>Opportunity</th>
                        <th>Date</th>
                        {/* <th>Department</th> */}
                        <th>Time</th>
                        <th>Description</th>

                    </tr>
                </thead>
                <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            followUps?.map((followUp, index) =>
                                <tr key={followUp._id} >
                                    <th>{index + 1}</th>
                                    <td>{followUp.companyName}</td>
                                    <td>{followUp.followUp}</td>
                                    <td>{followUp.opportunity}</td>
                                    <td>{followUp.date}</td>
                                    <td>{followUp.time}</td>
                                    <td>{followUp.description}</td>
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/businessTypeEdit/${followUp._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(followUp._id)}><MdDelete /></button>
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

export default FollowUp;