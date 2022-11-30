import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const MaritalStatus = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
      // -----------------post method  ----------------------
      const onSubmit = async (data)=>{ 
        const url = 'http://localhost:5000/marital'
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
                    toast("Successfully Data Add");
                    reset()
                }
                else {
                    toast.error("Failed to  add product");
                }
            });   
        }

     // ---------------------get method -----------------
     const [maritals, setMaritals] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/marital')
             .then(res => res.json())
             .then(data => setMaritals(data));
 
     }, []);
 
     // -----------------------Delete method ----------------------
    
 //   const [id] =useParams()
 
    const  handleDelete = (id) => {
     const proceed  = window.confirm('Are you sure?')
     if(proceed){
         const url = `http://localhost:5000/marital/${id}`
         console.log(url)
         fetch(url, {
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(data =>{
             console.log(data)
             const remaining = maritals.filter(marital => marital._id !==id)
             setMaritals(remaining);
         })
 
     }
 
    }
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-14'>
        <div className="card w-96 bg-gray-200 ">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">Marital Status</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Marital Status"
                                className="input input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("marital", {
                                    required: {
                                        value: true,
                                        message: "❌  Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.marital?.type === 'required' && <span className="label-text-alt text-red-700">{errors.marital.message}</span>}

                            </label>
                        </div>
                        <input className='input input-bordered input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                    </form>
            </div>
        </div>

        <div className="overflow-x-auto lg:w-96">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Gender</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            maritals?.map((marital, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{marital.marital}</td>
                                    
                                    {/* <td>
                                       <FaEdit />
                                    </td> */}
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/maritalEdit/${marital._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(marital._id)}><MdDelete/></button>
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

export default MaritalStatus;