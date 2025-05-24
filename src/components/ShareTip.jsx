import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

const ShareTip = () => {
const {user} = useContext(AuthContext)
const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
       
        const newTip = Object.fromEntries(formData.entries())
       
        newTip.email = user?.email;
        newTip.userName = user?.displayName;


        // send tip data to the db
        fetch('http://localhost:3000/tips', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(newTip)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
               
                Swal.fire({
                    title: "Your valuable tips added successfully!",
                    icon: "success",
                    draggable: true
                  });

                  form.reset()
                  navigate('/my-tips');
            }
        })
    }
    return (
        <div className="max-w-5xl mx-auto mt-12  p-5 rounded-lg bg-green-700  text-black dark:text-white shadow transform ">
            <h2 className="text-3xl font-semibold text-center w-2/5 mx-auto text-white bg-amber-400 rounded-xl p-2 mb-8">Share a Garden Tip</h2>

            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Title</label>
                        <input type="text" name='Title' className="input w-full" placeholder="Title " />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Plant Type</label>
                        <input type="text" name='plantType' className="input w-full" placeholder="Plant Type" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
  <label className="label">
    <span className="label-text font-semibold">Difficulty Level</span>
  </label>
  <select
    name="difficulty"
    className="select select-bordered w-full"
   
    required
  >
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>
</fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Tips " />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Images url</label>
                        <input type="text" name='image' className="input w-full" placeholder="Tips " />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
  <label className="label">
    <span className="label-text font-semibold">Category</span>
  </label>
  <select
    name="category"
    className="select select-bordered w-full"
    
    required
  >
    <option value="Composting">Composting</option>
    <option value="Plant Care">Plant Care</option>
    <option value="Vertical Gardening">Vertical Gardening</option>
    <option value="Indoor Plants">Indoor Plants</option>
    <option value="Hydroponics">Hydroponics</option>
  </select>
</fieldset>


                    <fieldset className="fieldset bg-base-200 border border-base-300 rounded-box p-4">
  <label className="label">
    <span className="label-text font-semibold">Availability</span>
  </label>
  <select
    name="availability"
    className="select select-bordered w-full"
    required
    
  >
    <option value="Public">Public</option>
    <option value="Hidden">Hidden</option>
  </select>
</fieldset>


        


                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                <label className="label font-semibold">User Name & Email</label>
                <div className="bg-gray-100 text-sm p-2 rounded dark:text-black">
                <p><strong>Name:</strong> {user?.displayName}</p>
                <p><strong>Email:</strong> {user?.email}</p>
        </div>
        </fieldset>

        <input type="submit" className='btn w-full rounded-2xl btn-success text-white bg-amber-400' value="Share Tip" />
            </form>
        </div>
    );
};

export default ShareTip;