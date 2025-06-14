
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Application from './pages/Application'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import ManageJob from './pages/ManageJob'
import ViewApplication from './pages/ViewApplication'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import RecruiterLogin from './component/RecruiterLogin'
import { useContext } from 'react'
import { Appcontext } from './context/Appcontext'
import 'quill/dist/quill.snow.css'

function App() {
  
  const {showRecruiterLogin} = useContext(Appcontext)
 
  return (
   <>
   {showRecruiterLogin && <RecruiterLogin/>}
   <ToastContainer/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/apply-job/:id' element={<ApplyJob/>}/>
     <Route path='/application' element={<Application/>}/>
     <Route path='/dashboard' element={<Dashboard/>}>

     <Route path='add-job' element={<AddJob/>}/>
     <Route path='manage-job' element={<ManageJob/>}/>
     <Route path='view-application' element={<ViewApplication/>}/>
     
     </Route>


     </Routes>
   </>
  )
}

export default App
