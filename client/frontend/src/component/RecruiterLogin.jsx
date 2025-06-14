import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Appcontext } from '../context/Appcontext'
import { assets } from '../assets/assets'

const RecruiterLogin = () => {

  const navigate = useNavigate()

  const [state,setState] = useState('Login')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const [image,setImage] = useState(null)
  const [isTextDataSubmitted,setIsTextDataSubmitted]  = useState(false)

  const {setShowRecruiterlogin} = useContext(Appcontext)

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset'
    }
  },[])

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
     <div>
      <form 
      onSubmit={''}
      className='relative bg-white p-10 rounded-xl text-slate-500'
      >
        <h1 className='text-center text-2xl text-neutral-700 font-medium'> Recruiter {state}</h1>
        {
          state === 'Sign Up' && isTextDataSubmitted ? (
            <div className='flex items-center gap-4 my-10'>
              <label className='w-16 rounded-full'>
                <img className='w-16' src={image ? URL.createObjectURL(image) : assets.upload_area} alt=''/>
                <input type='file'  hidden id='image'  onChange={setImage((e) => e.target.files[0])} />
               </label>
                <p>Upload company <br/> logo{' '}</p>
            </div>
          ) : (
            <>
            <p className='text-sm'> {state === 'Sign Up' ? 'create account to get started' : '' } </p>
            {
              state !== 'Login' && (
                <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5" >
                  <img src={assets.person_icon} alt=''/>
                  <input
                    className="outline-none text-sm"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Company Name"
                    required
                  />
                </div>
              )}

              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.email_icon} alt="Email Icon" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email ID"
                  required
                />
              </div>

              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.lock_icon} alt="Lock Icon" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              </>
          )}

          {state === 'Login' && (
            <p className="text-sm text-blue-600 mt-4 cursor-pointer">Forget passsword</p>
          )}
          <button type='submit' className="bg-blue-600 w-full text-white py-2 rounded-full mt-4" >
            {state === 'Login' ? 'Login' : isTextDataSubmitted ? 'Create Account' : 'Next'}
          </button>

           {state === 'Login' ? (
            <p className="mt-5 text-center">
              Don&apos;t have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState('Sign Up')}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="mt-5 text-center">
              Already have an account?{' '}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState('Login')}
              >
                Login
              </span>
            </p>
          )}
          <img
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowRecruiterlogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
      </form>
     </div>
    </div>
  )
}

export default RecruiterLogin