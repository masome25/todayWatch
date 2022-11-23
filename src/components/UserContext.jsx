import axios from "axios"
import { createContext, useState, useEffect } from "react"

const apiKey = 'b1b8932c621313a29fd6d714a90f292e'
const baseUrl = 'https://api.themoviedb.org/3/authentication'
export const UserContext = createContext()


export default function UserProvider ({children}) {
    const[user, setUser] = useState(null)
    const[session, setSession]=useState(()=> localStorage.getItem('session'))

  async function getUser() {
    const {data} = await axios.get(`https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${session}`)
    setUser(data)
  }
  useEffect(() => {
    {session && getUser()}
//   if(session) {getUser()} 
  },[session])
 

async function login (username, password) {
    const tokenRequest = await axios.get(`${baseUrl}/token/new?api_key=${apiKey}`)
    const authorize = await axios.post(`${baseUrl}/token/validate_with_login?api_key=${apiKey}`, {
        username ,
        password ,
        request_token : tokenRequest.data.request_token
    })
    const sessionId = await axios.post(`${baseUrl}/session/new?api_key=${apiKey}`, {
        request_token : authorize.data.request_token
    })
     
    setSession(sessionId.data.session_id)
    localStorage.setItem('session', session)
}

 function logout () {
    setUser(null)
    setSession(() => {localStorage.setItem('session' , null)})
 }

    return(
        <UserContext.Provider value={{login, user, logout}}>
            {children}
        </UserContext.Provider>
    )
}


