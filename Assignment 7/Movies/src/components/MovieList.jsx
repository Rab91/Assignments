import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const MovieList =()=> {
  const [movies, setMovies] = useState(null);
  const handleMoviesList =()=>{

    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=abbb530b`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setMovies(data);
    })
    
  }
  useEffect(()=>{
      
      handleMoviesList();
  },[])
  
  return (
    <>
    <div className='mt-5'>
     
      <div>
      {
        movies!=null ? 
          <MovieCard title={movies.Title} poster={movies.Poster}/>: null
      }
      </div>
      
      
    </div>
     
        
    </>
  )
}

export default MovieList