import React, { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners';

const ExploreGardeners = () => {
const [gardeners, setGardeners] = useState([])
const [loading, setLoading] = useState(true)

useEffect(()=> {
fetch("http://localhost:3000/gardeners")
.then(res => res.json())
.then(data => {
   
    setGardeners(data)
    setLoading(false)
})
.catch(error => {
    console.error("Failed to fetch gardeners", error)
    setLoading(false)
});
}, []);

if (loading) {
    return (
    <div className="text-center py-10 text-green-600 flex justify-center items-center h-30 font-bold gap-2">

        <DotLoader color="#22c55e" size={50}></DotLoader>
        <DotLoader color="#22c55e" size={50}></DotLoader>
        <DotLoader color="#22c55e" size={50}></DotLoader>
    </div>
    );
  }


    return (
        <div className="my-12 px-4 max-w-7xl mx-auto ">
             <h2 className="text-3xl font-bold mb-6 text-center text-green-800">🔍 Explore Gardeners</h2>
             <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 mx-auto w-[90%] '>
{gardeners.map(gardener => (
    
    <div 
    key={gardener._id}
   className="bg-white  shadow-lg overflow-hidden border border-green-100"
    >
         <img
              src={gardener.image}
              alt={gardener.name}
              className="w-full h-[290px] object-cover mx-auto"
            />
               <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">{gardener.name}</h3>
              <p className="text-sm text-gray-600">
                Age: {gardener.age} | Gender: {gardener.gender}
              </p>
              <p className="mt-2 text-gray-700">🧑‍🌾 {gardener.experience}</p>
              <p className="text-sm mt-1 text-gray-500">
                Total Shared Tips: {gardener.tipsShared}
              </p>
              <p>Status: {" "}
<span className={`font-semibold ${
    gardener.status === "active" ? "text-green-700" : "text-red-600"
}`}>
    {gardener.status}
</span>
              </p>
              {gardener.otherInfo && (
                <p className="text-sm mt-1 text-gray-600">
                  ℹ️ {gardener.otherInfo}
                </p>
              )}


    </div>
    </div>
))}
             </div>
        </div>
    );
};

export default ExploreGardeners;