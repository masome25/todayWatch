

import React from 'react'
import { Link } from 'react-router-dom'

function Movie({item}) {
  return (
    <Link to={`/singlePage/${item.id}`}>
    <div className='searchBoxItems'>
        <img
         className='searchBoxImage'
         src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
         />
        <p>{item.title}</p>
    </div>
    </Link>
  )
}

export default Movie