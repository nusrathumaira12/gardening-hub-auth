import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';


const Login = () => {
const provider = new GoogleAuthProvider()
const {setUser} = useContext(AuthContext)
const navigate = useNavigate(); 
const location = useLocation()
const from = location?.state?.from

    const handleSubmit = e => {
        e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password)

      signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    
    const user = result.user;
    setUser(user);

    Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from ? from :"/")

  })
  .catch((error) => {
   
    Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
  });
    }

    const handleGoogleLogin = () => {
signInWithPopup(auth, provider)
.then(result => {
    const user = result.user;
    setUser(user);

    Swal.fire({
      icon: 'success',
      title: 'Google Login Successful!',
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(from ? from :"/")
})
.catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Google Login Failed',
      text: error.message,
    });
  });

    }

    return (
        <div className="card my-10  bg-green-900  max-w-sm mx-auto shrink-0 shadow-2xl mt-[80px] text-white">
        <div className="card-body">
        <h1 className="text-4xl font-bold text-center">Login Now</h1>
        <p className="text-sm text-center dark:text-gray-200">Don't have account?{' '}
            <NavLink to="/register" className="focus:underline   hover:underline text-amber-600">Register here</NavLink>
        </p>
          <form onSubmit={handleSubmit} className="fieldset">
           
            <label className="label">Email</label>
            <input type="email" name='email' className="input text-black dark:text-white" placeholder="Email" />
           
            <label className="label">Password</label>
            <input type="password" name='password' className="input text-black dark:text-white" placeholder="******" />
            <div className="my-2">
                <a className="link link-hover">Forgot password?</a>
                </div>
            <button className="btn border-none mt-4 bg-amber-400 text-white w-full">Login</button>

            
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="btn bg-amber-600  text-white hover:bg-amber-700 w-full">
          Continue with Google
        </button>
        </div>
      </div>



    );
};

export default Login;