import React from 'react';

const Reviews = () => {
    return (
        <div>
              <section className="py-6 my-10">
			
	<div>
		<div className="flex flex-col items-center w-full   py-8 space-y-6 lg:h-full lg:py-8 bg-green-900 text-white">
        <span onClick={(e) => alert(`Rated ${[...e.target.innerText].indexOf('⭐') + 1} stars`)}>⭐ ⭐ ⭐ ⭐ ⭐</span>
			
			<blockquote className="max-w-lg text-lg  font-medium text-center">🌼 “Easy to use and full of creative ideas.A wonderfully helpful platform for garden lovers — packed with practical and inspiring tips! A must-visit for anyone looking to grow greener!"</blockquote>
         
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5ZtxUT0FaEWRul-7wpFasVx6b2Y1imFh_g&s" alt="" className="w-20 h-20 rounded-full bg-gray-500 border-2" />
			<div className="text-center justify-center text-white font-bold">

            
           
           
			

				<p>Jhankar Mahbub</p>
				<p>CEO of Programming Hero</p>
				</div>
			<div className="flex space-x-2">
				<button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full bg-gray-900"></button>
				<button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full bg-gray-400"></button>
				<button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full bg-gray-400"></button>
				<button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full bg-gray-400"></button>
			</div>
			
		</div>
		
	</div>
</section>
        </div>
    );
};

export default Reviews;