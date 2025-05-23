import React from 'react';
import { useLoaderData } from 'react-router';
import TipCard from './TipCard';

const BrowseTips = () => {
    const tips = useLoaderData()
  
    console.log(tips)

    if(!tips){
        return (
            <div className="flex justify-center items-center h-30 font-bold gap-2">
              <ClipLoader color="#22c55e" size={30}></ClipLoader>  
              <ClipLoader color="#22c55e" size={40}></ClipLoader>  
              <ClipLoader color="#22c55e" size={50}></ClipLoader>  
            </div>
        );
    }



    return (
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
                    tips.map(tip => <TipCard key={tip._id} tip={tip}></TipCard>)
                }
          </tbody>
          </table>
        </div>
    );
};

export default BrowseTips;