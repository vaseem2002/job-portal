import React, { useContext, useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { assets } from '../assets/assets';
import { Appcontext } from '../context/Appcontext';

const Hero = () => {

  const {setSearchFilter,setIssearched} = useContext(Appcontext)
   
 
    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIssearched(true)
        console.log({
           title: titleRef.current.value,
            location: locationRef.current.value
    })
    }
   

  return (
    <div className='container mx-auto my-10'>
      <div className='mt-10 rounded-lg bg-purple-800 container mx-auto text-center py-18'>
        <p className='text-white font-bold text-4xl pb-4'>Over 10,000+ jobs to apply</p>
        <p className='text-white w-170 mx-auto'>Your Next Big Career Move Starts Right Here - Explore
             the Best Job Opportunities and Take the First Step Toward Your Future!</p>

             <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl mt-4 py-1 pl-4 mx-4 sm:mx-auto'>
                 <CiSearch className='h-4 w-40 sm:h-5'/>
                <input type='text' placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full' ref={titleRef}/>
                <CiLocationOn className='h-5 w-60'/>
                <input type='text' placeholder='Location' className='max-sm:text-xs p-2 rounded outline-none w-full' ref={locationRef}/>
                <button className='bg-blue-600 px-6 py-2 rounded text-white m-1' onClick={onSearch} >Search</button>
             </div>
    </div>

    <div className='flex container gap-5  justify-evenly py-6 my-6 border border-gray-300 shadow '>
       <p className='font-bold'>Trusted by</p>
       <img className='h-6' src={assets.microsoft_logo} alt="" />
                <img className='h-6' src={assets.walmart_logo} alt="" />
                <img className='h-6' src={assets.accenture_logo} alt="" />
                <img className='h-6' src={assets.samsung_logo} alt="" />
                <img className='h-6' src={assets.amazon_logo} alt="" /> 
                <img className='h-6' src={assets.adobe_logo} alt="" />
    </div>
    </div>
   
  )
}

export default Hero