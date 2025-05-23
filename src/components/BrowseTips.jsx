import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TipCard from './TipCard';
import { ClipLoader } from 'react-spinners';

const BrowseTips = () => {
    const tips = useLoaderData()
    const [difficulty, setDifficulty] = useState('All');
 

    if(!tips){
        return (
            <div className="flex justify-center items-center h-30 font-bold gap-2">
              <ClipLoader color="#22c55e" size={30}></ClipLoader>  
              <ClipLoader color="#22c55e" size={40}></ClipLoader>  
              <ClipLoader color="#22c55e" size={50}></ClipLoader>  
            </div>
        );
    }

    const filteredTips = difficulty === 'All'
    ? tips
    : tips.filter(tip => tip.difficulty === difficulty);



    return (
        <div className="p-4">
     
        <div className="mb-4 flex items-center gap-4">
          <label className="text-lg font-semibold text-green-700">Filter by Difficulty:</label>
          <select
            className="select select-bordered max-w-xs"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>





        <div className="overflow-x-auto border-2 border-green-600">


<table className="table w-full ">
        <thead className='bg-amber-400 text-white'>
          <tr>

            <th>Title</th>
            <th>Image</th>
            <th>Plant Type</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Action</th>

          </tr>
        </thead>
           
            <tbody >
                {
                    filteredTips.length > 0
                 ?   filteredTips.map(tip => <TipCard key={tip._id} tip={tip}></TipCard>)
                 : <tr><td colSpan="6" className="text-center py-6">No tips found for selected difficulty.</td></tr>
                }
          </tbody>
          </table>
        </div>
        </div>
    );
};

export default BrowseTips;