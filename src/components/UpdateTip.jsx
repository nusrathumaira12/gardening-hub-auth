import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const UpdateTip = () => {
    const {id} = useParams()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const [tip, setTip] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/tips/${id}`)
          .then(res => res.json())
          .then(data => setTip(data));
      }, [id]);

      const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const updatedTip = {
          Title: form.Title.value,
          plantType: form.plantType.value,
          difficulty: form.difficulty.value,
          category: form.category.value,
          image: form.image.value,
          availability: form.availability.value,
          description: form.description.value,
        };

        fetch(`http://localhost:3000/tips/${id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTip),
        })
        .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Tip updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/my-tips');
        }
      });
  };

  if (!tip) {
    return <div className="text-center mt-10 text-lg text-gray-700">Loading tip...</div>;
  }


    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-gray-100 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-green-800">✏️ Update Your Garden Tip</h2>
  
        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="Title" defaultValue={tip.Title} className="input input-bordered w-full" required />
          <input name="plantType" defaultValue={tip.plantType} className="input input-bordered w-full" required />
  
          <select name="difficulty" defaultValue={tip.difficulty} className="select select-bordered w-full" required>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
  
          <select name="category" defaultValue={tip.category} className="select select-bordered w-full" required>
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Indoor Plants">Indoor Plants</option>
            <option value="Hydroponics">Hydroponics</option>
          </select>
  
          <input name="image" defaultValue={tip.image} className="input input-bordered w-full" required />
          <select name="availability" defaultValue={tip.availability} className="select select-bordered w-full" required>
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
  
          <textarea name="description" defaultValue={tip.description} className="textarea textarea-bordered md:col-span-2" rows={4} required />
  
          <fieldset className="bg-gray-200 p-4 rounded md:col-span-2">
            <legend className="text-sm font-semibold mb-2">👤 User Info</legend>
            <p><strong>Name:</strong> {user?.displayName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </fieldset>
  
          <button type="submit" className="btn btn-success md:col-span-2">✅ Update Tip</button>
        </form>
      </div>
    );
};

export default UpdateTip;