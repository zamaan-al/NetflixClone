import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'

const Movie = () => {


    const { id } = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() => { 
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`).then((res) => {
            setMovie(res.data)
            console.log(res)

        })
    },[id])

    console.log(movie)

    return (
        <div className='ml-[500px]'>
                {movie.Title}
                <img src={movie.Poster} className="w-[500px] h-[500px]" />
        </div>
    )
}

export default Movie;
