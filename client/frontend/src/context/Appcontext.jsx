import React, { createContext, useEffect, useState } from 'react'
import { jobsData } from '../assets/assets';

export const Appcontext = createContext()


export const AppcontextProvider = (props) => {
     const [searchFilter,setSearchFilter] = useState({
      title:'',
      location:''
});
    
     const [isSearched,setIssearched] = useState(false)
     
     
     
     const [jobs,setJobs] = useState([])

     const [showRecruiterLogin,setShowRecruiterlogin] = useState(false)

     
     const fetchjobs = async () => {
      setJobs(jobsData)
     }
 
     useEffect(() => {
        fetchjobs()
     },[])

     


  const value = {
      searchFilter,setSearchFilter,isSearched,setIssearched,jobs,setJobs,showRecruiterLogin,setShowRecruiterlogin
  }

  return (
   <Appcontext.Provider value={value}>
     {props.children}
   </Appcontext.Provider>
  )
}

