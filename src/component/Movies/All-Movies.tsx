import React, { useEffect, useState } from 'react'
import MovieCard from '../Common/card'
import MovieList from '../movie-list/movie-list'
import { getAllMovies } from '../../Api/movie'
import { IMovie} from '../../interface/imovie'

interface Props{
  setMovieId: (id:number) => void,
  movieId: number|null,
}

const AllMovies = ({setMovieId,movieId}:Props) => {
  const [movies, setMovies]= useState<IMovie[]>([])
  
  useEffect(()=>{
    getAllMovies()
    .then((res) => res && setMovies(res?.results))
    .catch((err) => console.log(err))
  },[])
  return (
    <div className='text-white'>
      <MovieList 
      movieId={movieId}
      movies={movies}
      setMovieId={setMovieId}
      />
      
    </div>
  )
}

export default AllMovies
