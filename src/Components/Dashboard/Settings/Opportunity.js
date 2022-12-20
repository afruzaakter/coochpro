import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Opportunity = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
      // -----------------post method  ----------------------
      const onSubmit = async (data)=>{ 
        const url = 'http://localhost:5000/opportunity'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.insertedId) {
                    toast.success("Successfully Data Add !!!");
                    setUpdated(!updated);
                    reset()
                }
                else {
                    toast.error("Failed to  add product");
                }
            });   
        }

     // ---------------------get method -----------------
     const [opportunitys, setOpportunitys] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/opportunity')
             .then(res => res.json())
             .then(data => setOpportunitys(data));
 
     }, [updated]);
 
     // -----------------------Delete method ----------------------
    
 //   const [id] =useParams()
 
    const  handleDelete = (id) => {
     const proceed  = window.confirm('Are you sure?')
     if(proceed){
         const url = `http://localhost:5000/opportunity/${id}`
         console.log(url)
         fetch(url, {
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(data =>{
             console.log(data)
             const remaining = opportunitys.filter(Opportunity => Opportunity._id !==id)
             setOpportunitys(remaining);
         })
 
     }
 
    }
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-14'>
        <div className="card w-96 bg-gray-200 ">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">Opportunity</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Opportunity Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Opportunity"
                                className={`input font-bold max-w-xs  focus:outline-0 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.opportunity && 'border-red-600 focus:border-red-600'}`}
                                {...register("opportunity", {
                                    required: {
                                        value: true,
                                        message: "❌  Please Fillup  Input Field"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.opportunity?.type === 'required' && <span className="label-text-alt text-red-700">{errors.opportunity.message}</span>}

                            </label>
                        </div>
                        <input className='input focus:outline-0 input-bordered input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                    </form>
            </div>
        </div>

        <div className="overflow-x-auto lg:w-96">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Opportunity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 map maritals data --> */}

                        {
                            opportunitys?.map((opportunity, index) =>
                                <tr key={opportunity._id} >
                                    <th>{index + 1}</th>
                                    <td>{opportunity.opportunity}</td>
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/opportunityEdit/${opportunity._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(opportunity._id)}><MdDelete/></button>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        <ToastContainer />
    </div>
    );
};

export default Opportunity;