import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const LeadEntryEdit = () => {
    // const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    const [leads, setLeads] = useState([]);
 

    useEffect(() => {
        const url = `http://localhost:5000/leads/${id}`
        //   console.log("purchase id",url);
        fetch(url)
            .then(res => res.json())
            .then(data => setLeads(data))
    }, [])


    console.log("leads data", leads)

    const handleSubmit = (e) =>{

        const companyDetails = {
            companyName: e.target.companyName.value,
            companyLocation: e.target.companyLocation.value,
            businessType: e.target.businessType.value,
            webAddress: e.target.webAddress.value,
            contactNumber: e.target.phoneNumber.value,
            email: e.target.email.value,
        }
        console.log("company details", companyDetails)
        const url = `http://localhost:5000/leads/${id}`;

        console.log(url)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(companyDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Users Update Successfully !!!');
                e.target.reset();
            })
        navigate('/dashboard/leadsEntry')

    }
    

    return (
        <div>
           <div className="card  bg-base-100 shadow-xl  ">
            <div className="card-body">
            <h2 className=" text-xl font-bold">Leads Entry</h2>
                <form onSubmit={handleSubmit} className="m-2">
                    <input type="text"
                     placeholder="Company Name"
                     name="companyName" 
                    //  value={leads?.companyName}
                      className="input mb-3 mr-3 input-bordered w-full max-w-xs" />
                    <input type="text"
                    //  value={leads?.companyLocation} 
                    placeholder="Company Location" 
                    name="companyLocation" required className="input
                       input-bordered mb-2 w-full max-w-xs" />
                    <input type="text" required  placeholder="Type of Business" name="businessType" className="input
                       input-bordered mb-3 mr-3 w-full max-w-xs" />
                    <input type="text" required placeholder="Web Address" name="webAddress" className="input
                       input-bordered mb-2 w-full max-w-xs" />
                    <input type="text" required placeholder="Contact Number " name="phoneNumber" className="input 
                       input-bordered mb-3 mr-3 w-full max-w-xs" />
                    <input type="email" required placeholder="Email Address" name="email" className="input
                       input-bordered mb-2 w-full max-w-xs" />
                   <div className='flex gap-96 '>
                   <input className='input input-bordered input-primary ml-10  max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Update' />
                   <Link to='/dashboard/leadsEntry' className='btn '> Back</Link>
                   </div>
                </form>
            </div>          
        </div>
        </div>
    );
};

export default LeadEntryEdit;