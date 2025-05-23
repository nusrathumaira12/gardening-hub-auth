import React, { useContext, useEffect, useRef, useState } from 'react';
import { PiPlant } from 'react-icons/pi';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    
   const {user, logout} =useContext(AuthContext)
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const dropdownRef = useRef();
   const navigate = useNavigate()
    const {pathname} = useLocation()

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const handleLogout = () => {
    logout().then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Logged out successfully!',
        timer: 1500,
        showConfirmButton: false,
      });
      setDropdownOpen(false);
      navigate('/');
    });
  };



  
    
   
   
    return (
        <header className="p-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-200 font-semibold shadow">
	<div className="container flex justify-between h-20 mx-auto">
<div className='flex text-3xl font-bold items-center pt-3 text-green-900 dark:text-green-400'>
    <span className='text-green-900  text-4xl '><PiPlant /></span>Green<span className='text-amber-400'>T</span>alks
</div>
		
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<NavLink
                className="flex items-center px-4 -mb-1  border- text-gray-500 border-green-600"
                to="/"
                >Home</NavLink>
			</li>

			<li className="flex">
				<NavLink
                className="flex items-center px-4 -mb-1   text-gray-500 border-green-600"
                to="/gardeners"
                > Explore Gardeners</NavLink>
			</li>

			<li className="flex">
				<NavLink
                className="flex items-center px-4 -mb-1   text-gray-500  border-green-600"
                to="/browse-tips"
                > Browse Tips</NavLink>
			</li>
			{

                user && <>
                <li className="flex">
				<NavLink
                className="flex items-center px-4 -mb-1  text-gray-500 border-green-600"
                to="/shareTip"
                >Share a Garden Tip</NavLink>
			</li>
                

            <li className="flex">
				<NavLink
                className="flex items-center px-4 -mb-1   text-gray-500 border-green-600"
                to="/my-tips"
                > My Tips</NavLink>
			</li>
			
                </>
            }
		
		</ul>

        <div className="relative flex items-center space-x-3" ref={dropdownRef}>
        {!user ? (

		<>



			<button onClick={()=> navigate("/login")} className={`self-center px-8 py-3 rounded ${pathname== "/login"? "text-green-800" : ""}`}>Log in</button>
			<button onClick={()=> navigate("/register")} className={`self-center px-8 py-3 rounded ${pathname== "/register"? "text-green-800" : ""}`}>Register</button>
		</>
        ) : (
            <>
            
            <img
                src={user.photoURL || "/user.png"}
                alt="Profile"
                className="w-11 h-11 rounded-full cursor-pointer border-2 border-amber-400 sm:justify-end "
                data-tooltip-id="profile-tooltip"
                data-tooltip-content={user.displayName || "User"}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

<Tooltip id="profile-tooltip" place="bottom" />
              {dropdownOpen && (
                <div className="absolute top-14 right-0 w-32 bg-white text-black rounded shadow z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            
            </>
        )}

<ThemeToggle />
        </div>

		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Header;