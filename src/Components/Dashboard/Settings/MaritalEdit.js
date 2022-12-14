import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const MaritalEdit = () => {

    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    
    const [maritals,setMaritals] = useState([])

    // -----------------Update data show method --------------
   useEffect(()=>{
    const url = `http://localhost:5000/marital/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setMaritals(data))

   }, [])

    const onSubmit = (data) => {
        const marital = {
            marital: data.marital
        };
        const url = `http://localhost:5000/marital/${id}`;

        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(marital)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Users Update Successfully !!!');
                reset();
            })
        navigate('/dashboard/maritalStatus')
    }
    return (
        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-14'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Update Marital Status</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                Value = {maritals.marital}
                                className="input input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("marital", {
                                    required: {
                                        value: true,
                                        message: "❌  Please Fillup  Input Field"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.gender?.type === 'required' && <span className="label-text-alt text-red-700">{errors.gender.message}</span>}

                            </label>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <input className='input input-bordered input-primary  max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Update' />
                            <Link to='/dashboard/maritalStatus' className='btn '> Back</Link>

                        </div>
                    </form>
                </div>
            </div>



            <ToastContainer />
        </div>
    );
};

export default MaritalEdit;