import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Department = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
    const onSubmit = async (data) => {
        const url = 'http://localhost:5000/department'
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
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/department')
            .then(res => res.json())
            .then(data => setDepartments(data));

    }, [updated]);

    // -----------------------Delete method ----------------------

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/department/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = departments.filter(department => department._id !== id)
                    setDepartments(remaining);
                })

        }

    }
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-20 text-center'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Department</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Department"
                                className="input input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("department", {
                                    required: {
                                        value: true,
                                        message: "❌  Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.department?.type === 'required' && <span className="label-text-alt text-red-700">{errors.department.message}</span>}

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
                            <th>Department</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            departments?.map((department, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{department.department}</td>
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/departmentEdit/${department._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(department._id)}><MdDelete /></button>
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

export default Department;