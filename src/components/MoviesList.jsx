 import React, { useEffect , useState} from 'react'
 import axios from 'axios'
 import { Link } from "react-router-dom";
 
 function MoviesList() {
    const [movies, setMovies]=useState([])
   
   async function getMovies () {
       const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b1b8932c621313a29fd6d714a90f292e')
        setMovies(data.results)
   }
      useEffect(() => { getMovies()},[])
  
  return (
        <div className='mainMT'>
        
        <h1>List of Movies</h1>
           <ul>
           {
                movies.splice(0, 12).map( (movie) =>{
                  return (
                  <Link to={`/singlePage/${movie.id}`}  key={movie.id}>
                  <li >
                          <div>
                           <img
                            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} 
                           />
                           <span className='mainMTHD'>HD</span>
                           <div>
                            <h4>{movie.original_title}</h4>
                            <p> 2022 . 94 min<span className='mainMTinfo'> movies</span></p>
                           </div>
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

 export default MoviesList