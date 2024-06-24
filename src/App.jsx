import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Panel from './Panel'
import Blogs from './Blogs'
import AddBlogs from './AddBlogs'
import WatchBlogs from './WatchBlogs'
function App() {
  const [count, setCount] = useState(0)
  const Card = [
    {
      id: 1,
      recipeName: "Spaghetti Carbonara",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?quality=90&resize=440,400"
    },
    {
      id: 2,
      recipeName: "Chicken Alfredo",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMKwPHphv7OF-BjFFXVduk59Dl6aNqSGz5Q&s"
    },
    {
      id: 3,
      recipeName: "Beef Tacos",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMKwPHphv7OF-BjFFXVduk59Dl6aNqSGz5Q&s"
    },
    {
      id: 4,
      recipeName: "Vegetable Stir Fry",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMKwPHphv7OF-BjFFXVduk59Dl6aNqSGz5Q&s"
    }
  ];
  

  return (
    <Router>
<Routes>
<Route path='/' element={<Login/>}/>

<Route path='/Register' element={<Register/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/Home' element={<Home Card={Card}/>}/>
<Route path='/Panel' element={<Panel Card={Card}/>}/>
<Route path='/Blogs' element={<Blogs Card={Card}/>}/>
<Route path='/AddBlogs' element={<AddBlogs Card
={Card}/>}/>
<Route path='/SeeBlogs/:id' element={<WatchBlogs/>}/>
</Routes>
           </Router>
  )
}

export default App
