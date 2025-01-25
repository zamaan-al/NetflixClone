import React from 'react'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


function Signin() {
    return (
        <div>
            <div className='absolute z-[10] flex  mt-[5px] '>
                <img src="./Netflix_Logo_PMS.png" className=" w-[190px] ml-[130px] " />
            </div>
            <div className=''>
                <img src="./IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.png" className="   w-screen h-screen brightness-50" />
            </div>
            <div className=' signin  bg-black absolute mt-[-600px] ml-[530px] rounded-md w-[450px] h-[600px] opacity-80'>
                <h1 className='text-white font-bold text-3xl mt-10 ml-16'>Sign In</h1>
                <div>
                    <input className='rounded-md ml-16  w-[310px] text-[white] border border-white h-[50px] p-3 mt-8 opacity-70 bg-black ' type="email" placeholder='Email or mobile number ' />

                </div>
                <div>
                    <input className='rounded-md ml-16  w-[310px] text-[white] border border-white h-[50px] p-3 mt-3 opacity-70 bg-black ' type="password" placeholder='Password ' />

                </div>
                <div>
                    <Link to="/login"><button className="btn btn-sm text-base bg-red-600 border-none hover:bg-red-700 text-[white] font-semibold rounded-md ml-16  p-2 mt-3  h-[40px] w-[310px] ">Sign in</button></Link>

                </div>
                <div className=' ml-[210px] text-gray-300 mt-4'>OR</div>
                <div>
                    <button className="btn btn-sm text-base bg-[#3f3c3c] border-none hover:bg-[#2f2f2f] text-[white] font-semibold rounded-md ml-16  p-2 mt-4 h-[40px] w-[310px] ">Use a sign-in code</button>

                </div>
                <div className='ml-[160px] mt-4 text-white'><a className="hover:text-gray-300 hover:underline cursor-pointer">Forgot password?</a> 
                </div>
                <div className=''>
                    <div className='ml-[100px] mt-4 text-white'>Remember me</div>
                </div>
                <div className='flex mt-5 ml-[70px] gap-1'>
                    <div className='text-[#e0dcdc]'>New to Netflix?</div>
                    <div className='text-white font-semibold hover:underline cursor-pointer'>Sign up now.</div>
                </div>
                <div className='ml-[70px] flex text-xs mt-5 '>
                    <div className='text-[#898888] '>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot.<a className='text-blue-600 ml-1 hover:underline cursor-pointer'>Learn more.</a></div>
                    
                </div>
            </div>
           
            <div className='pt-[200px] h-[300px] bg-black'>
                <div className='pt-[150px] '><Footer /></div>

            </div>
            <div className='mt-[150px] ml-[170px]'>

                <select className="select select-bordered  max-w-xs bg-[#180404] text-[white]  h-[25px] mt-[15px] w-[120px]  hover:to-blue-950">
                    <option disabled selected className='bg-white text-[black] '>English</option>

                    <option className='bg-white text-[black]'>Hindi</option>
                </select>
            </div>
        </div>
    )
}

export default Signin;
