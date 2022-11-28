


import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react';


function Profile() {
  const {user, favoriteMovies, setFavoriteMovies } = useContext(UserContext)
  return (
    <div className='profile'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIV1ppwChzluddwMfC-9jCDE7uSri4SAqhw&usqp=CAU'/>
        <h1>MasOme EhsAniMehr</h1>
        <p>List Watching Movies : </p>
        <ul>
          {
            favoriteMovies.map((e)=>{
               return (
              <li key={e.id}>
                 {e.original_title}
              </li>
            ) 
            {/* console.log(favResult) */}
            }
           
             
            )
          }
        </ul>
    </div>
  )
}

export default Profile