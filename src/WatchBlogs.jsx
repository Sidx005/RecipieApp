import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Navbar from './Navbar'

const WatchBlogs = () => {
    const [fullBlogs,setFull]=useState('')
    const{id}=useParams();
    const[loading,setLoading]=useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getBlogs');
                const blog = response.data.find(m =>m._id === id);
                setFull(blog);
                setLoading(false)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);
  return (
    <div >
       {loading? <p>Loading</p>: <><Navbar/>
        <div className=" my-[6rem] flex flex-col p-5 font-bold" >
          
                <h1 className='text-5xl mb-6'>{fullBlogs.title}</h1>
                <img src={`http://localhost:5000/${fullBlogs.file}`} className='sm:h-[300px] sm:w-[300px]' alt="" />
                <p className=' my-5 font-normal text-justify '>{fullBlogs.content}</p>
        </div>
        </>
        }
    </div>
  )
}

export default WatchBlogs