import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import Home from '../pages/Home'
import { useNavigate } from 'react-router'
import { Appcontext } from '../context/Appcontext'

const Navbar = () => {
  const navigate = useNavigate()

  const  {setShowRecruiterlogin} = useContext(Appcontext)
         
  return (
    <div className='shadow py-3'>
     <div className='flex justify-between py-4 items-center container px-4 mx-auto' >
        <div>
            <img onClick={() => navigate('/')} src={assets.logo} alt=''/>
        </div>
        <div className='flex gap-10'>
         <button onClick={e => setShowRecruiterlogin(true)} > Recruiter Login</button> 
            <button className='bg-blue-600 text-white px-7 py-2 rounded-4xl'>Login</button>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar