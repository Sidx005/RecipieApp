import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Blogs = ({Card}) => {
const[data,setData]=useState([])
useEffect(()=>{ 
const getBlogs=async ()=>{
   try{const blogFech=await axios.get('http://localhost:5000/getBlogs')
   setData(blogFech.data);
   }catch(err){
    console.error(err);
   }

   
  }
getBlogs();
},[])
  return (
    <div>
        <Navbar card={Card}/>
        <button className="Add fixed bottom-1 w-[100px] rounded-full flex items-center justify-center text-[50px] text-white font-bold text-center  h-[100px] bg-blue-800 left-1/2 translate-x-[-50%]"><Link to={'/AddBlogs'}>+</Link></button>
       <div className="container my-[20%] flex justify-center items-center ">
       <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-2 gap-5">
           {data.map((blogs)=>(
            <div className="boxes flex flex-col  items-center  h-[auto] w-[400px] shadow-black shadow-lg p-7 ">
          <h1><strong className='text-[30px]'>{blogs.title}</strong> </h1>  
        <img className='h-[200px] my-5 rounded-md shadow-xl  w-[200px]' src={`http://localhost:5000/${blogs.file}`} alt="" />
         <p>{blogs.content.slice(0,150)}<b>......</b></p>
         <Link to={`/SeeBLogs/${blogs._id}`}>Read full blog here</Link>
         </div>
           )) }
            
        </div>
       </div>
       
    </div>
  )
}

export default Blogs