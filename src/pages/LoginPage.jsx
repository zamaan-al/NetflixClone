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
      if (res.data.Response === 'True') {
        setSearchResult(res.data.Search)
      }
    })
  }, [querry])

  return (
    <div className="overflow-x-hidden"> {/* ✅ Hides horizontal scrollbar */}
      <div className="w-screen">
        <div className="absolute flex">
          <img
            src="AAAABWisVU2QHDsEHacwxJy6WlaBXE6YlPaUK0nJkc70rvd5d7F5M11iqXr-r1gumm80JvoAHx9HbI7_KoWktBoiGFaTi4NrdlzLIoKb.png"
            className="w-screen brightness-75 mt-[-10px]"
          />

          {/* Navbar */}
          <div className="flex items-center fixed top-0 z-50 w-full bg-black/80 px-8 py-3">
            {/* Netflix Logo */}
            <img
              src="./Netflix_Logo_PMS.png"
              className="w-[120px] opacity-90 cursor-pointer"
            />

            {/* Push everything else to the right */}
            <div className="flex-1" />

            {/* Search Input + Dropdown */}
            <div className="relative mr-6">
              <input
  type="text"
  placeholder="Search..."
  className="bg-black/70 border border-gray-500 rounded px-4 py-2 pl-10 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
  name="querry"
  value={querry}
  onChange={(e) => setQuerry(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // stop form submit if inside a form
      if (searchResult.length > 0) {
        // simulate "click" -> open first search result
        window.location.href = `/movie/${searchResult[0].imdbID}`;
      }
    }
  }}
/>
              <img
                src="./search.svg"
                alt="search"
                className="absolute left-3 top-2.5 size-5 opacity-70"
              />

              {/* Suggestions Dropdown */}
              {querry && searchResult.length > 0 && (
                <div className="absolute mt-2 w-64 bg-black/90 border border-gray-700 rounded shadow-lg max-h-60 overflow-y-auto z-50">
                  {/* ✅ Added Top Searches Header */}
                  <div className="px-4 py-2 text-gray-400 font-semibold border-b border-gray-700">
                    Top Searches
                  </div>
                  {searchResult.map((data) => (
                    <Link
                      key={data.imdbID}
                      to={`/movie/${data.imdbID}`}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition"
                    >
                      {data.Title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Bell Icon */}
            <img src="./bell.svg" className="size-5 mr-6 cursor-pointer" />

            {/* Profile */}
            <img
              src="./AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.jpeg"
              className="h-8 rounded-md cursor-pointer"
            />
          </div>

          {/* Movie Banner Section */}
          <div className="absolute mt-[95px] ml-[60px]">
            <img
              src="./AAAABVht9eQ4Ym0ed_RNtQh3De19vAN0R7GkN24vlY_PmkdKEw8STn8b40Tz2ORTqA5AeDZoSHxFRom0xhnqxRGQpRm3rqOAHTFz4tU7N-O6o_h6.png"
              className="w-[545px]"
            />
            <div className="flex gap-4">
              <div className="bg-red-600 w-[37px] h-[38px] rounded-sm text-center font-bold text-white font-serif pt-[1px] mt-5">
                <p className="text-[13px] ml-[-1px]">Top</p>
                <p className="mt-[-12px] text-[20px] ml-[-3px]">10</p>
              </div>
              <div className="text-white mt-6 text-2xl font-bold">
                #3 in Movies Today
              </div>
            </div>
            <div className="mt-4 text-white text-lg">
              A young man in Chennai rises through the ranks of the Indian army
              <br />
              while navigating love and sacrifice in this "soul stirring action
              film"
              <br />
              (The Hindu).
            </div>
            <div className="mt-5 flex gap-3">
              <button className="flex pl-9 bg-white w-[128px] h-[45px] rounded-md text-lg gap-1">
                <img src="./play-fill.svg" className="ml-[-20px] size-11" />
                <p className="mt-2 ml-[-2px] font-bold">
                  <a href="https://www.youtube.com/embed/hylIXfZeB4c?si=XBlzdLfFLWQLfMq3">
                    Play
                  </a>
                </p>
              </button>
              <button className="flex pl-9 bg-[#615d5d] w-[170px] h-[45px] rounded-md opacity-85 text-lg gap-1">
                <img
                  src="./download (3).svg"
                  className="ml-[-20px] size-7 mt-2"
                />
                <p className="mt-2 text-white font-semibold ml-2">More info</p>
              </button>
            </div>
          </div>
        </div>

        {/* Carousels with Subheadings */}
        <div className="pt-[680px] pl-10">
          
          <Caurosel />
        </div>

        <div className="bg-black h-fit w-screen mt-[-35px]">
          <div className="pt-[120px] pl-10">
            <h2 className="text-white text-2xl font-bold mb-3">Popular on Netflix</h2>
            <Caurosel1 />
          </div>

          <div className="pt-[120px] pl-10">
            <h2 className="text-white text-2xl font-bold mb-3">New Releases</h2>
            <Caurosel2 />
          </div>

          <div className="pt-[250px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
