import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const FollowUpType = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
    const onSubmit = async (data) => {
        const url = 'http://localhost:5000/followUpType'
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
    const [followUpTypes, setFollowUpTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/followUpType')
            .then(res => res.json())
            .then(data => setFollowUpTypes(data));

    }, [updated]);

    // -----------------------Delete method ----------------------

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/followUpType/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = followUpTypes.filter(followUpType => followUpType._id !== id)
                    setFollowUpTypes(remaining);
                })

        }

    }
 
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-14'>
        <div className="card w-96 bg-gray-200 ">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">Follow Up Type</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* -----------------------Male Field ------------------------------ */}
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder='Follow Up Type'
                            className="input focus:outline-0 focus:border-primary  input-bordered font-bold w-full max-w-xs login-container-input"
                            {...register("followUpType", {
                                required: {
                                    value: true,
                                    message: "❌  Please Fillup  Input Field"
                                }
                            })}
                        />
                        <label className="label">
                            {errors.followUpType?.type === 'required' && <span className="label-text-alt text-red-700">{errors.followUpType.message}</span>}

                        </label>
                    </div>
                    <input className='input input-bordered focus:outline-0 input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                </form>
            </div>
        </div>


        <div className="overflow-x-auto lg:w-96">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Follow Up Type</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}

                    {
                        followUpTypes?.map((followUpType, index) =>
                            <tr key={followUpType._id}>
                                <th>{index + 1}</th>
                                <td>{followUpType.followUpType}</td>
                                <td className='flex gap-4'>
                                    <Link to={`/dashboard/followUpTypeEdit/${followUpType._id}`}><FaEdit /></Link>
                                    <button onClick={() => handleDelete(followUpType._id)}><MdDelete /></button>
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

export default FollowUpType;