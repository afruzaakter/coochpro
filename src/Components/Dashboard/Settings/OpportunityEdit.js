import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const OpportunityEdit = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const [opportunitys, setOpportunitys] = useState([])

    // -------------------- Update show data method ----------------
    useEffect(() => {
        const url = `http://localhost:5000/opportunity/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOpportunitys(data))

    }, [])
    console.log(opportunitys)

    // -------------Update Data ---------------------
    const onSubmit = (data) => {
        const opportunity = {
            opportunity: data.opportunity
        };
        const url = `http://localhost:5000/opportunity/${id}`;

        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(opportunity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Data Update Successfully !!!');
                reset();
            })
        navigate('/dashboard/opportunity')
    }
    return (
        <div className='flex justify-start ml-28 items-start mt-16 gap-14'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Update Opportunity</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                Value={opportunitys.opportunity}
                                className="input focus:outline-0 focus:border-primary  input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("opportunity", {
                                    required: {
                                        value: true,
                                        message: "❌  Please Fillup  Input Field"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.opportunity?.type === 'required' && <span className="label-text-alt text-red-700">{errors.opportunity.message}</span>}

                            </label>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <input className='input input-bordered focus:outline-0 input-primary  max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Update' />
                            <Link to='/dashboard/opportunity' className='btn '> Back</Link>

                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default OpportunityEdit;