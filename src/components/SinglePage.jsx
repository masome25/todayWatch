

import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from './UserContext';


function SinglePage() {

   const { user, session, favoriteMovies, setFavoriteMovies} = useContext(UserContext);
   const { id } = useParams();
   const [isFavorite,setIsFavorite] = useState(false)
   const[movieID, setMovieID]=useState({})
   const[similarMovies, setSimilarMovies]=useState([])

   async function loadMovie() {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b1b8932c621313a29fd6d714a90f292e&session_id=23ed4c817dbba52339cec1f094031b9225da2fb9`);
    setMovieID(data);
     }
   async function getSimilarMovies() {
        const {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=b1b8932c621313a29fd6d714a90f292e`)
        setSimilarMovies(data.results)
    }
    useEffect(()=>{
        loadMovie();
        getSimilarMovies()
    }, [])


   async function fetchFavoriteMovies(id) {
    const favResult = await axios.get(`https://api.themoviedb.org/3/account/${id}/favorite/movies?api_key=b1b8932c621313a29fd6d714a90f292e&session_id=${session}`);
    setFavoriteMovies(prev => ([...prev, favResult.data.results[0]]))
  }
  async function addToFavorite () {
      await axios.post(`https://api.themoviedb.org/3/account/${id}/favorite?api_key=b1b8932c621313a29fd6d714a90f292e&session_id=${session}`
      ,{
      media_type: "movie",
      media_id: movieID.id,
      favorite: !isFavorite,
    }
    )
  }
  function handleFavorite () {
    user && fetchFavoriteMovies(user.id)
    setIsFavorite(prev=>!prev)
    addToFavorite()
   } 
 console.log(favoriteMovies)

  return (
    <div>
   <div className='singlePage' 
    style={{
        backgroundImage: `url(${`https://www.themoviedb.org/t/p/w220_and_h330_face${movieID.poster_path}`})`
      }}
   >
   <div className='opaCity'>
   <div className='singlePageLeft'>
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieID.poster_path}`} /><br />
      <button onClick={handleFavorite}
               className={isFavorite?"color":""}>
                 <i className='fa fa-heart-o'></i> 
                   Add to Favorite
                    <i className='fa fa-heart-o'></i>
                    </button><br />
      <button>Share</button>
   </div>
    <div className='singlePageRight'>
      <h1>
        {movieID.title}
      </h1>
       <p>
       {/* {movieID.release_date.split("-")[0]} */}
       {/* {console.log(typeof(movieID.release_date))}
        */}
       </p>
         <p>
          {movieID.overview}
        </p>
        <p>
          {movieID.popularity}
        </p>
       
        <hr/>
        <div >
            <h2>You May Also Like :</h2>
            <ul className='singlePageSimilar'>
               {
                 similarMovies.splice(0, 5).map((movie)=>{
                   return (
                      <li key={movie.id}>
                        <img
                           src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} 
                        />
                      </li>
                 )
             }
        )  
     }
     </ul>
        </div>
     </div>
    {/* <div className='singlePageTrailer'>
    <iframe width="400" height="300" 
      src='https:/youtube/Wg86eQkdud' >
    </iframe> 

    </div> */}
   </div>
   </div>
   </div>
  )

}

    
export default SinglePage
