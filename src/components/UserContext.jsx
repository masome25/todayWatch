

import axios from "axios"
import { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext()
export default function UserProvider ({children}) {

    const apiKey = 'b1b8932c621313a29fd6d714a90f292e'
    const baseUrl = 'https://api.themoviedb.org/3/'
    const imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    const [user, setUser] = useState(null)
    const [okyLogin, setOkyLogin] = useState(true)
    const [session, setSession]=useState(()=> localStorage.getItem('session'))
    const [favoriteMovies, setFavoriteMovies] = useState([])
    const location = useLocation()
    const navigate = useNavigate()


  async function fetchFavoriteMovies(id=user.id) {
      const favResult = await axios.get(`${baseUrl}account/${id}/favorite/movies?api_key=${apiKey}&session_id=${session}`);
      setFavoriteMovies(favResult.data.results)
  
    }
      

  async function getUser() {
    const {data} = await axios.get(`${baseUrl}/account?api_key=${apiKey}&session_id=${session}`)
    fetchFavoriteMovies(data.id)
    setUser(data)
  }
  useEffect(() => {
    if(session){
      localStorage.setItem("session", session)
      getUser()
      
      if (location.pathname === "/login") {
        navigate("/profile", { replace: true });
      }
    }
  },[session])


  async function login (username, password) {
    try {
      const tokenRequest = await axios.get(`${baseUrl}authentication/token/new?api_key=${apiKey}`)
      const authorize = await axios.post(`${baseUrl}authentication/token/validate_with_login?api_key=${apiKey}`, {
          username ,
          password ,
          request_token : tokenRequest.data.request_token
      })
      const sessionId = await axios.post(`${baseUrl}authentication/session/new?api_key=${apiKey}`, {
          request_token : tokenRequest.data.request_token
      })
      setSession(sessionId.data.session_id) 
    }
    catch {
      setOkyLogin(false)
    }
  }

 function logout () {
    setUser({});
    setSession(null);
    localStorage.clear();
 }

 return(
   <UserContext.Provider 
      value={{
        login, 
        user,
        session, 
        logout, 
        favoriteMovies, 
        setFavoriteMovies, 
        fetchFavoriteMovies,
        apiKey, 
        baseUrl, 
        imgUrl,
        okyLogin
        }}
     >
     {children}
   </UserContext.Provider>
    )
}


