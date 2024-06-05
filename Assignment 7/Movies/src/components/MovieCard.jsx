import React from 'react'

function MovieCard({title,poster}) {
  return (
    <div>
        <div className='pt-2 movie-card'>
              <img className='mx-auto d-block'
              src={poster} alt="" width="220px" />
            <p className='m-2 p-1 text-white'>{title}</p>
          </div>
    </div>
  )
}

export default MovieCard