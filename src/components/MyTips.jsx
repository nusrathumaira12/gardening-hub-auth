import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`https://gardening-hub-server-seven.vercel.app/my-tips?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyTips(data));
    }
  }, [user]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to undo this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonColor: '#d33',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://gardening-hub-server-seven.vercel.app/tips/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your tip has been removed.', 'success');
              setMyTips(prev => prev.filter(tip => tip._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10 bg-amber-200">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center bg-amber-200">🌱 My Shared Tips</h2>

      {myTips.length === 0 ? (
        <p className="text-gray-600 text-center">You haven't added any tips yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-green-100 text-green-900">
                <th>Title</th>
                <th>Plant Type</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTips.map(tip => (
                <tr key={tip._id} className="hover:bg-amber-50">
                  <td className="font-semibold">{tip.Title}</td>
                  <td>{tip.plantType}</td>
                  <td>{tip.category}</td>
                  <td>{tip.difficulty}</td>
                  <td>
                    <span className={`badge ${tip.availability === 'Public' ? 'badge-success' : 'badge-warning'}`}>
                      {tip.availability}
                    </span>
                  </td>
                  <td className="flex flex-col md:flex-row gap-2 mt-2 md:mt-0">
                    <button
                      onClick={() => navigate(`/update-tip/${tip._id}`)}
                      className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
                    >
                      ✏️ Update
                    </button>
                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTips;
