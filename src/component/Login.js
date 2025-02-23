import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Login() {
  const [loginInfo, setLoginInfo]= useState({
    email:'',
    password:''
  })

  const Navigate = useNavigate();
  const handleChange=(e)=>{
    const {name,value} = e.target;
    console.log(name, value);
    const copyLoginInfo = {...loginInfo};
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    const { email, password} = loginInfo;
    if( !email || !password){
      return handleError('email and password are required')
    }
    else{
      handleSuccess('successfully register')
      setTimeout(()=>{
        Navigate('/home')
      },1000)
    }
  }
  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='email'>email</label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            placeholder='enter your email'
            value={loginInfo.email}
          />
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='enter your password'
            value={loginInfo.password}
          />
        </div>
        <button>Login</button>
        <span>Doesn't have account:
          <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login
