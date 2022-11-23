

import React from 'react'
import { Link } from 'react-router-dom'

function People({item}) {
  return (
    <Link to={`/singlePage/${item.id}`} >
    <div className='searchBoxItems'>
        <img
            className='searchBoxImage'
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.profile_path}`}
        />
        <p>{item.name}</p>
    </div>
    </Link>
  )
}

export default People