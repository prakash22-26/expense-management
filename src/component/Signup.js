import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Signup() {
  const [signupInfo, setSignupInfo]= useState({
    name:'',
    email:'',
    password:''
  })

  const Navigate = useNavigate();
  const handleChange=(e)=>{
    const {name,value} = e.target;
    console.log(name, value);
    const copySignupInfo = {...signupInfo};
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }

  const handleSingup = (e)=>{
    e.preventDefault();
    const {name, email, password} = signupInfo;
    if(!name || !email || !password){
      return handleError('name,email and password are required')
    }
    else{
      handleSuccess('successfully register')
      setTimeout(()=>{
        Navigate('/login')
      },1000)
    }
  }
  return (
    <div className='container'>
      <h1>Signup</h1>
      <form onSubmit={handleSingup}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            onChange={handleChange}
            type='text'
            name='name'
            autoFocus
            placeholder='enter your name'
            value={signupInfo.name}
          />
        </div>
        <div>
          <label htmlFor='email'>email</label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='enter your email'
            value={signupInfo.email}
          />
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='enter your password'
            value={signupInfo.password}
          />
        </div>
        <button>Signup</button>
        <span>Already have account:
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup
