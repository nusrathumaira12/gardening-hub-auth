import React from 'react';
import { PiPlant } from 'react-icons/pi';

const AboutUs = () => {
  return (
    <div className="text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <div
  className="relative h-72 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1663076048408-db9a5bed2b21?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
  }}
>
  <div className="absolute inset-0  flex items-center justify-center">
    <div className="text-center px-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-white flex items-center justify-center gap-2">
        <PiPlant className="text-green-400 text-5xl" /> About <span className="text-amber-400">Us</span>
      </h1>
      <p className="text-lg mt-3 text-gray-200">Growing Together, One Garden at a Time.</p>
    </div>
  </div>
</div>


      {/* Who We Are Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-600">🌿 Who We Are</h2>
        <p className="text-lg leading-relaxed">
          Gardening Hub is a community-driven platform designed for garden enthusiasts of all levels.
          Whether you're nurturing a tiny balcony herb pot or managing a lush backyard garden,
          our goal is to provide you with knowledge, tools, and connections to make your gardening journey fruitful.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-green-600">🌱 What We Do</h2>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>📖 Provide expert gardening tips and guides.</li>
            <li>🤝 Enable users to share their own garden wisdom.</li>
            <li>🌎 Connect gardeners from all around the world.</li>
            <li>📸 Let users showcase their plants, progress, and success stories.</li>
          </ul>
        </div>
      </div>

      {/* Community Image Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-green-600">🧑‍🤝‍🧑 Our Growing Community</h2>
        <img
          src="https://images.unsplash.com/photo-1717528149805-ac983a14125a?q=80&w=2252&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Community"
          className="w-full h-150 object-cover rounded-lg shadow-lg"
        />
        <p className="text-lg mt-6 leading-relaxed">
          We believe in learning and growing together. Our platform thrives on collaboration,
          encouragement, and the shared joy of turning a patch of soil into a beautiful garden.
          Every member contributes to this green journey — and we’re so glad you’re here.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
