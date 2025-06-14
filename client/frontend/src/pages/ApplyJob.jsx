import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Appcontext } from '../context/Appcontext';
import Loading from '../component/Loading.jsx'
import Navbar from '../component/Navbar.jsx';
import { assets } from '../assets/assets.js';
import Jobcard from '../component/Jobcard.jsx'
import Footer from '../component/Footer.jsx'

const ApplyJob = () => {

  const {id}  = useParams();
   
   const [jobData,setJobData] = useState(null)

   const {jobs} = useContext(Appcontext)

   const fetchdata = async () => {
      const data = jobs.filter(job => job._id  === id)
     if(data.length !== 0){
      setJobData(data[0])
      console.log(data[0])
     }      
   }
    
   useEffect(() => {
    if(jobs.length > 0 ){
    fetchdata()
    }
   },[id,jobs])
 

  return jobData ? (
    <>
    <Navbar/>
      <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
        <div className='bg-white text-black rounded-lg w-full'>
          <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl' >
            <div className='flex flex-col md:flex-row items-center'>
              <img className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"  src={jobData.companyId.image} alt=''/>
               <div className="text-center md:text-left text-neutral-700" >
              <h1 className="text-2xl sm:text-4xl font-medium" >{jobData.title}</h1>
              <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2" >
                <span className="flex items-center gap-1" >
                  <img src={assets.suitcase_icon} alt=''/>
                  {jobData.companyId.name}
                </span>
                <span className="flex items-center gap-1" >
                  <img src={assets.location_icon} alt=''/>
                  {jobData.location}
                </span>
                <span className="flex items-center gap-1" >
                  <img src={assets.person_icon} alt=''/>
                  {jobData.level}
                </span>
                <span className="flex items-center gap-1" >
                  <img src={assets.money_icon} alt=''/>
                 CTC:{jobData.salary}
                </span>
              </div>
            </div> 
            </div>
                <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center" >
            <button className="bg-blue-600 p-2.5 px-10 text-white rounded" >Apply now</button>
            <p className='mt-1 text-gray-600'>Posted 7 months ago</p>
          </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start" >
          <div className='w-full lg:w-2/3'>
            <h2 className='font-bold text-2xl b-4'>Job description</h2>
            <div className='rich-text' dangerouslySetInnerHTML={{__html:jobData.description}}></div>
            <button className="bg-blue-600 p-2.5 px-10 text-white rounded mt-10">Apply now</button>
          </div>

          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5" >
            <h2>More jobs from {jobData?.companyId?.name || "unkown jobs"}</h2>
            {Array.isArray(jobs) &&
              jobs.filter(
                (job) =>
                  job._id !== jobData?._id &&
                  job?.companyId?._id === jobData?.companyId?._id
              ).length > 0 ? (
                jobs
                  .filter(
                    (job) =>
                      job._id !== jobData?._id &&
                      job?.companyId?._id === jobData?.companyId?._id
                  )
                  .slice(0, 4)
                  .map((job, index) => (
                    <Jobcard key={job._id || index} job={job} />
                  ))
              ) : (
                <p class="text-gray-600 text-lg font-semibold text-center mt-4">
                  No more jobs from this company.
                </p>
              )}
          </div>
        </div>
      </div>
       <Footer/>
    </>
  ) : (
    <div>
    <Loading/>
    </div>
  )
}

export default ApplyJob