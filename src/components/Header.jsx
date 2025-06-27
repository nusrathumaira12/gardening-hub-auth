import React, { useContext, useEffect, useRef, useState } from 'react';
import { PiPlant } from 'react-icons/pi';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';



const Header = () => {
    const [theme, setTheme] = useState('light');
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, logout } = useContext(AuthContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();
    const navigate = useNavigate()
    const { pathname } = useLocation()

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




    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme('dark');
        }

    }, []);

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };


    return (
        <header className="py-3 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-200 font-semibold shadow">
            <div className="flex md:mx-6 mx-2 justify-between h-15">
              
                
                <div className='flex text-3xl font-bold items-center pt-3 text-green-900 dark:text-green-400'>
                    <span className='text-green-900  text-4xl '><PiPlant /></span>Green<span className='text-amber-400'>T</span>alks
                </div>

                <ul className={`flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-3 absolute lg:static bg-white dark:bg-gray-900 left-0 top-20 w-full lg:w-auto px-4 py-2 shadow lg:shadow-none z-40  ${menuOpen ? 'block' : 'hidden'} lg:flex`}>
                    <li className="flex">
                        <NavLink

                            className="flex items-center px-4 -mb-1   text-gray-500 border-green-600 dark:text-white"
                            to="/"
                            onClick={() => setMenuOpen(false)}
                        >Home</NavLink>
                    </li>

                    <li className="flex">
                        <NavLink
                            className="flex items-center px-4 -mb-1   text-gray-500 border-green-600 dark:text-white"
                            onClick={() => setMenuOpen(false)}
                            to="/gardeners"
                        > Explore Gardeners</NavLink>
                    </li>

                    <li className="flex">
                        <NavLink
                            className="flex items-center px-4 -mb-1   text-gray-500  border-green-600 dark:text-white"
                            onClick={() => setMenuOpen(false)}
                            to="/browse-tips"
                        > Browse Tips</NavLink>
                    </li>

                    <li className="flex">
  <NavLink
    to="/about"
    onClick={() => setMenuOpen(false)}
    className="flex items-center px-4 -mb-1 text-gray-500 border-green-600 dark:text-white"
  >
    About Us
  </NavLink>
</li>

                    {

                        user && <>
                            <li className="flex">
                                <NavLink
                                    className="flex items-center px-4 -mb-1  text-gray-500 border-green-600 dark:text-white"
                                    onClick={() => setMenuOpen(false)}
                                    to="/shareTip"
                                >Share a Garden Tip</NavLink>
                            </li>


                            <li className="flex">
                                <NavLink
                                    className="flex items-center px-4 -mb-1   text-gray-500 border-green-600 dark:text-white"
                                    onClick={() => setMenuOpen(false)}
                                    to="/my-tips"
                                > My Tips</NavLink>
                            </li>

                        </>
                    }


                    {!user && (
                        <>
                            <li className="lg:hidden">
                                <NavLink
                                    to="/login"
                                    className="block w-full text-left  px-4 py-2 text-gray-700 dark:text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Log In
                                </NavLink>
                            </li>
                            <li className="lg:hidden">
                                <NavLink
                                    to="/register"
                                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-white"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                </NavLink>
                            </li>
                        </>
                    )}



                </ul>

                <div className="relative flex items-center justify-end w-full md:w-auto sm:mr-0 space-x-3" ref={dropdownRef}>


                    <button
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        className="w-9 h-9 rounded-full bg-gray-500 dark:bg-green-700 hover:bg-gray-700 dark:hover:bg-green-600 transition-colors sm:justify-end"
                    >
                        {theme === 'dark' ? (
                            <span className="text-yellow-300 text-xl">☀️</span>
                        ) : (
                            <span className="text-gray-700 text-xl">🌙</span>
                        )}
                    </button>

                    {!user ? (

                        <div className="hidden lg:flex  space-x-3">



                            <button onClick={() => navigate("/login")} className={`self-center btn py-3  rounded ${pathname == "/login" ? "text-green-800" : ""}`}>Log in</button>
                            <button onClick={() => navigate("/register")} className={`self-center btn py-3  rounded ${pathname == "/register" ? "text-green-800" : ""}`}>Register</button>
                        </div>

                    ) : (
                        <>



                            <img
                                src={user.photoURL || "/user.png"}
                                alt="Profile"
                                className="w-11 h-11 rounded-full md:mr-3 sm:justify-end cursor-pointer border-2 border-amber-400 "
                                data-tooltip-id="profile-tooltip"
                                data-tooltip-content={user.displayName || "User"}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            />

                            <Tooltip id="profile-tooltip" place="bottom" />
                            {dropdownOpen && (
                                <div className="absolute  top-14 right-0 w-32 bg-white text-black rounded shadow z-50">
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


                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="p-4 lg:hidden dark:text-green">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;