

import React, { useEffect , useState, useContext} from 'react'
import axios from 'axios'
import { UserContext } from './UserContext';
import Card from './Card';


function TvList() {
  const {apiKey, baseUrl} = useContext(UserContext)
  const [films, setFilms] = useState([])

  async function getTv () {
     const {data} = await axios.get(`${baseUrl}tv/popular?api_key=${apiKey}`)
     setFilms(data.results)
  }
  useEffect(() => {
    getTv()
  }, [])
  
  return (
    <div className='mainMT'>
    <h1>List of Tv</h1>
       <ul>
       {
            films.splice(0, 12).map( film =>

               <Card item={film} key={film.id} />        
           
         )
       }
       
       </ul>
   </div> 
 )  
}

export default TvList