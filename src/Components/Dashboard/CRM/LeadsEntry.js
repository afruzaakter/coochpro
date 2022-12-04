import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const LeadsEntry = () => {



    const handleSubmit = (e) => {
        e.preventDefault();
        const companyDetails = {
            companyName: e.target.companyName.value,
            companyLocation: e.target.companyLocation.value,
            businessType: e.target.businessType.value,
            webAddress: e.target.webAddress.value,
            contactNumber: e.target.phoneNumber.value,
            email: e.target.email.value,
        }
        console.log("company details", companyDetails)


        console.log(companyDetails)
        const url = 'http://localhost:5000/leads'
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(companyDetails),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((res) => res.json())
            .then((data) => {
                console.log("success", data)
                toast.success('Data added successfully!!!');
                e.target.reset();
                setUpdated(!updated)
            });

    }

    // ---------------------get method -----------------
    const [updated, setUpdated] = useState(false)
    const [leads, setLeads] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/leads')
            .then(res => res.json())
            .then(data => setLeads(data));

    }, [updated]);
    console.log("leads data", leads)

    // ---------------------Delete method-----------
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/leads/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = leads.filter(lead => lead._id !== id)
                    setLeads(remaining);
                })

        }
    }

    return (
       <div className='lg:ml-10  mt-16 lg:gap-10'>
         <div className="card  bg-base-100 shadow-xl  ">
            <div className="card-body">
            <h2 className="text-center text-xl font-bold">Leads Entry</h2>
                <form onSubmit={handleSubmit} className="m-2">
                    <input type="text" placeholder="Company Name" name="companyName" className="input mb-3 mr-3 input-bordered w-full max-w-xs" />
                    <input type="text"  placeholder="Company Location" name="companyLocation" required className="input
                       input-bordered mb-2 w-full max-w-xs" />
                    <input type="text" required  placeholder="Type of Business" name="businessType" className="input
                       input-bordered mb-3 mr-3 w-full max-w-xs" />
                    <input type="text" required placeholder="Web Address" name="webAddress" className="input
                       input-bordered mb-2 w-full max-w-xs" />
                    <input type="text" required placeholder="Contact Number " name="phoneNumber" className="input 
                       input-bordered mb-3 mr-3 w-full max-w-xs" />
                    <input type="email" required placeholder="Email Address" name="email" className="input
                       input-bordered mb-2 w-full max-w-xs" />
                    <input className='input input-bordered input-primary w-full ml-36 max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
                </form>
            </div>          
        </div>
        <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Company Name</th>
                            <th>Location</th>
                            <th>Business Type</th>
                            <th>Web Address</th>
                            <th>Contact</th>
                            <th>Email Address</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            leads?.map((lead, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{lead.companyName}</td>
                                    <td>{lead.companyLocation}</td>
                                    <td>{lead.businessType}</td>
                                    <td>{lead.webAddress}</td>
                                    <td>{lead.contactNumber}</td>
                                    <td>{lead.email}</td>

                                    {/* <td>
                                       <FaEdit />
                                    </td> */}
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/leadEntryEdit/${lead._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(lead._id)}><MdDelete/></button>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
       </div>


    );
};

export default LeadsEntry;