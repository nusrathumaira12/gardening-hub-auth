import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';


const Login = () => {
const provider = new GoogleAuthProvider()
const {setUser} = useContext(AuthContext)

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
        <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl my-10">
        <div className="card-body">
        <h1 className="text-5xl font-bold">Login Now</h1>
        <p className="text-sm text-center dark:text-gray-600">Don't have account?{' '}
            <NavLink to="/register" className="text-blue-600 focus:underline   hover:underline">Register here</NavLink>
        </p>
          <form onSubmit={handleSubmit} className="fieldset">
           
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
           
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="******" />
            <div className="my-2">
                <a className="link link-hover">Forgot password?</a>
                </div>
            <button className="btn btn-neutral w-full mt-4">Login</button>

            
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="btn bg-red-500 text-white hover:bg-red-600 w-full">
          Continue with Google
        </button>
        </div>
      </div>



    );
};

export default Login;