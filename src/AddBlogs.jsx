import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const AddBlogs = () => {
    const[title,setTitle]=useState('');
    const[story,setBlog]=useState('');
    const[about,setAbout]=useState('');
    const[file,setFile]=useState()
    const handleSubmit=async (e)=>{
      e.preventDefault();
      console.log(file);

      const formData=new FormData();
      formData.append('title',title)
      formData.append('content',story)
      formData.append('about',about)
      formData.append('file',file);
      try{
        const response=await axios.post('http://localhost:5000/blogs',formData,{
          headers:{
            'Content-type' : 'multiport/form-data'
          }
          
        })
         if(response){
          console.log('success');
         }
      }catch(err){
        console.error(err);
        
      }}
    
  return (
    <div className='flex flex-col h-screen w-full '>
       <Navbar/>
<form  onSubmit={handleSubmit} className='my-[5%] p-5 grid grid-cols-auto-fill h-screen w-full '>
<h1 className='text-2xl '>Unleash your creativity</h1>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} className='my-7 border-2 p-3 rounded-lg border-gray' type="text" placeholder='Title' />
   <textarea value={story} onChange={(e)=>setBlog(e.target.value)} className='border-2 border-gray p-2 rounded-md' name="Story" id="" placeholder='Recipe' cols="50" rows="20"></textarea>
   <textarea value={about} onChange={(e)=>setAbout(e.target.value)} className='border-2 border-gray p-2 rounded-md' name="Story" id="" placeholder='Tell about yourself' cols="50" rows="20"></textarea>
   <input onChange={e=>setFile(e.target.files[0])} type="file"  name="thumbnail" id=""  />

   <button type='submit' className='bg-orange-700 p-2 my-5 rounded-lg text-white'>Submit</button>

    </form>     </div>
  )
}

export default AddBlogs