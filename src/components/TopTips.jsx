import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopTips = () => {
    const [tips, setTips] = useState([])

useEffect(()=> {

    fetch('http://localhost:3000/top-tips')
    .then(res => res.json())
    .then(data => setTips(data))
}, [])



    return (
        <section className="max-w-7xl mx-auto px-4 mt-12">
        <h2
  className="text-3xl font-bold text-center text-green-700 my-8"
  style={{
    animation: 'zoom 2s ease-in-out infinite',
  }}
>
🌟  Top Trending Tips  🌟 
</h2>

<style>
{`
@keyframes zoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
`}
</style>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip._id}
              className="bg-green-50 dark:bg-gray-900rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                {tip.Title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {tip.description?.slice(0, 100)}...
              </p>
              <Link to={`/tips/${tip._id}`} className="text-amber-500 hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
};

export default TopTips;