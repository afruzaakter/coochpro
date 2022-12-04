import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BusinessType = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
    const onSubmit = async (data) => {
        const url = 'http://localhost:5000/business'
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
                    setUpdated(!updated)
                    reset()
                }
                else {
                    toast.error("Failed to  add product");
                }
            });

    }

    // ---------------------get method -----------------
    const [businessed, setBusinessed] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/business')
            .then(res => res.json())
            .then(data => setBusinessed(data));

    }, [updated]);

    // -----------------------Delete method ----------------------

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/business/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = businessed.filter(business => business._id !== id)
                    setBusinessed(remaining);
                })

        }

    }
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-20 text-center'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Type of Business</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Type of Business"
                                className="input input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("business", {
                                    required: {
                                        value: true,
                                        message: "❌  Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.business?.type === 'required' && <span className="label-text-alt text-red-700">{errors.business.message}</span>}

                            </label>
                        </div>
                        <input className='input input-bordered focus:outline-0 input-primary  w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                    </form>
                </div>
            </div>


            <div className="overflow-x-auto lg:w-96">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Business Type</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            businessed?.map((business, index) =>
                                <tr key={business._id} >
                                    <th>{index + 1}</th>
                                    <td>{business.business}</td>
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/businessTypeEdit/${business._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(business._id)}><MdDelete /></button>
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

export default BusinessType;