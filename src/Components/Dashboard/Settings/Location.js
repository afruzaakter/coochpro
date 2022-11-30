import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Location = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const url = 'http://localhost:5000/location'
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
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/location')
            .then(res => res.json())
            .then(data => setLocations(data));

    }, []);

    // -----------------------Delete method ----------------------

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/location/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = locations.filter(location => location._id !== id)
                    setLocations(remaining);
                })

        }

    }
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-14'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Location</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Location"
                                className="input input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: "❌  Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.location?.type === 'required' && <span className="label-text-alt text-red-700">{errors.location.message}</span>}

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
                            <th>Location</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            locations?.map((location, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{location.location}</td>
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/locationEdit/${location._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(location._id)}><MdDelete /></button>
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

export default Location;