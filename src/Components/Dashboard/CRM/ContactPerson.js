import React from 'react';
import { useState } from 'react';

const ContactPerson = () => {
    const [val, setVal] = useState([]);

    const handleAdd = () =>{
       const abc = [...val,[]]
       setVal(abc)
    }
    const handleChange = (onChangeValue, i) =>{
       const inputdata= [...val]
       inputdata[i] = onChangeValue.target.value
       setVal(inputdata)
       console.log("data", val)
    }

    const handleDelete = (i) =>{
        const deletVal = [...val];
        deletVal.splice(i, 1)
        setVal(deletVal)

    }
  
    return (
        <>
         <button className='btn btn-primary' onClick={() => handleAdd()} >Add</button>
         {val.map((data,i) => {
                return(
                    <div className='ml-28'>
                        <input className='input m-1 mt-5 input-bordered focus:outline-none  input-primary bg-slate-100 ' onChange={e => handleChange(e,i)} />
                    <button onClick={() => handleDelete(i)}>❌</button>
                
                    </div>
                )
            })}
        </>
    );
};

export default ContactPerson;