import React, { useEffect } from 'react'
import MovieCard from '../Common/card'
import { IMovie } from '../../interface/imovie'

interface Props{
    movies:IMovie[]
}

const MovieList = ({movies}:Props) => {
    
  return (
    
    <div className='grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-7 xl:grid-cols-6 gap-5 p-5'>
        {
         movies.map((movie,idx)=>(
            <div key={idx}>
            <MovieCard movie={movie}/>
            </div>
         ))   
        }
    </div>
    
  )
}

export default MovieList
