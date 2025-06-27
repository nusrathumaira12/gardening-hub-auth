import React from 'react';
import { PiPlant } from 'react-icons/pi';
import { Outlet, Link } from 'react-router';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
        
      <nav className="w-64 p-6 bg-gray-100 sticky top-0 h-screen flex flex-col gap-4">
         <div className='flex text-3xl font-bold items-center mb-12 pt-3 text-green-900 dark:text-green-400'>
                            <span className='text-green-900  text-4xl '><PiPlant /></span>Green<span className='text-amber-400'>T</span>alks
                            
                        </div>
      
       <p className='text-yellow-500 font-extrabold text-2xl'>Dashboard</p>
       <hr />
        <Link to="/dashboard" className="hover:underline font-bold text-gray-600">Overview</Link>
        <Link to="/dashboard/browse-tips" className="hover:underline font-bold text-gray-600">Browse Tips</Link>
        <Link to="/dashboard/share-tip" className="hover:underline font-bold text-gray-600">Share a Garden Tip</Link>
        <Link to="/dashboard/my-tips" className="hover:underline font-bold text-gray-600">My Tips</Link>
      </nav>

      <main className="flex-1 p-8">
      
        <Outlet />
      </main>
    </div>
  );
}
