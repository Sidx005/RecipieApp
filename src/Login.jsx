import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const[mail,setMail]=useState('')
     const[password,setPassword]=useState('')
     const navigate=useNavigate()
 const handle=(e)=>{
    e.preventDefault()
    try{
        axios.post('http://localhost:5000/Loginusers',{email:mail,password})
        .then(res=>{console.log('Sucess');
        if(res.data.message==='Success')
        {alert('Success')
        console.log(res.data);
        navigate('/Home')

    }if(res.data.message==='Incorrect password'){
  

}if(res.status===404){
    alert("User does not exist")
}
})
    }catch(err){
        console.error(err);
    }
 }
  return (
    <div style={{backgroundImage:'url(https://i.pinimg.com/550x/2f/b7/53/2fb753b62bae0671edde1dc3e630649f.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='flex flex-col justify-center h-screen w-full items-center'>
        <form onSubmit={handle} className='flex shadow-lg backdrop-blur-md	 p-6 h-[300px] items-center flex-col justify-center gap-5 '>
            <input className='p-5 rounded-md bg-white shadow-lg' type="email" value={mail} onChange={(e)=>setMail(e.target.value)}  required/>
            <input className='p-5 rounded-md bg-white shadow-lg' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
            <button className='shadow-md shadow-black w-1/2 rounded-lg p-2 bg-green-300 text-white font-bold  text-center' type="submit">Submit</button>
        </form>
   <Link to={'/Register'} className='text-blue-700 underline font-bold '>Don't have an accont?</Link>
    </div>
  )
}

export default Login