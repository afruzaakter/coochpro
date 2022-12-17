import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


const Gender = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updated, setUpdated] = useState(false)
    const [genderUpdate, setGenderUpdate] = useState(null)

    // -----------------post method  ----------------------
    const onSubmit = async (data) => {
        // data.preventDefault();
        const gender = {
            gender: data.gender
        };
        // console.log(gender);

        try {
            const { data } = await axios.post("http://localhost:5000/gender", gender);
            // console.log(data)
            if (!data.success) {
                return toast(data.error)
            }
            toast.success("Successfully Add Data !!!");
            setUpdated(!updated);
            reset()

        }
        catch (error) {
            console.log(error)
        }

    }
    // ---------------------get method -----------------
    const [genders, setGenders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/gender')
            .then(res => res.json())
            .then(data => setGenders(data));

    }, [updated]);

    // -----------------------Delete method ----------------------
   
//   const [id] =useParams()

   const  handleDelete = (id) => {
    const proceed  = window.confirm('Are you sure?')
    if(proceed){
        const url = `http://localhost:5000/gender/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            const remaining = genders.filter(gender => gender._id !==id)
            setGenders(remaining);
        })

    }

   }

    return (

        <div className='lg:flex lg:justify-start lg:ml-28 lg:items-start mt-16 lg:gap-20'>
            <div className="card w-96 bg-gray-200 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Gender</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* -----------------------Male Field ------------------------------ */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Gender"
                                className="input focus:outline-0 focus:border-primary  input-bordered font-bold w-full max-w-xs login-container-input"
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
                        <input className='input focus:outline-0 input-bordered input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                    </form>
                </div>
            </div>

            <div className="overflow-x-auto lg:w-96">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Gender</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            genders?.map((gender, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{gender.gender}</td>
                                    
                                    {/* <td>
                                       <FaEdit />
                                    </td> */}
                                    <td className='flex gap-4'>
                                        <Link  to={`/dashboard/genderEdit/${gender._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(gender._id)}><MdDelete/></button>
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

export default Gender;