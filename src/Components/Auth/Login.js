import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import google from '../../Images/googleicon.webp';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (gLoading || loading) {
        return <Loading />
    }

    if(gUser || user){
        navigate("/dashboard");
    }

    let signInError;

    if(error || gError){
        signInError=<p className='text-red-500'> <small>{error.message || gError.message}</small> </p>
    }


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='h-screen m-auto flex justify-center items-center login-banner'>
            <div className="card w-2/6   login-bg bg-blue-900 bg-gradient-to-r bg-opacity-60 shadow-xl ">
           
                <div className="card-body items-center">
                <h2 className="text-4xl text-white text-center uppercase ">Create An Account</h2>
                <button className="btn text-white mt-5 mb-3 text-2xl  btn-outline" onClick={() => signInWithGoogle()}>  
                <img className='text-white object-cover h-6 w-6 mr-3' src={google} alt=""/>
                Login with Google</button>
                    

                    {/* ------------- Login Form start ----------------------- */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* ----------------------Email input field ------------------------- */}
                        <div className="form-control w-96  max-w-xs">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input text-2xl font-bold text-white  w-96  opacity-60 max-w-xs login-container-input"
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
                                className="input text-2xl font-bold opacity-60 text-white w-full max-w-xs login-container-input"
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
                        {signInError}
                        <input className='btn w-full btn-outline text-white text-xl max-w-xs' type="submit" value='Login' />
                    </form>

                    {/* ------------- Login Form end ----------------------- */}
                    <p > <Link className='text-white text-xl font-bold ml-15' to="/signup">Create New Account</Link> </p>
                    <p className='text-secondary text-xl font-bold'>Forgot Password? <Link className='text-white font-bold' to="/reset">Reset Password</Link> </p>

                    {/* <div className="divider text-white">OR</div> */}
                    
                </div>
            </div>
        </div>
    );
};

export default Login;