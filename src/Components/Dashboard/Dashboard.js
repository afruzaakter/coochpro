import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { MdDashboard } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BsFillCalendarMinusFill } from 'react-icons/bs';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading />
    }
    return (
        <div >
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h1 className='font-bold text-3xl mt-8 ml-4'>Dashboard</h1>
                    <Outlet></Outlet>

                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto  w-48 bg-base-100 text-base-content">
                        <li className='my-5'><NavLink to='/dashboard'> <MdDashboard /> Dashboard</NavLink></li>
                        <li className='text-primary font-bold'><NavLink to='/dashboard/addreviews'><CgProfile />Sign Out</NavLink></li>
                        <li className='text-primary font-bold'><NavLink to='/dashboard/myorders'><BsMessenger /> Messenger</NavLink></li>
                        <li className='text-primary font-bold'><NavLink to='/dashboard/myorders'><BsMessenger /> Messenger</NavLink></li>
                        <li className='text-primary font-bold'><NavLink to='/dashboard/myorders'><BsFillCalendarMinusFill /> Calendar</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

//     );
// };

export default Dashboard;