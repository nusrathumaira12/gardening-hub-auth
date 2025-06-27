import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthContext';


const StatCard = ({ title, value, color = 'bg-green-100' }) => (
  <div className={`p-4 ${color} rounded shadow`}>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default function Overview() {
  const { user , logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const [totalTips, setTotalTips] = useState(0);
  const [myTips, setMyTips] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [nonActiveUsers, setNonActiveUsers] = useState(0);

  useEffect(() => {
    if (!user?.email) return;

    fetch('https://gardening-hub-server-seven.vercel.app/tips')
      .then(res => res.json())
      .then(data => {
        setTotalTips(data.length);
        const mine = data.filter(tip => tip.email === user.email);
        setMyTips(mine.length);
      })
      .catch(console.error);
  }, [user]);

  useEffect(() => {
    fetch('https://gardening-hub-server-seven.vercel.app/gardeners')
      .then(res => res.json())
      .then(data => {
        const active = data.filter(g => g.status === "active").length;
        const inactive = data.filter(g => g.status === "inactive").length;
        setActiveUsers(active);
        setNonActiveUsers(inactive);
      })
      .catch(console.error);
  }, []);

  const handleLogout = () => {
    logout().then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Logged out successfully!',
        timer: 1500,
        showConfirmButton: false,
      });
      navigate('/');
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 mt-10">Welcome Back</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        <StatCard title="Total Tips" value={totalTips} />
        <StatCard title="My Tips" value={myTips} />
        <StatCard title="Active Gardeners" value={activeUsers} color="bg-blue-100" />
        <StatCard title="Non-Active Gardeners" value={nonActiveUsers} color="bg-red-100" />
      </div>

      <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 border border-green-100 relative">
      <div
  className="h-[216px] bg-center bg-cover"
  style={{
    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663076048408-db9a5bed2b21?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
  }}
></div>


        <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
        <img
  className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
  src={user?.photoURL || fallbackImg}
  onError={(e) => (e.target.src = fallbackImg)}
  alt={user?.displayName || "User"}
/>

        </div>

        <div className="pt-20 pb-6 px-6 text-center">
          <h2 className="text-xl font-bold text-green-800">{user?.displayName || "Anonymous User"}</h2>
          <p className="text-sm text-gray-600">{user?.email}</p>
          <p className="text-sm text-green-700 mt-1">🌱 Gardening Enthusiast</p>

          <p className="text-gray-700 text-sm mt-4">
            Welcome to your dashboard! Stay inspired and keep sharing your green wisdom 🌿
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={handleLogout}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-4 rounded text-sm">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
