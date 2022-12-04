 
 
import React, { useEffect , useState, useContext} from 'react'
import axios from 'axios'
import { UserContext } from './UserContext';
import Card from './Card';

 function MoviesList() {
    const {apiKey, baseUrl} = useContext(UserContext)
    const [movies, setMovies]=useState([])
    
   
   async function getMovies () {
       const {data} = await axios.get(`${baseUrl}movie/popular?api_key=${apiKey}`)
        setMovies(data.results)
   }
      useEffect(() => { 
        getMovies()
      },[])
  
  return (
        <div className='mainMT'>
        
        <h1>List of Movies</h1>
           <ul>
           {
                movies.splice(0, 12).map( (movie) =>
               <Card item={movie} key={movie.id}/>   
               
            )
        }

           </ul>
       </div> 
     )       
 }

 export default MoviesList