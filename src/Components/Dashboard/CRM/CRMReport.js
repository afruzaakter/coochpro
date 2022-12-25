import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactToPrint from 'react-to-print';
import {FcPrint} from 'react-icons/fc';
import { CSVLink } from "react-csv";

const CRMReport = () => {
    const ref = useRef();
      // ---------------------get method -----------------
      const [leads, setLeads] = useState([]);
      useEffect(() => {
          fetch('http://localhost:5000/leads')
              .then(res => res.json())
              .then(data => setLeads(data));
  
      }, []);
      console.log("leads data", leads)
    return (
        <div className='m-5'>
          <div className='flex justify-between'>

         {/* ------------ Pdf and print------------------- */}
          <CSVLink data={leads} className='btn btn-info' >Export Data to Excel Sheet</CSVLink>  

            <span><ReactToPrint  trigger={() =><button className='btn bg-red-500 border-0'> <FcPrint/> Print</button>} content={()=>ref.current} /></span>
            
          </div>
           <div  ref={ref} className="overflow-x-auto mt-5">
           <h1 className='text-center text-3xl mb-5 font-bold uppercase'> CRM Report</h1>
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Company Name</th>
                            <th>CS Name</th>
                            <th>Business Type</th>
                            <th>Location</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>Postal Code</th>
                            <th>Company Website</th>
                            <th>Contact Number</th>
                            <th>Full Name</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            {/* <th>Action</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            leads?.slice(0).reverse().map((lead, index) =>
                                <tr className='text-sm'>
                                    <th>{index + 1}</th>
                                    <td>{lead.companyName}</td>
                                    <td>{lead.companyShortName}</td>
                                    <td>{lead.business}</td>
                                    <td>{lead.location}</td>
                                    <td>{lead.address1}</td>
                                    <td>{lead.address2}</td>
                                    <td>{lead.postalcode}</td>
                                    <td>{lead.website}</td>
                                    <td>{lead.contactNumber}</td>
                                    <td>{lead.fullName}</td>
                                    <td>{lead.designation}</td>
                                    <td>{lead.department}</td>
                                    <td>{lead.mobileNumber}</td>
                                    <td>{lead.email}</td>
                                    {/* <td className='flex gap-4'>
                                        <Link to={`/dashboard/leadEntryEdit/${lead._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(lead._id)}><MdDelete /></button>
                                    </td> */}

                                </tr>
                            )
                        }

                    </tbody>
                </table>
                {/* <ToastContainer /> */}
            </div>
        </div>
    );
};

export default CRMReport;