import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser} = use(AuthContext)
    console.log(createUser)

    const handleRegister = e => {
e.preventDefault()
const form = e.target;
const formData = new FormData(form)

const {email, password, ...restFormData} = Object.fromEntries(formData.entries())






// create User in the firebase
createUser(email, password)
.then(result => {
   
    console.log(result.user)
    const user = result.user


    const userProfile = {
        email,
        ...restFormData,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime
    }

    // save profile info in the db
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userProfile)
    })
    .then(res => res.json())
    .then(data => {
        // console.log('after profile save', data)
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created successfully!!",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
})
.catch(error => {
    console.log(error)
})

    }
    return (
       
         
          <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">PhotoURL</label>
                <input type="PhotoURL" name='photo' className="input" placeholder="PhotoURL" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="******" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        
    );
};

export default Register;