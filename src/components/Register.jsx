import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate(); 
    const location = useLocation()
    const from = location?.state?.from

    const handleRegister = e => {
e.preventDefault()
const form = e.target;
const formData = new FormData(form)

const {email, password, name, photo,...restFormData} = Object.fromEntries(formData.entries())

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
if (!passwordRegex.test(password)) {
  return Swal.fire({
    icon: 'error',
    title: 'Invalid Password',
    text: 'Password must be at least 8 characters long , include uppercase, lowercase, and a special character.',
  });
}




// create User in the firebase
createUser(email, password,name,photo)
.then(result => {

const userProfile = {
    name,
        email,
        photo,
        ...restFormData,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime
    }

    // save profile info in the db
    fetch('https://gardening-hub-server-seven.vercel.app/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userProfile)
    })
    .then(res => res.json())
    .then(data => {
        
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has been created successfully!!",
                showConfirmButton: false,
                timer: 1500
              });
              form.reset();
              navigate(from ? from :"/")
        }
    })
})
.catch(error => {
    Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message,
      });
    
})

    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
    
            const userProfile = {
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
              creationTime: user.metadata?.creationTime,
              lastSignInTime: user.metadata?.lastSignInTime,
            };

     // Save to DB
     fetch('https://gardening-hub-server-seven.vercel.app/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userProfile),
      });

      Swal.fire({
        icon: 'success',
        title: 'Signed in with Google!',
        timer: 1500,
        showConfirmButton: false,
        position: 'top-end',
      });
      navigate(from ? from :"/")
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Google Sign-In Failed',
        text: error.message,
      });
    });
};

    return (
       
         
          <div className="card bg-green-900  max-w-sm mx-auto shrink-0 shadow-2xl mt-[60px] text-white">
            <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label text-white">Name</label>
                <input type="text" name='name' className="input text-black dark:text-white" placeholder="Name"  />
                <label className="label text-white">Email</label>
                <input type="email" name='email' className="input text-black dark:text-white" placeholder="Email" />
                <label className="labe text-white">PhotoURL</label>
                <input type="PhotoURL" name='photo' className="input text-black dark:text-white" placeholder="PhotoURL" />
                <label className="label text-white">Password</label>
                <input type="password" name='password' className="input text-black dark:text-white" placeholder="******" />

                <div>
                <button className="btn border-none mt-4 bg-amber-400 text-white w-full hover:bg-amber-600">Register</button></div>
                <p className="px-6 text-sm text-center text-white">Already have an account?
                        <NavLink to="/login" className="text-amber-600 hover:underline">Log in</NavLink>
                    </p>

                   
        <div className="divider mt-4 text-white">OR</div>

<button onClick={handleGoogleSignIn} className="btn bg-amber-600 w-full text-white">
  Continue with Google
</button> 
              </form>
            </div>
          </div>
        
    );
};

export default Register;