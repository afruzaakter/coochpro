import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const District = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
    const onSubmit = async (data) => {
        const url = 'http://localhost:5000/district'
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
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/district')
            .then(res => res.json())
            .then(data => setDistricts(data));

    }, [updated]);

    // -----------------------Delete method ----------------------

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/district/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = districts.filter(district => district._id !== id)
                    setDistricts(remaining);
                })

        }

    }
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 items-start mt-16 lg:gap-20  '>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">District</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="District"
                                className={`input font-bold max-w-xs  focus:outline-0 rounded-sm border-gray-400 mt-1  w-full focus:border-blue-500  login-container-input ${errors.district && 'border-red-600 focus:border-red-600'}`}
                                {...register("district", {
                                    required: {
                                        value: true,
                                        message: "???  Please Fillup  Input Field"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.district?.type === 'required' && <span className="label-text-alt text-red-700">{errors.district.message}</span>}

                            </label>
                        </div>
                        <input className='input focus:outline-0  input-bordered input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                    </form>
                </div>
            </div>


            <div className="overflow-x-auto lg:w-96">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>District</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            districts?.map((district, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{district.district}</td>
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/districtEdit/${district._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(district._id)}><MdDelete /></button>
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

export default District;