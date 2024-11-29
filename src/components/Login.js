import React from 'react'
import Header from './Header'
import {useState} from 'react';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
       }
    return (
    <div>
    <Header />
    <div className='absolute'>
      
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_tall_panel/IN-en-20241125-TRIFECTA-perspective_fe8a8dbc-e13a-452e-a9c6-284b08c4f974_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-1e28eon"></img>
    </div>
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
    <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign IN":"Sign Up"}</h1>
        {isSignInForm && <input type="text" placeholder='Full Name' className='p-2 my-2 w-full'/>}
        <input type="text" placeholder='Email Address' className='p-2 my-2 w-full'/>
        <input type="password" placeholder='Password' className='p-2 my-2 w-full'/>
        <button className='p-4 my-4 bg-red-700 w-full'>Sign In</button>
        <p className="py-4" onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>
    </form>
    </div>
  )
}

export default Login
