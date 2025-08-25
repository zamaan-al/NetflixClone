import React from 'react'
import { Link } from 'react-router-dom';

function GetStarted() {
  return (
    <div>
      {/* Header */}
      <div className='flex items-center justify-between mt-2 border-b border-gray-200 px-4 sm:px-8 lg:px-12'>
        <img
          src="./Netflix_Logo_PMS.png"
          className="w-[120px] sm:w-[160px] lg:w-[200px]"
          alt="Netflix Logo"
        />
        <div>
          <Link
            to="/signin"
            className="bg-white text-[#1f1e1e] font-bold text-base sm:text-lg md:text-xl px-4 py-2 rounded hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col items-center text-center px-4 sm:px-6 md:px-8 mt-16'>
        {/* Device Icons */}
        <div className='flex gap-3 sm:gap-5 justify-center'>
          <img src="laptop.svg" className="w-8 sm:w-12 md:w-16" alt="Laptop" />
          <img src="tv.svg" className="w-10 sm:w-14 md:w-20 -mt-2" alt="TV" />
          <img src="tablet.svg" className="w-6 sm:w-10 md:w-12 mt-1" alt="Tablet" />
          <img src="phone.svg" className="w-5 sm:w-7 md:w-8 mt-2 -ml-3" alt="Phone" />
        </div>

        {/* Step Info */}
        <div className='font-semibold flex text-xs sm:text-sm text-[#383737] mt-6 gap-1'>
          STEP <p className='font-bold text-black'>1</p> OF <p className='font-bold text-black'>4</p>
        </div>

        {/* Headings */}
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold mt-4'>
          Finish setting up your <br className="hidden sm:block" /> account
        </h1>
        <p className='text-sm sm:text-base md:text-lg text-[#383737] mt-4'>
          Netflix is personalised for you. <br className="hidden sm:block" />
          Create a password to watch on any <br className="hidden sm:block" />
          device at any time.
        </p>

        {/* Next Button */}
        <button className='mt-6 bg-red-600 hover:bg-red-700 text-white font-medium text-lg sm:text-xl md:text-2xl w-full sm:w-[280px] md:w-[320px] lg:w-[365px] h-[55px] sm:h-[60px] md:h-[65px] rounded-md'>
          Next
        </button>
      </div>
    </div>
  )
}

export default GetStarted;
