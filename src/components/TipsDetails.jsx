import { useLoaderData } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaHeart, FaQuoteLeft } from "react-icons/fa";

const TipDetails = () => {
  const tip = useLoaderData();
  const [likes, setLikes] = useState(tip.totalLiked || 0);

  const handleLike = () => {
    fetch(`https://gardening-hub-server-seven.vercel.app/tips/like/${tip._id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setLikes(prev => prev + 1);
          Swal.fire({
            icon: "success",
            title: "Liked!",
            timer: 1000,
            showConfirmButton: false,
            position: "top-end"
          });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow text-green-900">
      <h2 className="text-3xl font-bold mb-4">{tip.Title}</h2>
      <img 
      src={tip.image} 
      alt={tip.Title}
       className="w-full h-64 object-cover rounded mb-4 border border-amber-300" />
       <div className="space-y-2 text-sm">
        <p><strong>🌱 Plant Type:</strong> {tip.plantType}</p>
        <p><strong>🏷️ Category:</strong> {tip.category}</p>
        <p><strong>🔥 Difficulty:</strong> {tip.difficulty}</p>
      </div>
      
      <div className="mt-4 text-gray-800">
        <p><strong>Description:</strong> {tip.description}</p>
      </div>

      <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
        <h4 className="text-green-800 font-semibold">🌿 Gardening Tip:</h4>
        <p>Water your plants early in the morning or late afternoon to reduce water loss through evaporation.</p>
      </div>

      {/* Quote Section */}
      <div className="mt-6 border-l-4 border-amber-400 pl-4 italic text-sm text-gray-700">
        <FaQuoteLeft className="inline text-amber-500 mr-2" />
        "To plant a garden is to believe in tomorrow." – Audrey Hepburn
      </div>

      <div className="mt-4">
        <button onClick={handleLike} className="btn bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded flex items-center gap-2">
        <FaHeart /> Like ({likes})
        </button>
      </div>
    </div>
  );
};

export default TipDetails;
