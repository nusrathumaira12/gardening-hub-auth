import React from 'react';
import { Link, useRouteError } from 'react-router';




const ErrorPage = () => {
    const error = useRouteError()
    console.log(error?.error?.message)
    return (
        <>
         
        <div className='flex flex-col items-center justify-center
        min-h-screen bg-gray-200 text-center p-5 rounded'>

            <h1 className='text-4xl font-bold text-red-500 '> "404 - Page Not Found"</h1>
            <p  className='text-2xl my-3 text-gray-600 mb-5'>"Oopss!!the page you're looking for doesn't exist."</p>
           
            <img src="https://images.unsplash.com/photo-1699154581486-fc36d298d72f?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-4/6 justify-center h-[500px] object-cover'/>
            <Link to='/'>
            <button 
            className=' bg-green-700 text-white px-5 py-3 rounded-lg shadow-md my-4'>
                Go Back to Homepage
                </button>
                </Link>

        </div>
        </>
    );
};

export default ErrorPage;