

import React,  { useContext } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from './UserContext';


function Card({item}) {
    const {imgUrl} = useContext(UserContext)
    
            return (
           <li>
            <Link to={`/singlePage/${item.id}`}  >
            <div>
             <img
              src={`${imgUrl}${item.poster_path}`} 
             />
             <span className='mainMTHD'>HD</span>
             <div>
              <h4>{item.original_title}</h4>
              <h4>{item.original_name} </h4>
              <p>{String(item.release_date).split("-")[0]} <span className='mainMTinfo'> movie </span></p>
             </div>
            </div>
    </Link>
    </li>
            )
            }

export default Card
