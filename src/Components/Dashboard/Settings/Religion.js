import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Religion = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data)=>{ 
        const url = 'http://localhost:5000/religion'
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
    const [religions, setReligions] = useState([]);
   
    useEffect(() => {
        fetch('http://localhost:5000/religion')
            .then(res => res.json())
            .then(data => setReligions(data));

    }, []);

       // -----------------------Delete method ----------------------

   const  handleDelete = (id) => {
    const proceed  = window.confirm('Are you sure?')
    if(proceed){
        const url = `http://localhost:5000/religion/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            const remaining = religions.filter(religion => religion._id !==id)
            setReligions(remaining);
        })

    }

   }

    return (
        <div className='flex justify-start ml-28 items-start mt-16 gap-14'>
        <div className="card w-96 bg-gray-200 ">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">Religion</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* -----------------------Male Field ------------------------------ */}
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Religion"
                            className="input input-bordered font-bold w-full max-w-xs login-container-input"
                            {...register("religion", {
                                required: {
                                    value: true,
                                    message: "❌  Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors.religion?.type === 'required' && <span className="label-text-alt text-red-700">{errors.religion.message}</span>}

                        </label>
                    </div>
                   <input className='input input-bordered input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                </form>
            </div>
        </div>
 
       
        <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Religion</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            religions?.map((religion, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{religion.religion}</td>
                                    <td className='flex gap-4'>
                                    <Link to={`/dashboard/religionEdit/${religion._id}`}><FaEdit /></Link>
                                    <button onClick={() => handleDelete(religion._id)}><MdDelete/></button>
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

export default Religion;