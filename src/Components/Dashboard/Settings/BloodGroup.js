import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const BloodGroup = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
    const onSubmit = async (data) => {
        const url = 'http://localhost:5000/bloodgroup'
        console.log(url)
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
                    toast.success("Successfully Data Add");
                    setUpdated(!updated)
                    reset()
                }
                else {
                    toast.error("Failed to  add product");
                }
            });

    }
    
     // ---------------------get method -----------------
     const [bloodGroups, setbloodGroups] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/bloodgroup')
             .then(res => res.json())
             .then(data => setbloodGroups(data));
 
     }, [updated]);

     // -----------------------Delete method ----------------------  
    const  handleDelete = (id) => {
        const proceed  = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/bloodgroup/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                const remaining = bloodGroups.filter(bloodgroup => bloodgroup._id !==id)
                setbloodGroups(remaining);
            })
    
        }
    
       }

    return (
        <div className='lg:flex lg:justify-start lg:ml-28 items-start mt-16 lg:gap-20'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Blood Group</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                        <input
                                type="text"
                               placeholder='Blood Group'
                                className={`input font-bold max-w-xs  focus:outline-0 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.bloodgroup && 'border-red-600 focus:border-red-600'}`}
                                {...register("bloodgroup", {
                                    required: {
                                        value: true,
                                        message: "???  Please Fillup  Input Field"
                                    }
                                })}
                            />
                               

                             <label className="label">
                            {errors.bloodgroup?.type === 'required' && <span className="label-text-alt text-red-700">{errors.bloodgroup.message}</span>}

                        </label>
                        </div>
                        <input className='input input-bordered input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                    </form>
                </div>
            </div>

            <div className="overflow-x-auto lg:w-96 ">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Blood Group</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* <!-- row 1 --> */}

                        {
                            bloodGroups?.map((bloodgroup, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{bloodgroup.bloodgroup}</td>
                                    <td className='flex gap-4 '>
                                        <Link  to={`/dashboard/bloodgroupEdit/${bloodgroup._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(bloodgroup._id)}><MdDelete/></button>
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

export default BloodGroup;