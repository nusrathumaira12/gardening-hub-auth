import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Eye } from "lucide-react"; // Optional icon library

const AddTips = () => {
  const [tips, setTips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await fetch("/api/tips"); 
        const data = await response.json();
        const publicTips = data.filter((tip) => tip.status === "public");
        setTips(publicTips);
      } catch (error) {
        console.error("Failed to fetch tips:", error);
      }
    };

    fetchTips();
  }, []);

  const handleAddTips = e => {
    e.preventDefault()
    const form = e.target;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📋 Browse Tips</h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <form onSubmit={handleAddTips}>
        <table className="min-w-full bg-white text-sm border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{tip.title}</td>
                <td className="px-4 py-2 capitalize">{tip.category}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => navigate(`/tip/${tip._id}`)}
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Eye size={18} />
                    <span className="hidden sm:inline">See More</span>
                  </button>
                </td>
              </tr>
            ))}
            {tips.length === 0 && (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                  No public tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </form>
      </div>
    </div>
  );
};

export default AddTips;
