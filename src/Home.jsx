import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import Slider from './Slider'



const Home = ({Card}) => {
  const Chefs=[
    
    {
      "id": 1,
      "name": "Gordon Ramsay",
      "followers": 12500000,
      "stars":"⭐⭐⭐⭐",
    },
    {
      "id": 2,
      "name": "Alice Waters",
      "followers": 800000,
      "stars":"⭐⭐⭐",

    },
    {
      "id": 3,
      "name": "Massimo Bottura",
      "followers": 2200000,
      "stars":"⭐⭐⭐⭐",

    },
    {
      "id": 4,
      "name": "René Redzepi",
      "followers": 1500000,
      "stars":"⭐⭐⭐⭐",

    },
    {
      "id": 5,
      "name": "Dominique Crenn",
      "followers": 700000,
      "stars":"⭐⭐⭐⭐",

    },
    {
      "id": 6,
      "name": "David Chang",
      "followers": 1700000,
      "stars":"⭐⭐⭐",

    },
    {
      "id": 7,
      "name": "Yoshihiro Murata",
      "followers": 500000,
      "stars":"⭐⭐⭐",

    },
    {
      "id": 8,
      "name": "Helena Rizzo",
      "followers": 300000,
      "stars":"⭐⭐⭐",

    },
    {
      "id": 9,
      "name": "Joan Roca",
      "followers": 1100000,
      "stars":"⭐⭐",

    },
    {
      "id": 10,
      "name": "Ana Ros",
      "followers": 450000,
      "stars":"⭐⭐",

    }
  
  
]
  const[blogs,setBlog]=useState([])
  useEffect(()=>{
 const getBlog=async()=> { 
  await axios.get('http://localhost:5000/getBlogs')
 .then(res=>setBlog(res.data))}
 getBlog();
  },[])
  return (
    <div className="w-full overflow-hidden  min-h-[100vh] bg-slate-800">
        <Navbar card={Card} />
        <div className="Slider  flex justify-center text-center w-full ">
           <Slider />
        </div>
   <div className="About w-full flex lg:text-left lg:flex-row sm:flex-col-reverse md:flex-col-reverse md:items-center md:text-center sm:items-center sm:text-center sm:p-7 items-center text-center flex-col-reverse   bg-white">
<div className="describeAbout p-5 flex flex-col text-2xl gap-5 w-1/2">
<h1 className="text-red-500 text-4xl font-bold">About Us</h1>
<p>Welcome to <b>Gourmet Haven! </b>Discover a diverse collection of delicious recipes, step-by-step cooking guides, and expert tips. Perfect for both seasoned chefs and home cooks, our site offers everything you need to elevate your culinary skills. Join our community and share your love of cooking!</p>
</div>
<div className="img  h-full flex justify-center items-center w-1/2">
<img className='h-1/2 w-1/2' src={'https://as2.ftcdn.net/v2/jpg/01/99/85/83/1000_F_199858387_FymKsmjdD0Ss2el9eIstS7Y4UaBg5F6B.jpg'}/>
</div>
   </div>
   <div className="dishes-card w-full p-3 bg-white justify-evenly  gap-4 md:flex lg:flex-row md:flex-col sm:flex-col md:items-center lg:items-start    sm:justify-center sm:items-center sm:justify-center  ">
  <div className="dishes grid  md:grid-cols-2 md:w-full sm:w-full p-7 sm:grid-cols-1 gap-6  h-full  justify-items-center ">
    {
      Card.map((dish,index)=>(
        <div className="cards w-full h-[500px] mx-5 flex flex-col  justify-center shadow-black items-center text-center rounded-lg shadow-md p-5 bg-white">
         <img src={dish.imageUrl} className=' h-1/2 rounded-full'/>
         <h1>{dish.recipeName}</h1>
        </div>
      ))
    }
  </div>
  <div className="sideCard overflow-y-scroll md:w-full h-[700px] lg:w-1/2  sm:w-full ">
{
Chefs.map((chef,index)=>(
  <div className="chefs bg-white my-5 p-2 rounded-xl shadow-black shadow-sm ">
    <h2 className='font-bold text-xl '>{chef.name}</h2>
    <p>{chef.followers}</p>
    <p>{chef.stars}</p>
  </div>
))}
  </div>
   </div>
  <div className="blogs flex flex-col items-center justify-center text-center bg-white font-bold  p-5 ">
  <h1 className='text-2xl '>Blogs</h1>
  <div className="blogsDiv  grid gap-4 grid-cols-2">
    {blogs.slice(0,2).map((index)=>(
  <div className="flex flex-col items-center gap-4 text-xl my-5 shadow-lg   p-3 rounded-lg shadow-black ">
    {index.title}
    <img src={`http://localhost:5000/${index.file}`} className='h-[200px] w-[200px]' alt="" />
  </div>
))}
  </div>
<Link className='text-blue-700 underline' to='/Blogs'>Explore more Blogs</Link>

  </div>
    </div>
  )
}

export default Home