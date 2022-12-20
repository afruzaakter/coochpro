import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const MaritalStatus = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
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
     const [maritals, setMaritals] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/marital')
             .then(res => res.json())
             .then(data => setMaritals(data));
 
     }, [updated]);
 
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
                                className={`input font-bold max-w-xs  focus:outline-0 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.marital && 'border-red-600 focus:border-red-600'}`}
                                {...register("marital", {
                                    required: {
                                        value: true,
                                        message: "❌  Please Fillup  Input Field"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.marital?.type === 'required' && <span className="label-text-alt text-red-700">{errors.marital.message}</span>}

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
                            <th>Gender</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 map maritals data --> */}

                        {
                            maritals?.map((marital, index) =>
                                <tr key={marital._id} >
                                    <th>{index + 1}</th>
                                    <td>{marital.marital}</td>
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