import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './table.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';

const Panel = ({Card}) => {
  const [data, setData] = useState([]);
  const [keyPass, setPass] = useState('');
  const [alert, setAlert] = useState(false);
  const key = '2468';
  const [style, setStyle] = useState('flex');
const fetchData=()=>{
  axios.get('http://localhost:5000/UserData')
      .then(res => {
        console.log(res.data); // Debugging line to check the fetched data
        setData(res.data);
      })
      .catch(err => console.error(err));
}
  useEffect(() => {
    
     fetchData()  
  }, []);
const deleteFunc=(email)=>{
  axios.delete('http://localhost:5000/delete',{data:{email}})
  .then(res=>console.log(res.data),
  
  fetchData()
  ).catch(err=>console.error(err))
  


}
  const hidePop = () => {
    if (keyPass === key) {
      setStyle('hidden');
    } else {
      setStyle('flex');
      setAlert(true);
    }
  };

  return (
    <div className='flex flex-col bg-white relative justify-center items-center w-screen min-h-[100vh]'>
     <Navbar card={Card}/>
      <div className={`popup min-h-[100vh] absolute backdrop-blur-sm ${style} items-center justify-center w-full z-50`}>
        <div className={`box p-5 ${style} flex-col shadow-md z-50 h-[200px] w-[270px] bg-white justify-center items-center rounded-md`}>
          <input
            type='password'
            value={keyPass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='Enter key'
            className='border-2 rounded-lg p-1 border-solid border-black'
          />
          {alert && <p className='text-sm my-5 text-red-500'>Wrong key!!!</p>}
          <button
            onClick={hidePop}
            className='my-3 bg-orange-400 p-2 text-white rounded-lg'
            type='submit'
          >
            Submit
          </button>
        </div>
      </div>
      <h1 className='text-xl font-bold my-5'>Admin Panel</h1>

      <table className='border-collapse border  border-gray-400 mt-8'>
        <thead>
          <tr>
            <th className='border border-gray-400 px-4 py-2'>id</th>
            <th className='border border-gray-400 px-4 py-2'>Name</th>
            <th className='border border-gray-400 px-4 py-2'>Email</th>
            <th className='border border-gray-400 px-4 py-2'>Buttons</th>
          </tr>
        </thead>
        <tbody >
          {data.map((user, index) => (
            <tr key={user._id}>
              <td className='border border-gray-400 px-4 py-2'>{index+1}</td>
              <td className='border border-gray-400 px-4 py-2'>{user.name}</td>
              <td className='border border-gray-400 px-4 py-2'>{user.email}</td>
              <td className='border border-gray-400 px-4 py-2'><button onClick={()=>deleteFunc
              (user.email)} className='p-2 bg-red-500 rounded text-white'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='w-full mt-8' style={{ height: 400 }}>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='id' fill='blue' />
            <Bar dataKey='name' fill='#000' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Panel;
