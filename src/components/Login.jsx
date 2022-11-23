


import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';

function Login() {
    
    const {login, logout} = useContext(UserContext)
    function handleLogin (e) {
        e.preventDefault()
    //    const[username, password] = e.target.elements.value
        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
       login(username, password)
    }
  return (
   <div className='login'>
    <form onSubmit={handleLogin} className='formLogin'>
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <input type='submit' value='login' /> 
    </form>
    <button type='submit' onClick={logout} className='logout' >logout</button>
   </div>
  )
}

export default Login