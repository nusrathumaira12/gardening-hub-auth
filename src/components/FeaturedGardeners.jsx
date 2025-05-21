import React, { useEffect, useState } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { ClipLoader } from 'react-spinners';

const FeaturedGardeners = () => {

    const [gardeners, setGardeners] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/featured-gardeners')
        .then(res => res.json())
        .then(data => {
            setGardeners(data)
            setLoading(false)
        })
        .catch(error => {
            console.error("Failed to fetch featured gardeners:", error)
            setLoading(false);
        });
    }, [])

    if(loading){
        return (
            <div className="flex justify-center items-center h-30 font-bold gap-2">
              <ClipLoader color="#22c55e" size={30}></ClipLoader>  
              <ClipLoader color="#22c55e" size={40}></ClipLoader>  
              <ClipLoader color="#22c55e" size={50}></ClipLoader>  
            </div>
        );
    }

    return (
        <div className='text-white bg-amber-200 my-12 px-4'>
           <h2 className="text-3xl font-bold mb-6 text-center text-green-800">🌿 Featured Gardeners

           </h2>
           <Slide direction="left" duration={3000} cascade={true} damping={0.3} triggerOnce
           >
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {gardeners.map(gardener => 
           
                <div 
                 key={gardener._id}
                className='bg-gray-100 rounded-2xl shadow-lg overflow-hidden border border-green-100 transition-transform hover:scale-105 duration-300'>
                  <img src={gardener.image} alt={gardener.name}
                    className="w-full h-50 object-contain"
                  /> 
                  <div  className="p-4">
                  <h3 className="text-xl font-semibold text-green-700">{gardener.name}</h3>
                  <p className="text-sm text-gray-500">
                Age: {gardener.age} | Gender: {gardener.gender}
              </p>
              <p className="mt-2 text-gray-700">🧑‍🌾 {gardener.experience}</p>
              <p className="text-sm mt-1 text-gray-500">
                Total Shared Tips: {gardener.tipsShared}
              </p>
              <p className='text-sm mt-1'>
Status: {" "}
<span className={`font-semibold ${gardener.status === "active" ? "text-green-600" : "text-red-500"}`}> 
    {gardener.status}</span>
              </p>
                  </div>

                </div>
               
            )}
           
           </div>
           </Slide>
        </div>

        
        );

    }

export default FeaturedGardeners;