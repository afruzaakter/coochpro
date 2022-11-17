import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Dashboard = () => {
    const [loading] = useAuthState(auth)
    if(loading){
        return <Loading/>
    }
    return (
        <div>
        <h2>Your Dashboard </h2>
        </div>
    );
};

export default Dashboard;