import React from 'react'
import { Link } from 'react-router-dom';

function GetStarted() {
  return (
    <div>
         <div className=' flex  mt-[5px] border-b border-gray-200  '>
            <img src="./Netflix_Logo_PMS.png" className="justify-start w-[200px] ml-[30px] " />
            <div className='flex gap-2 '>
            
            
            <div className='ml-[1190px]'>
            <div className=" bg-white text-[#1f1e1e] font-bold mt-[24px] text-xl  hover:underline border border-none w-[90px] h-[47px] "><Link to="/signin">Sign in </Link></div>
           

          
            </div>

            </div>
            </div>
         <div className='justify-items-center'>
         <div className=' flex mt-36 gap-5 '>
            <img src="laptop.svg" className="size-16 " />
            <img src="tv.svg" className="size-20 mt-[-15px]" />
            <img src="tablet.svg" className="size-12 mt-2" />
            <img src="phone.svg" className="size-8 mt-6 ml-[-30px]" />
            
          </div>
          <div className=' font-semibold flex  text-xs text-[#383737] mt-6 gap-1 '>STEP <p className='font-bold text-black'>1</p>  OF <p className='font-bold text-black'>4</p>    </div>
          <div className='text-[35px] text-center font-semibold '>Finish setting up your <br /> account</div>
          <div className='text-center text-lg'>Netflix is personalised for you. <br /> Create a password to watch on any <br />device at any time.
          </div>
          <button className='flex pl-40 pt-3 hover:bg-red-700 bg-red-600 w-[365px] h-[65px] rounded-md mt-3 font-medium text-[24px]   text-white'>Next</button>
         </div>
           


      
    </div>
  )
}

export default GetStarted;
