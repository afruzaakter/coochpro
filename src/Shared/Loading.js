import React from 'react';
import { useState, useEffect } from 'react';
// import ClipLoader from "react-spinners/ClipLoader";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, []);
    return (
        <div className='m-auto h-screen flex justify-center items-center'>
            <HashLoader

                 color={'green'}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;