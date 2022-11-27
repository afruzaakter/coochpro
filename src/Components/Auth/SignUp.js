import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);  

    if (loading || gLoading) {
        return <Loading />
    }

    
    if(token){
        navigate("/dashboard");
    }

    // if(gUser || user){
    //  console.log(user || gUser)
    //     // navigate("/dashboard");
    // }

    let signUpError;

    if(error || gError){
        signUpError = <p className='text-red-500'> <small>{error?.message || gError?.message}</small> </p>
    }

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword( data.email, data.password)
    }

    return (
        <div className='h-screen m-auto flex justify-center items-center p-5'>
        <div className="card w-96  bg-gray-400 shadow-xl ">
            <div className="card-body">
                <h2 className="text-3xl text-center uppercase ">Sign Up</h2>

                {/* ------------- Login Form start ----------------------- */}

                <form onSubmit={handleSubmit(onSubmit)}>
                {/* ------------- Name input field ----------------------- */}
                <div className="form-control w-full max-w-xs">
                    <input 
                    type="text"
                     placeholder="Your Name"
                    className="input input-bordered  w-full max-w-xs login-container-input"
                    {...register("name",{
                        required:{
                            value: true,
                            message: "❌ Name is Required"
                        }
                      })}
                     />
                    <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                          
                    </label>
                </div>
                
                {/* ------------- Phone input field ----------------------- */}

                {/* <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="input  w-full max-w-xs login-container-input"
                        {...register("phone", {
                            required: {
                                value: true,
                                message: "❌ Phone Number is Required"
                            },

                            pattern: {
                                value: /[0-9]/,
                                message: '❌ Provide a valid Phone Number'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-700">{errors.phone.message}</span>}
                        {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.phone.message}</span>}
                    </label>
                </div> */}

                {/* ----------------------Email input field ------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input  w-full max-w-xs login-container-input"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "❌ Email is Required"
                            },

                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: '❌ Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                    </label>
                </div>
                {/* ------------- Password input field ----------------------- */}
                <div className="form-control w-full max-w-xs">
                    <input
                        type="password"
                        placeholder="Password"
                        className="input  w-full max-w-xs login-container-input"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "❌ Password is Required"
                            },

                            minLength: {
                                value: 6,
                                message: '❌ Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                {signUpError}
                <input className='btn w-full btn-primary text-white text-xl max-w-xs' type="submit" value='Sign Up' />  
                </form>
                
                {/* ------------- Login Form end ----------------------- */}
                <p>Already have an account?<Link className='text-primary font-bold' to="/login">Login</Link> </p>
                <p>Forgot Password? <Link className='text-primary font-bold' to="/reset">Reset Password</Link> </p>

                <div className="divider">OR</div>
                <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue with Google</button>
            </div>
        </div>
    </div>
    );
};

export default SignUp;