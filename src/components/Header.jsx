import React, { useContext } from 'react';
import { PiPlant } from 'react-icons/pi';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
   const {user} =useContext(AuthContext)
   console.log(user)
    const navigate = useNavigate()
    const {pathname} = useLocation()
    console.log(pathname)
    // const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");


    // useEffect(() => {
    //     const root = window.document.documentElement;
    //     if (isDark) {
    //       root.classList.add("dark");
    //       localStorage.setItem("theme", "dark");
    //     } else {
    //       root.classList.remove("dark");
    //       localStorage.setItem("theme", "light");
    //     }
    //   }, [isDark]);
    return (
        <header className="p-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-200 font-semibold shadow">
	<div className="container flex justify-between h-16 mx-auto">
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
                to="/browseTips"
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

		<div className="items-center flex-shrink-0 hidden lg:flex">

  {/* Theme Toggle Button */}
  {/* <button
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm dark:text-white"
          >
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </button> */}


			<button onClick={()=> navigate("/login")} className={`self-center px-8 py-3 rounded ${pathname== "/login"? "text-green-800" : ""}`}>Log in</button>
			<button onClick={()=> navigate("/register")} className={`self-center px-8 py-3 rounded ${pathname== "/register"? "text-green-800" : ""}`}>Register</button>
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