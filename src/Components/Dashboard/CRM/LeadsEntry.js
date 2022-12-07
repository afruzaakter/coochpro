import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const LeadsEntry = () => {

    const [updated, setUpdated] = useState(false)
    // ----------------step start code --------------
    const formArray = [1, 2, 3];
    const [formNo, setFormNo] = useState(formArray[0])
    const [state, setState] = useState({
        companyFullName: ' ',
        companyShortName: ' ',
        companyLocation: ' ',
        businessType: ' ',
        webAddress: ' ',
        phoneNumber: ' ',
        email: ' ',
        contactperson: ' '

    })
    console.log("step data", state)

    // ---------------------type of business  get method -----------------
    const [businessed, setBusinessed] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/business')
            .then(res => res.json())
            .then(data => setBusinessed(data));

    }, []);



// ----------------------------leads Entry input field -----------------------
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,

        })

    }
// -------------------------- Next button next function ---------------------
    const next = () => {
        if (formNo === 1 && state.companyFullName && state.companyShortName && state.companyLocation) {
            setFormNo(formNo + 1);
        }
        else if (formNo === 2 && state.businessType && state.webAddress && state.phoneNumber) {
            setFormNo(formNo + 1);
        }
        else {
            toast.error('Please Fillup all input field')
        }

    }
    const pre = () => {
        setFormNo(formNo - 1);
    }

    // --------------------Final Submit post method --------------------

    const finalSubmit = (e) => {
        e.preventDefault();
        // if (formNo === 3 && state.contactperson && state.email) {
        //     setFormNo(formNo + 1);

        // }

        const url = 'http://localhost:5000/leads'
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

            .then((res) => res.json())
            .then((data) => {
                console.log("success data", data)
                toast.success('Data added successfully!!!');
                setUpdated(!updated)
            });

    }



    // ----------------step end code --------------

    // ---------------------get method -----------------
    const [leads, setLeads] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/leads')
            .then(res => res.json())
            .then(data => setLeads(data));

    }, [updated]);
    console.log("leads data", leads)

    // ---------------------Delete method-----------
    const handleDelete = (id) => {
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
        <div className='lg:ml-10  mt-4 lg:gap-10'>
            <div className="card  bg-base-100 shadow-xl  ">
                <div className="card-body">

                    <div className='flex justify-center   items-center'>
                        {
                            formArray.map((v, i) => <>
                                <div className={`${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-primary' : 'bg-gray-400'}  flex justify-center items-center rounded-full my-3 text-white bg-info h-[35px] w-[35px]`}>
                                    {v}
                                </div>
                                {
                                    i !== formArray.length - 1 && <div className={`h-[2px] w-[85px] bg-info ${formNo === i + 2 || formNo === formArray.length ? 'bg-primary' : 'bg-gray-400'}`}></div>
                                }
                            </>)
                        }
                    </div>

                    {/* ------------------------- Company basic info form -------------------------------- */}

                    {

                        formNo === 1 && <div className='w-80 card border-2 p-3 m-auto'>
                            <h2 className="text-center  text-xl font-bold">Company Basic Info</h2>

                            <label for='companyFullName' className='mb-2 mt-4' >Company Full Name</label>
                            <input value={state.companyFullName} onChange={inputHandle} id='companyFullName' placeholder="Company Full Name" type="text" name="companyFullName"
                                className="input mb-2 mr-3 input-bordered w-full focus:outline-none font-bold focus:border-blue-500 max-w-xs" required />

                            <label for='companyShortName' className='mb-2' >Company Short Name</label>
                            <input value={state.companyShortName} onChange={inputHandle} type="text" id="companyShortName" placeholder="Company Short Name" name="companyShortName" className="input  focus:outline-none font-bold  input-bordered mb-2 w-full max-w-xs  focus:border-blue-500" required />

                            <label for='companyLocation' className='mb-2' >Company Location</label>
                            <input value={state.companyLocation} onChange={inputHandle} type="text" id='companyLocation' placeholder="Company Location" name="companyLocation" className="input focus:outline-none font-bold  focus:outline-0
                            input-bordered mb-2 w-full max-w-xs  focus:border-blue-500" required />



                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Next</button>
                        </div>
                    }

                    {
                        formNo === 2 && <div className='w-80 card border-2 p-3 m-auto'>



                            <label for='businessType' className='mb-2 mt-3' >Select Type of Business</label>
                            <select onChange={inputHandle} name='businessType' className="select select-primary mb-2 focus:outline-none w-full max-w-xs ">
                                {
                                    businessed.map((business) => <option>{business.business}</option>)
                                }
                            </select>


                            <label for='webAddress' className='mb-2' >Web Address</label>
                            <input value={state.webAddress} onChange={inputHandle} type="text" id='webAddress' name='webAddress' className="input input-bordered focus:outline-none font-bold  focus:border-blue-500 mb-2 w-full max-w-xs" />

                            <label for='phoneNumber' className='mb-2' >Contact Number</label>
                            <input value={state.phoneNumber} onChange={inputHandle} type="text" id='phoneNumber' required placeholder="Contact Number " name="phoneNumber" className="input input-bordered focus:outline-none font-bold  focus:border-blue-500 mb-2 mr-3 w-full max-w-xs" />


                            <div className='mt-4 gap-3 flex justify-center items-center'>
                                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Previous</button>
                                <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Next</button>
                            </div>
                            <ToastContainer />
                        </div>
                    }
                    {
                        formNo === 3 && <div className='w-80 card border-2 p-3 m-auto'>

                            <label for='email' className='mb-2' >Email Address</label>
                            <input value={state.email} onChange={inputHandle} id='email' type="email" required name="email" className="input input-bordered focus:outline-none font-bold  focus:border-blue-500 mb-2 w-full max-w-xs" />

                            <label for='contactPerson' className='mb-2' >Contact Person</label>
                            <input value={state.contactperson} onChange={inputHandle} id='contactperson' type="text" required placeholder="Contact Person" name="contactperson" className="input focus:outline-none font-bold  focus:border-blue-500  input-bordered mb-3 mr-3 w-full max-w-xs" />

                            <div className='mt-4 gap-3 flex justify-center items-center'>
                                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Previous</button>
                                <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-primary'>Submit</button>
                            </div>

                        </div>
                    }
                   
                </div>
            </div>


            {/* --------------------------------- Form data table Display ----------------------------------- */}
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Company Full Name</th>
                            <th>Company Short Name</th>
                            <th>Location</th>
                            <th>Business Type</th>
                            <th>Web Address</th>
                            <th>Contact Number</th>
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
                                    <td>{lead.companyFullName}</td>
                                    <td>{lead.companyShortName}</td>
                                    <td>{lead.companyLocation}</td>
                                    <td>{lead.businessType}</td>
                                    <td>{lead.webAddress}</td>
                                    <td>{lead.phoneNumber}</td>
                                    <td>{lead.email}</td>

                                    {/* <td>
                                       <FaEdit />
                                    </td> */}
                                    <td className='flex gap-4'>
                                        <Link to={`/dashboard/leadEntryEdit/${lead._id}`}><FaEdit /></Link>
                                        <button onClick={() => handleDelete(lead._id)}><MdDelete /></button>
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