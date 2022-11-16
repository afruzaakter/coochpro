import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className='h-screen m-auto flex justify-end items-center p-5'>
            <div className="card w-96  bg-gray-200 shadow-xl ">
                <div className="card-body">
                    <h2 className="text-3xl text-center ">Login</h2>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={() => signInWithGoogle() }>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;