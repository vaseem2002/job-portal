import React, { useEffect, useRef, useState } from 'react'
import { JobCategories, JobLocations } from '../assets/assets'
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const AddJob = () => {

  const [title,setTitle] = useState('')
  const [location,setLocation] = useState('bangalore')
  const [category,setCategory]  = useState('programming')
  const [level,setLevel] = useState('Beginner level')
  const [salary,setSalary] = useState(0)

  const editorRef = useRef(null)
  const quillRef = useRef(null)
   
  useEffect(() => {
    if(!quillRef.current && editorRef.current){
      const quillInstance = new Quill(editorRef.current,{theme:'snow'})
      quillRef.current = quillInstance
    }
  },[])

  return (
    <div>
     <form className='container p-4 flex flex-col w-full items-start gap-3'>
     <div className='w-full'>
      <p className='mb-2'>Job title</p>
      <input type='text' placeholder='Type here' onChange={(e) => setTitle(e.target.value)} value={title} className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'/>
     </div>
      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div ref={editorRef} className='border-2 border-gray-300 rounded p-2 min-h-[150px]'></div>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='my-1'>Job category</p>
           <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2 border-2 border-gray-300 rounded'>
           {
            JobCategories.map((category,index) => (
              <option value={category} key={index} >{category}</option>
            ))
           }
            
           </select>
        </div>

        <div>
          <p className='mb-2'>Job Location</p>
          <select value={location} onChange={(e) => setLocation(e.target.value)} className='w-full px-3 py-2 border-2 border-gray-300 rounded' >
            {
              JobLocations.map((location,index) => (
                <option key={index} value={location} >{location}</option>
              ))
            }
          </select>
        </div>

        <div>
          <p className='mb-2' >Job Level</p>
          <select value={level} onChange={(e) => setLevel(e.target.value)} className='w-full py-3 py-2 border-2 border-gray-300 rounded' >
           <option>Beginner level</option>
           <option>Intermediater level</option>
           <option>Senior level</option>
          </select>
        </div>
      </div>
      

      <div>
        <p className='mb-2' >Job Salary</p>
        <input type='number' placeholder='25000'  onChange={(e) => setSalary(e.target.value)} value={salary} className='w-full px-3 py-2 border-2 border-gray-300 rounded' />
      </div>

      <button
          type="submit"
          className="w-28 py-3 mt-4 bg-black text-white rounded self-start"
        >
          ADD
        </button>
     </form>
    </div>
  )
}

export default AddJob