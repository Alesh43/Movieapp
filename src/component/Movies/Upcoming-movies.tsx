import { useEffect, useState } from "react"
import { IMovie } from "../../interface/imovie"
import { getUpcomingMovies } from "../../Api/movie"
import MovieList from "../movie-list/movie-list"

const UpcomingMovies = () => {
    const [movies, setMovies]= useState<IMovie[]>([])
    
    useEffect(()=>{
      getUpcomingMovies()
      .then((res) => res && setMovies(res?.results))
      .catch((err) => console.log(err))
    },[])
    return (
      <div className='text-white'>
        {/* <MovieList movies={movies}/> */}
        
      </div>
    )
  }
  
  export default UpcomingMovies
  