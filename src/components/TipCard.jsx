import React from 'react';
import { useNavigate } from 'react-router';

const TipCard = ({ tip, view = 'table' }) => {
  const navigate = useNavigate();
  const {
    _id,
    image,
    Title,      
    plantType,
    category,
    difficulty,
  } = tip;

  if (view === 'card') {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between">
        <img
          src={image || '/placeholder.jpg'}
          alt={Title}
          className="w-full h-40 object-cover rounded"
        />
        <div className="mt-4">
          <h3 className="text-lg font-bold">{Title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">🌿 {plantType}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">🗂 {category}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">⚙️ {difficulty}</p>
        </div>
        <button
          onClick={() => navigate(`/tips/${_id}`)}
          className="btn btn-sm mt-4 border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition"
        >
          👁 See More
        </button>
      </div>
    );
  }

  // Default: table row view
  return (
    <tr className="hover:bg-amber-100 transition">
      <td>
        <div className="font-bold">{Title}</div>
      </td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image || '/placeholder.jpg'} alt={Title} />
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="text-sm opacity-50">{plantType}</div>
        </div>
      </td>
      <td>{category}</td>
      <td>
        <span className="badge badge-ghost badge-sm">{difficulty}</span>
      </td>
      <td>
        <button
          onClick={() => navigate(`/tips/${_id}`)}
          className="btn btn-sm border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition"
        >
          👁 See More
        </button>
      </td>
    </tr>
  );
};

export default TipCard;
