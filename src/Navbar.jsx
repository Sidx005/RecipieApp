import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({card}) => {
  const[searchVal,setSearch]=useState('')
  const[dishList,setDish]=useState(card)
  const[show,setShow]=useState(false)
  const[showlist,setList]=useState(false)
  const changeVal = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === '') {
      setShow(!false)
      setDish(card);
      console.log(dishList);
    } else {
      const filterItems = card.filter((item) =>
        item.recipeName.toLowerCase().includes(value.toLowerCase())
      );
      setDish(filterItems);

    }
  };
 const bars=()=>{
setList(!showlist)
 }
  
  
  return (
    <div  className='w-full  fixed top-0 left-0 z-50 flex flex-col lg:flex-row md:flex-row sm:flex-col  shadow-md shadow-black p-5 text-xl justify-between bg-white' >
      <div className="logo ">
  <h1 className='text-orange-500 font-bold text-2xl'><Link to={'/Home'}>Gourmet Haven</Link></h1>   
      </div>
      <div className="searchDiv" >
      <input type="text" onClick={()=>setShow(!show)} value={searchVal} onChange={changeVal}  placeholder="Search" />
  {show && <div className='my-3 font-bold border-2 shadow-xl  rounded-xl p-2  overflow-y-scroll' >
      {dishList.map((products)=>(
       <li className='list-none hover:bg-blue-700 cursor-pointer hover:text-white'>{products.recipeName}</li>
      ))}
    </div>}
    
    </div>
    <button onClick={bars} className={`bar p-1 flex absolute top-5 right-3  md:hidden lg:hidden sm:flex  flex-col  gap-2`}>
      <p className=' w-[35px]  p-[2px]  bg-gray-700'></p>
      <p className=' w-[35px]  p-[2px]  bg-gray-700'></p>
      <p className=' w-[35px]  p-[2px]  bg-gray-700'></p>
    </button>
      <ul className={` ${showlist?'flex':'hidden'} w-full lg:w-[200xp] md:w-[200px] sm:w-full flex-col lg:flex-row lg:flex md:flex  md:flex-row  sm:gap-5  justify-between `}>
        <li className={`hover:bg-orange-400 p-1 transition-all duration-75 ease-linear sm:w-full hover:text-white rounded-lg transition-0.5`}><Link to={"/Home"}>Home</Link></li>
        <li className={`hover:bg-orange-400 p-1 transition-all duration-75 ease-linear sm:w-full hover:text-white rounded-lg transition-0.5`}><Link to={'/Blogs'} >Blogs</Link></li>
        <li className={`hover:bg-orange-400 p-1 transition-all duration-75 ease-linear sm:w-full hover:text-white rounded-lg transition-0.5`}><Link to={'/Panel'} >Panel</Link></li>
      </ul>
    </div>
  )
}

export default Navbar