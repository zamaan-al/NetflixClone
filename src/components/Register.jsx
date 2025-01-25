import React from 'react'
import { Link } from 'react-router-dom';

const Register=()=> {
  return (
    <div>
       <div className=' mt-[-290px] absolute text-[white] ml-[500px]'>
         <div className='font-normal text-[17px]'>Ready to watch? Enter your email to create or restart your membership.</div>
         <div className='gap-3 flex mt-1'>
            <input className='ml-[-30px] w-[380px] border border-white h-[50px] p-3 mt-3 opacity-70 bg-black ' type="email" placeholder='Email address '/>
            <Link to="/register"><button className='flex p-2  pl-5 bg-red-600 w-[210px] h-[52px] rounded-md mt-3 font-medium text-[24px]  gap-1'><p className='flex'>Get Started</p> <p className='ml-[20px]'>❯</p></button></Link>
         </div>
         
       </div>
    </div>
  ) 
}

export default Register;
