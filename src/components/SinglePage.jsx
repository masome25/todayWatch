

import axios from 'axios'
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect} from "react";
import { UserContext } from './UserContext';
import Card from './Card';


function SinglePage() {
   const { user, session, apiKey, baseUrl, imgUrl, favoriteMovies, setFavoriteMovies} = useContext(UserContext);
   const { id } = useParams();
   const [isFavorite,setIsFavorite] = useState(false)
   const[movie, setMovie]=useState({})
   const [videos, setVideos] = useState([])
   const[similarMovies, setSimilarMovies]=useState([])
   const [star, setStar] = useState(0)



   async function loadMovie() {
    const { data } = await axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}&session_id=${session}`);
    setMovie(data);
     }
   async function getTrailer () {
      const {data} = await axios.get(`${baseUrl}movie/${id}/videos?api_key=${apiKey}`)
      setVideos(data.results)
     }
   async function getSimilarMovies() {
        const {data}= await axios.get(`${baseUrl}movie/${id}/similar?api_key=${apiKey}`)
        setSimilarMovies(data.results.splice(0, 5))
    }
    useEffect(()=>{
        loadMovie()
        getSimilarMovies()
        getTrailer()
    }, [])



    useEffect(() => {
      if (movie && favoriteMovies.length) {
        const favMovie = favoriteMovies.find((f) => f.id === movie?.id);
        setIsFavorite(Boolean(favMovie));
      }
    }, [movie, favoriteMovies]);
  
  async function addToFavorite () {
      await axios.post(`${baseUrl}account/${id}/favorite?api_key=${apiKey}&session_id=${session}`
      ,{
      media_type: "movie",
      media_id: movie.id,
      favorite: !isFavorite,
    })
     }
  function handleFavorite () {
    setIsFavorite(prev=>!prev)
    addToFavorite()
     } 



//  async function ratingChanged(rate) {
//       await fench.post(`movie/${movie.id}/rating`, { value: rate * 2 });
//     }

  return (
    <>
   <div className='singlePage' 
    style={{
        backgroundImage: `url(${`${imgUrl}${movie.backdrop_path}`})`
      }}
   >
   <div className='opaCity'>
   <div className='singlePageInfo'>
   <div className='singlePageLeft'>
      <img src={`${imgUrl}${movie.poster_path}`} /><br />
      <button 
      onClick={handleFavorite}
      style={{color : 'yellow'}}>
                   Add to Favorite
      </button><br />
      <button>Share</button>
   </div>
     <div className='singlePageRight'>
      <h1>
        {movie.title}
      </h1>
       <p>
        {String(movie.release_date).split("-")[0]}
       </p>
         <p>
          {movie.overview}
        </p>
        <p>
          {movie.popularity}
        </p>
       
         <div className='singlePageRate'>
         {
          [0, 1, 2, 3, 4].map((item, index)=>
          <button onClick={()=>{setStar(index)}} key={index}>
             {  index <= star  ? <i className='fa fa-star'></i> : <i className='fa fa-star-o'></i> }
          </button>
       )}
         </div>
       
        <hr/>
        <div className='singlePageSimilar' >
            <h2>You May Also Like :</h2>
            <ul>
               {
                 similarMovies.map((movie)=> 
                      <Card item={movie} key={movie.id}/> )  
               }
            </ul>
        </div>
     </div>
   </div>
   <div className='singlePageTrailer'>
    <ul>
    {
      videos.splice(0, 4).map((video)=>
          <iframe width="300" height="150" 
                  key={video.id}
                  src={`https://www.youtube.com/embed/${video.key}`}
          ></iframe>    
      )
    }
    </ul>
   </div>
   </div>
   </div>
   </>
  )
}
    
export default SinglePage
