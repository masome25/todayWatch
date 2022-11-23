

import React, { useEffect , useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


function TvList() {

  const [films, setFilms] = useState([])

  async function getTv () {
     const {data} = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=b1b8932c621313a29fd6d714a90f292e')
     setFilms(data.results)
     console.log(data)
  }
  useEffect(() => {getTv()}, [])
  
  return (
    <div className='mainMT'>
    <h1>List of Tv</h1>
       <ul>
       {
            films.splice(0, 12).map( film =>
            {
            
              return (
                <Link to={`/singlePage/${film.id}`}>
                <li key={film.id}>
                    <div>
                       <img
                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${film.poster_path}`} 
                        />
                        <span className='mainMTHD'>HD</span>
                     </div>
                     <div>
                       <h4>  {film.original_name} </h4>
                       <p> 2022 . 94 min<span className='mainMTinfo'> Tv </span></p>
                     </div>    
                  </li>
                </Link>
              )
                   
           }
         )
       }
       
       </ul>
   </div> 
 )  
}

export default TvList