

import React from 'react'
import { Link } from "react-router-dom";
import { UserContext } from './UserContext'
import { useContext, useState, useEffect } from 'react';


function Profile() {
  const {user, favoriteMovies, fetchFavoriteMovies, imgUrl} = useContext(UserContext)
  const [show, setShow] = useState(false)

  function handleClick () {
     setShow(!show)
  }
  useEffect(()=>{
    if (user) {
      fetchFavoriteMovies()
    }
  }, [])


  return (
   <div className='profile'>
    <div className='profileLeft'> 
        <img src='/image/images.png' />
        {user && <h1>{user.username}<button onClick={handleClick}> <i className='fa fa-heart'></i> </button>
        </h1> }
       
    </div>  
    <div className='profileRight'>
        <ul className={show ? '' : 'noShow'} >
          {
            favoriteMovies.map( movie =>
              <li key={movie.id}>
              <img src={`${imgUrl}${movie.poster_path}`} />
              <Link to={`/singlePage/${movie.id}`} >
                 {movie.original_title} 
                 </Link>
              </li>  
            )}
        </ul>
        <div className='profileRange'>
               {/* <div>1</div>
               <div>2</div> */}
               {/* <input type='range' />
               <input type='range' /> */}

        </div>
    </div>   
   </div>
  )
}

export default Profile