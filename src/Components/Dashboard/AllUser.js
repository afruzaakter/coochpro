import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const AllUser = () => {
    // const {data: users, loading} = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));

    // ---------------------get method -----------------
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);
    return (
        <div className='ml-5'>
            <h1 className='text-2xl  lg:ml-80 font-bold mb-10'>All user</h1>
         <div className='lg:w-3/4 flex justify-center'>
         <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                         users.map((user,index)=><UserRow
                            index={index+1}
                            key ={user._id}
                            user={user}
                            ></UserRow> )
                      }
                    </tbody>
                </table>
            </div>
         </div>
        </div>
    );
};

export default AllUser;