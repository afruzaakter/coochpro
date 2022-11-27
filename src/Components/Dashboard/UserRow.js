import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        const url =`http://localhost:5000/user/admin/${email}`
        fetch(url,{
            method: "PUT"
        })
        .then(res=> res.json())
        .then(data =>{
            toast(" Successfully made an admin")
            console.log(data)
        })
    }

           // -----------------------Delete method ----------------------
    const [users, setUsers] = useState([]);
   const  handleDelete = (id) => {
    const proceed  = window.confirm('Are you sure?')
    if(proceed){
        const url = `http://localhost:5000/user/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            const remaining = users.filter(user => user._id !==id)
            setUsers(remaining);
        })

    }

   }

    return (

        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(user._id)} class="btn btn-xs">Remove Admin</button></td>
        </tr>

    );
};

export default UserRow;