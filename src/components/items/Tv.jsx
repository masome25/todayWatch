

import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from './../UserContext';

function Tv({item}) {
  const {imgUrl} = useContext(UserContext)
  return (
    <Link to={`/singlePage/${item.id}`} className='searchBoxItems' >
         <img  src={item.poster_path ?  `${imgUrl}/${item.poster_path}` : '/image/movie_default.jpg'}  />
      <div>
         <span>{item.name}</span><br/>
         <span>{item.media_type}</span>
      </div>
    </Link>
  )
}

export default Tv