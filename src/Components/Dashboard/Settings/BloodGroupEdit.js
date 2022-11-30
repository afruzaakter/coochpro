import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const BloodGroupEdit = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    
    const onSubmit = (data) => {
        const bloodgroup = {
            bloodgroup: data.bloodgroup
        };
        const url = `http://localhost:5000/bloodgroup/${id}`;

        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bloodgroup)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Users Update Successfully !!!');
                reset();
            })
        navigate('/dashboard/bloodgroup')
    }
    return (
        <div className='flex justify-start ml-28 items-start mt-16 '>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Update Blood Group</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Blood Group"
                                className="input input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("bloodgroup", {
                                    required: {
                                        value: true,
                                        message: "❌  Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.bloodgroup?.type === 'required' && <span className="label-text-alt text-red-700">{errors.bloodgroup.message}</span>}

                            </label>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <input className='input input-bordered input-primary  max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Update' />
                            <Link to='/dashboard/bloodgroup' className='btn '> Back</Link>

                        </div>
                    </form>
                </div>
            </div>



            <ToastContainer />
        </div>
    );
};

export default BloodGroupEdit;