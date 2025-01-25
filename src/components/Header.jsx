import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header=()=> {


  
  


  return (
    <div>
        <div className='absolute z-[10] flex  mt-[5px] '>
            <img src="./Netflix_Logo_PMS.png" className=" w-[190px] ml-[130px] " />
            <div className='ml-[840px] flex gap-2 '>
            
            <select className="select select-bordered border border-[#d2d0d0] max-w-xs bg-[#180404] text-[white]  h-[20px] mt-[15px] w-[120px]  hover:to-blue-950">
            <option disabled selected className='bg-white text-[black] '>English</option>
           
            <option className='bg-white text-[black] border '>Hindi</option>
            </select>
            <div className=''>
            <Link to="/signin"><button className="btn btn-sm  bg-red-600 text-[white] font-semibold mt-[16px] border-none hover:bg-red-700 w-[90px] h-[47px] ">Sign in </button></Link>
           

          
            </div>
            </div>
           

           
            
            <div></div>
        </div>
      
    </div>
  )
}

export default Header;
