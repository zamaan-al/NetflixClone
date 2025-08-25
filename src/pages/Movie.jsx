import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [querry, setQuerry] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  // search suggestions
  useEffect(() => {
    if (querry.trim() !== "") {
      axios
        .get(
          `http://www.omdbapi.com/?s=${querry}&apikey=${
            import.meta.env.VITE_API_KEY
          }`
        )
        .then((res) => {
          setSearchResult(res.data.Search || []);
        });
    } else {
      setSearchResult([]);
    }
  }, [querry]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <div className="flex items-center fixed top-0 w-full bg-black/80 backdrop-blur-md px-10 py-3 z-50">
        <img
          src="/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="w-[120px] mr-10"
        />

        {/* Search */}
        <div className="relative ml-auto">
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
            src="/search.svg"
            alt="search"
            className="absolute left-3 top-2.5 size-5 opacity-70"
          />

          {querry && searchResult.length > 0 && (
            <div className="absolute mt-2 w-64 bg-black/90 border border-gray-700 rounded shadow-lg max-h-60 overflow-y-auto z-50">
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

        <img src="/bell.svg" className="size-5 ml-6" alt="bell" />
        <img
          src="/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.jpeg"
          className="ml-6 h-8 rounded-md"
          alt="profile"
        />
      </div>

      {/* Movie Details */}
      <div className="pt-28 flex justify-center items-center p-10">
        <div className="flex flex-col md:flex-row max-w-5xl bg-black/60 rounded-2xl shadow-lg overflow-hidden">
          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full md:w-[350px] h-[500px] object-cover"
            />
          </div>

          {/* Movie Info */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-3">{movie.Title}</h1>
              <p className="text-gray-300 italic mb-2">
                {movie.Released} • {movie.Runtime} • {movie.Genre}
              </p>
              <p className="text-yellow-400 font-semibold mb-4">
                ⭐ {movie.imdbRating} / 10
              </p>
              <p className="text-gray-200 leading-relaxed">{movie.Plot}</p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-white">Director:</span>{" "}
                {movie.Director}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <span className="font-semibold text-white">Actors:</span>{" "}
                {movie.Actors}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">Language:</span>{" "}
                {movie.Language}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition">
                ▶ Watch Trailer
              </button>
              <button className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 transition">
                + Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
