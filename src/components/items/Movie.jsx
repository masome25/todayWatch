

import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from './../UserContext';

function Movie({item}) {
  const {imgUrl} = useContext(UserContext)
  return (
    <Link to={`/singlePage/${item.id}`} className='searchBoxItems'>
        <img  src={item.poster_path ?  `${imgUrl}/${item.poster_path}` : '/image/movie_default.jpg'}  />
         <div>
         <span>{item.title}</span><br/>
         <span>{item.media_type}</span>
         </div>   
    </Link>
  )
}

export default Movie