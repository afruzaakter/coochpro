import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const GenderEdit = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, defaultValues, reset } = useForm();
    const navigate = useNavigate();
    const [genders,setGenders] = useState([])

   useEffect(()=>{
    const url = `http://localhost:5000/gender`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setGenders(data))

   }, [])

   console.log(genders)


    const onSubmit = (data) => {
       
        const gender = {
            gender: data.gender
        };
        console.log(gender)
        const url = `http://localhost:5000/gender/${id}`;

        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gender)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Users Update Successfully !!!');
                reset();
            })
        navigate('/dashboard/gender')
    }
    return (
        <div className='flex justify-start ml-28 items-start mt-16 gap-14'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Update Gender</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Gender"
                                defaultValues={genders.gender}
                                // setValue={genders.gender}
                                name="gender"
                                // disabled
                                className="input input-bordered font-bold w-full max-w-xs login-container-input"
                                {...register("gender", {
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
                            <Link to='/dashboard/gender' className='btn '> Back</Link>

                        </div>
                    </form>
                </div>
            </div>



            <ToastContainer />
        </div>
    );
};

export default GenderEdit;