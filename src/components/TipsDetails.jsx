import { useLoaderData } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const TipDetails = () => {
  const tip = useLoaderData();
  const [likes, setLikes] = useState(tip.totalLiked || 0);

  const handleLike = () => {
    fetch(`http://localhost:3000/tips/like/${tip._id}`, {
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
      <img src={tip.image} alt={tip.Title} className="w-full h-64 object-cover rounded mb-4" />
      <p><strong>Plant Type:</strong> {tip.plantType}</p>
      <p><strong>Category:</strong> {tip.category}</p>
      <p><strong>Difficulty:</strong> {tip.difficulty}</p>
      <p><strong>Description:</strong> {tip.description}</p>

      <div className="mt-4">
        <button onClick={handleLike} className="btn btn-success">
          👍 Like ({likes})
        </button>
      </div>
    </div>
  );
};

export default TipDetails;
