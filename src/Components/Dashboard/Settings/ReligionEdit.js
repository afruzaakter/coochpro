import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ReligionEdit = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const religion = {
            religion: data.religion
        };
        const url = `http://localhost:5000/religion/${id}`;

        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(religion)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Users Update Successfully !!!');
                reset();
            })
        navigate('/dashboard/religion')
    }
    return (
        <div className='flex justify-start ml-28 items-start mt-16 gap-14'>
        <div className="card w-96 bg-gray-200 ">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">Update Religion</h2>
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
                            {errors.gender?.type === 'required' && <span className="label-text-alt text-red-700">{errors.gender.message}</span>}

                        </label>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <input className='input input-bordered input-primary  max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Update' />
                        <Link to='/dashboard/religion' className='btn '> Back</Link>

                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
    );
};

export default ReligionEdit;