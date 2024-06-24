import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const onhandleSubmit=(e)=>{

     e.preventDefault();
     try{
    axios.post('http://localhost:5000/users',{name,email,password})
      .then(result=>{
        console.log(result);
        if(result.data.message==='success'){
            navigate('/login')
        }
    
    })
      .catch(err=>console.error(err))
      
    }catch(err){
     console.error(err);
    }}
  return(
    <div className='flex h-screen flex-col w-full items-center justify-center'>
        
        <form className='flex flex-col gap-5 shadow-lg  p-5 rounded' onSubmit={onhandleSubmit} >
         <input className='bg-white' type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter your name' />
         <input className='bg-white' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
         <input className='bg-white' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
        <button className='p-3 bg-blue-500 rounded-lg shadow-lg text-white font-bold' type='submit'>Submit</button>

            </form>
    </div>
  )
}

export default Register