import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const SidebarItem = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [updated, setUpdated] = useState(false)
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    companyfullname: '',
    companyshortname: '',
    location: ' ',
    businessType: ' ',
    webaddress: ' ',
    phone: ' ',
    email: ' ',
    contactperson: ' '
  })
  // const inputHandle = (e) => {
  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const next = (data) => {
    if (formNo === 1 && data.companyFullName && data.companyShortName && data.location) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.business && state.webaddress && state.phone) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fillup all input field')
    }

    // setFormNo(formNo + 1)
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }

  // ---------------------Type of Business get method ---------------
   // ---------------------get method -----------------
   const [businessed, setBusinessed] = useState([]);
   useEffect(() => {
       fetch('http://localhost:5000/business')
           .then(res => res.json())
           .then(data => setBusinessed(data));

   }, []);


  // --------------------React hook form -------------------
  const onSubmit = async (data) => {
    const url = 'http://localhost:5000/leads'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

      .then((res) => res.json())
      .then((data) => {

        if (data.insertedId) {
          toast("Successfully Data Add");
          setUpdated(!updated)
          reset()
        }
        else {
          toast.error("Failed to  add product");
        }
      });

  }


  // const finalSubmit = (e) => {
  //   if (state.phone && state.email && state.contactperson) {
  //       toast.success('form submit success')
  //     } else {
  //       toast.error('Please fillup all input field')
  //     }
  //   e.preventDefault();
  //   const url = 'http://localhost:5000/leads'
  //   console.log(url)
  //   fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(state),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })

  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("success", data)
  //       toast.success('Data added successfully!!!');
  //       e.target.reset();
  //       setUpdated(!updated)
  //     });

  //   console.log(state)
  // }

  return (
    <div className=" h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-[370px] rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {

            formNo === 1 && <div>
              {/* ------------------ Company Full Name -------------- */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="input input-bordered font-bold w-full max-w-xs login-container-input"
                  {...register("companyFullName", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                />
                <label className="label">
                  {errors.companyfullname?.type === 'required' && <span className="label-text-alt text-red-700">{errors.companyfullname.message}</span>}

                </label>
              </div>

              {/* ------------------ Company Short Name -------------- */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Company Short Name"
                  className="input input-bordered font-bold w-full max-w-xs login-container-input"
                  {...register("companyShortName", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                />
                <label className="label">
                  {errors.companyshortname?.type === 'required' && <span className="label-text-alt text-red-700">{errors.companyshortname.message}</span>}

                </label>
              </div>



              {/* ------------------ Company Location -------------- */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Company Location"
                  className="input input-bordered font-bold w-full max-w-xs login-container-input"
                  {...register("location", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                />
                <label className="label">
                  {errors.location?.type === 'required' && <span className="label-text-alt text-red-700">{errors.location.message}</span>}

                </label>
              </div>

              <div className='mt-4 flex justify-center items-center'>
                <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
              </div>
            </div>
          }

          {
            formNo === 2 && <div>
              <div className='flex flex-col mb-2'>
                <label for='businessType' className='mb-2 mt-3' >Select Type of Business</label>
                <select  {...register("businessType", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                  name='businessType' className="select select-primary mb-2 focus:outline-none w-full max-w-xs ">
                  {
                    businessed.map((business) => <option>{business.business}</option>)
                  }
                </select>
              </div>

              {/* ------------------ Web Address -------------- */}
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Web Address"
                  className="input input-bordered font-bold w-full max-w-xs login-container-input"
                  {...register("webAddress", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                />
                <label className="label">
                  {errors.webaddress?.type === 'required' && <span className="label-text-alt text-red-700">{errors.webaddress.message}</span>}

                </label>
              </div>

                {/* ------------------ Web Address -------------- */}
                <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered font-bold w-full max-w-xs login-container-input"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                />
                <label className="label">
                  {errors.phone?.type === 'required' && <span className="label-text-alt text-red-700">{errors.phone.message}</span>}

                </label>
              </div>
             

              <div className='mt-4 gap-3 flex justify-center items-center'>
                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
              </div>
            </div>
          }

          {
            formNo === 3 && <div>
               {/* ------------------ Email -------------- */}
               <div className="form-control w-full max-w-xs">
                <input
                  type="email"
                  placeholder=" Email Address "
                  className="input input-bordered font-bold w-full max-w-xs login-container-input"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                </label>
              </div>
               {/* ------------------ Contact Person -------------- */}
               <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Contact Person"
                  className="input input-bordered font-bold w-full max-w-xs login-container-input"
                  {...register("webAddress", {
                    required: {
                      value: true,
                      message: "❌  Required"
                    }
                  })}
                />
                <label className="label">
                  {errors.contactperson?.type === 'required' && <span className="label-text-alt text-red-700">{errors.contactperson.message}</span>}

                </label>
              </div>
              <div className='mt-4 gap-3 flex justify-center items-center'>
                <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
                <input className='input input-bordered input-primary w-full max-w-xs cursor-pointer font-bold uppercase hover:bg-primary hover:text-white ' type="submit" value='Submit' />
              </div>
            </div>
          }
        </form>

      </div>
    </div>
  );
}

export default SidebarItem;