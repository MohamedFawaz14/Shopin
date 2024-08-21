
import React, { useState,useEffect,useRef } from 'react';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username  && password ) 
      {
      handleLogin(true); 
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container  h-screen  flex justify-center items-center " 
    style={{backgroundImage:`url("Banner/bg.webp")`,
      backgroundSize:'cover',
      backgroundPosition: 'center',
      
      
    }}>
      
    <form onSubmit={handleSubmit} className='bg-black backdrop-filter backdrop-blur-xl bg-opacity-30 px-16 py-10 mx-3 rounded-3xl'>
        <div className=''>
        <img src='banner/Login-logo.png' alt='shopin-logo' style={{width:"250px"}} />
        <p className='text-white text-lg ms-1 mt-5 font-sans'>Username</p>
        <input
        ref={inputRef}
          type="text"
          placeholder="Eg:Shopin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required 
          className='mt-2 p-2 text-white  bg-transparent w-full rounded-md focus:outline-none placeholder:text-gray-50 border border-gray-50  border-1 font-thin placeholder:text-sm'
        />
        <p className='text-white text-lg mt-5 font-sans ms-1'>Password</p>
        <input
          type="password"
          placeholder="Eg:121212"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required className='mt-2 p-2 bg-transparent w-full rounded-md focus:outline-none text-white placeholder:text-stone-50 border border-gray-50 font-thin placeholder:text-sm'
        />
        </div>
        <button type="submit" className='text-white bg-transparent mt-5 ms-9 lg:ms-14 py-3 px-12 border  rounded-full text-lg font-bold bg-gray-50 '>Log In</button>
      </form> 
      
    </div>
  );
};

export default LoginPage;
