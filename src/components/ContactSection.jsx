import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-10 bg-white shadow-md rounded-lg">
      
     
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg border-4 border-green-200">
          <img
            src="https://plus.unsplash.com/premium_photo-1663089153028-2d7b5e01d0f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Farmer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

     
      <div className="w-full lg:w-1/2 space-y-4">
        <h4 className="uppercase text-gray-500 font-semibold tracking-widest">Contact Now</h4>
        <h2 className="text-4xl font-bold text-green-800">Leave Us A Message</h2>
        <p className="text-gray-600 font-semibold">
          Have any gardening tips, questions, or need support? Drop us a message and we'll get back to you!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            rows="4"
            placeholder="Write Message"
            className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-600 transition-colors text-white font-semibold py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
