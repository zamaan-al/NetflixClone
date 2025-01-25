import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Caurosel from '../components/Caurosel';
import Caurosel1 from '../components/Caurosal1';
import Caurosel2 from '../components/Caurosal2';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginPage() {


  const [querry, setQuerry] = useState("")
  const [searchResult, setSearchResult] = useState([])

  console.log(import.meta.env.VITE_API_KEY)

  useEffect(() => {
    axios.get(`https://omdbapi.com/?s=${querry}&apikey=${import.meta.env.VITE_API_KEY}`).then((res) => {
      console.log(res);
      if (res.data.Response === 'True') {
        setSearchResult(res.data.Search)
      }

    })
  }, [querry])

  useEffect(() => {
    console.log(window.scrollY);
  }, [])

  return (
    <div className=' overflow-x-hidden '>
      <div className='w-screen '>
        <div className='absolute  flex       '>
          <img src="AAAABWisVU2QHDsEHacwxJy6WlaBXE6YlPaUK0nJkc70rvd5d7F5M11iqXr-r1gumm80JvoAHx9HbI7_KoWktBoiGFaTi4NrdlzLIoKb.png" className="w-screen  brightness-75 mt-[-10px]   " />
          <div className=' flex  fixed top-0 z-50 '>
            <img src="./Netflix_Logo_PMS.png" className=" w-[120px] ml-[50px] opacity-90 mt-2 " />
            <div className='absolute right-36 top-5'>
              <input type="text" className='opacity-50 text-black font-bold' name="querry" id="" value={querry} onChange={(e) => setQuerry(e.target.value)} />
              <div className='bg-cyan-400'>
                {querry && searchResult.map((data) => {
                  return (
                    <div key={data.imdbID}>
                      <Link to={`/movie/${data.imdbID}`}>{data.Title}</Link>
                    </div>
                  )
                })}
              </div>
            </div>
            <img src="./search.svg" className="size-5 ml-[1150px] mt-5 " />
            <img src="./bell.svg" className="size-5 ml-[30px] mt-5" />
            <img src="./AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.jpeg" className="ml-[30px] h-8 mt-3 rounded-md" />
          </div>

          <div className='absolute mt-[95px] ml-[60px]  '>
            <img src="./AAAABVht9eQ4Ym0ed_RNtQh3De19vAN0R7GkN24vlY_PmkdKEw8STn8b40Tz2ORTqA5AeDZoSHxFRom0xhnqxRGQpRm3rqOAHTFz4tU7N-O6o_h6.png" className="w-[545px]" />
            <div className='flex gap-4'>
              <div className='bg-red-600 w-[37px] h-[38px] rounded-sm text-center font-bold text-white font-serif pt-[1px] mt-5 '><p className=' text-[13px] ml-[-1px]'>Top</p><p className='mt-[-12px] text-[20px] ml-[-3px] '>10</p></div>
              <div className='text-white mt-6 text-2xl font-bold'>#3 in Movies Today</div>

            </div>
            <div className='mt-4 text-white text-lg '>A young man in Chennai raises through the ranks of the indian army <br />while navigating love and sacrifice in this "soul stirring action film" <br />(The Hindu).</div>
            <div className='mt-5 flex gap-3'>

              <button className='flex  pl-9 bg-white w-[128px] h-[45px] rounded-md   text-lg  gap-1' >
                <img src="./play-fill.svg" className="ml-[-20px] size-11 " /><p className='mt-2 ml-[-2px] font-bold'> <a href="https://www.youtube.com/embed/hylIXfZeB4c?si=XBlzdLfFLWQLfMq3">Play</a></p>
              </button>
              <button className='flex  pl-9 bg-[#615d5d] w-[170px]  h-[45px] rounded-md opacity-85  text-lg  gap-1'>
                <img src="./download (3).svg" className="ml-[-20px] size-7 mt-2 " /><p className='mt-2 text-white font-semibold ml-2 '>More info</p>
              </button>


            </div>


          </div>

        </div>

        <div className='pt-[680px] pl-10'><Caurosel /></div>
        <div className='bg-black h-fit w-screen mt-[-35px]  '>
          <div className='pt-[120px] pl-10 '><Caurosel1 /></div>
          <div className='pt-[120px] pl-10'><Caurosel2 /></div>
          <div className='pt-[250px]'><Footer /></div>
        </div>

      </div>
      






    </div>
  )
}

export default LoginPage;
